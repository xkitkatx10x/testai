import type { NextApiRequest, NextApiResponse } from 'next';
import {
  generateTitle,
  generateShortDescription,
  generateProductCard,
  generateMetaTags,
  ProductData,
  TitleOptions,
  DescriptionOptions,
  CardOptions,
  MetaTagOptions,
} from '../../lib/contentGenerators';

type SuccessResponse =
  | { agentType: 'title'; title: string }
  | { agentType: 'description'; description: string }
  | { agentType: 'card'; card: ReturnType<typeof generateProductCard> }
  | { agentType: 'meta'; meta: ReturnType<typeof generateMetaTags> };

type ErrorResponse = { error: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<SuccessResponse | ErrorResponse>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Metodo non consentito.' });
  }

  const { agentType, productData, options } = req.body as {
    agentType?: 'title' | 'description' | 'card' | 'meta';
    productData?: ProductData;
    options?: TitleOptions | DescriptionOptions | CardOptions | MetaTagOptions;
  };

  if (!agentType || !productData) {
    return res.status(400).json({ error: 'Parametri mancanti.' });
  }

  try {
    switch (agentType) {
      case 'title': {
        const title = generateTitle(productData, options as TitleOptions);
        return res.status(200).json({ agentType: 'title', title });
      }
      case 'description': {
        const description = generateShortDescription(productData, options as DescriptionOptions);
        return res.status(200).json({ agentType: 'description', description });
      }
      case 'card': {
        const card = generateProductCard(productData, options as CardOptions);
        return res.status(200).json({ agentType: 'card', card });
      }
      case 'meta': {
        const meta = generateMetaTags(productData, options as MetaTagOptions);
        return res.status(200).json({ agentType: 'meta', meta });
      }
      default:
        return res.status(400).json({ error: 'Agente non supportato.' });
    }
  } catch (error) {
    console.error('Content generation error', error);
    return res.status(500).json({ error: 'Errore durante la generazione del contenuto.' });
  }
}
