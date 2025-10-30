import Head from 'next/head';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

export default function Signup() {
  const [form, setForm] = useState({ company: '', email: '', password: '', teamSize: '1-5' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ProductAI - Crea un account</title>
        <meta name="description" content="Avvia la prova gratuita di ProductAI." />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            ProductAI
          </Link>
          <Link href="/login" className="text-gray-600 hover:text-gray-900">
            Hai già un account?
          </Link>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Attiva la prova di 14 giorni</h1>
          <p className="text-gray-600 text-center mb-8">
            Nessuna carta richiesta. Accedi a tutti i moduli e invia fino a 1.000 generazioni di contenuti.
          </p>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Azienda
              </label>
              <input
                id="company"
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email di lavoro
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                minLength={8}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-1">
                Dimensione team contenuti
              </label>
              <select
                id="teamSize"
                value={form.teamSize}
                onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="1-5">1 - 5 persone</option>
                <option value="6-20">6 - 20 persone</option>
                <option value="20+">Oltre 20 persone</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="btn-primary w-full md:w-auto">
                Attiva prova gratuita
              </button>
            </div>
          </form>
          {submitted && (
            <p className="mt-6 text-center text-sm text-gray-600">
              Grazie! Ti contatteremo entro 1 giorno lavorativo per completare l&apos;attivazione del tuo workspace.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
