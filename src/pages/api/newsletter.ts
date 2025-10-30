import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

type NewsletterEntry = {
  email: string;
  createdAt: string;
};

const filePath = path.join(process.cwd(), 'data', 'newsletter.json');

async function readEntries(): Promise<NewsletterEntry[]> {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data) as NewsletterEntry[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, '[]', 'utf8');
      return [];
    }
    throw error;
  }
}

async function writeEntries(entries: NewsletterEntry[]) {
  await fs.writeFile(filePath, JSON.stringify(entries, null, 2), 'utf8');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body as { email?: string };

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Email mancante.' });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
      return res.status(400).json({ error: 'Email non valida.' });
    }

    try {
      const entries = await readEntries();
      const alreadyExists = entries.some((entry) => entry.email === normalizedEmail);

      if (alreadyExists) {
        return res.status(200).json({ success: true, duplicate: true });
      }

      const newEntry: NewsletterEntry = {
        email: normalizedEmail,
        createdAt: new Date().toISOString(),
      };

      await writeEntries([...entries, newEntry]);

      return res.status(201).json({ success: true });
    } catch (error) {
      console.error('Newsletter subscription error', error);
      return res.status(500).json({ error: 'Errore interno del server.' });
    }
  }

  if (req.method === 'GET') {
    try {
      const entries = await readEntries();
      return res.status(200).json({ entries });
    } catch (error) {
      console.error('Newsletter fetch error', error);
      return res.status(500).json({ error: 'Errore interno del server.' });
    }
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'Metodo non consentito.' });
}
