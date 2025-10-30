import Head from 'next/head';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setMessage('Funzionalità di autenticazione in arrivo. Contatta il nostro team per attivare il tuo account.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ProductAI - Accedi</title>
        <meta name="description" content="Accedi alla dashboard di ProductAI." />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            ProductAI
          </Link>
          <Link href="/signup" className="btn-secondary">
            Crea un account
          </Link>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Bentornato</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Accedi
            </button>
          </form>
          {message && <p className="mt-4 text-center text-sm text-gray-600">{message}</p>}
          <p className="mt-6 text-sm text-gray-500 text-center">
            Hai dimenticato la password? <Link href="/support" className="text-primary-600">Contatta il supporto</Link>.
          </p>
        </div>
      </main>
    </div>
  );
}
