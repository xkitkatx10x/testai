import Head from 'next/head';
import Link from 'next/link';

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ProductAI - Supporto</title>
        <meta name="description" content="Contatta il supporto ProductAI." />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            ProductAI
          </Link>
          <Link href="/login" className="text-gray-600 hover:text-gray-900">
            Accedi
          </Link>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Hai bisogno di aiuto?</h1>
            <p className="text-gray-600 mb-6">
              Il nostro team risponde dal lunedì al venerdì, 9-19 CET. Utilizza il form per aprire un ticket oppure scrivi a support@productai.com.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email di contatto
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                  Argomento
                </label>
                <select
                  id="topic"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="onboarding">Onboarding</option>
                  <option value="billing">Fatturazione</option>
                  <option value="technical">Supporto tecnico</option>
                  <option value="feedback">Suggerimenti</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <button type="submit" className="btn-primary">
                Invia richiesta
              </button>
            </form>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Risorse utili</h2>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/features" className="text-primary-600">
                  Guida rapida agli agenti di generazione contenuti
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-primary-600">
                  Documentazione integrazioni e connettori
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-primary-600">
                  Informazioni su piani e fatturazione
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
