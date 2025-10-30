import Head from 'next/head';
import Link from 'next/link';

export default function Demo() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ProductAI - Richiedi una demo</title>
        <meta name="description" content="Prenota una demo personalizzata della piattaforma ProductAI." />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            ProductAI
          </Link>
          <nav className="hidden md:flex space-x-6 text-gray-600">
            <Link href="/features" className="hover:text-gray-900">
              Funzionalità
            </Link>
            <Link href="/pricing" className="hover:text-gray-900">
              Prezzi
            </Link>
            <Link href="/about" className="hover:text-gray-900">
              Chi Siamo
            </Link>
            <Link href="/content-generation" className="hover:text-gray-900">
              Generazione Contenuti
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Accedi
            </Link>
            <Link href="/signup" className="btn-primary">
              Prova gratuita
            </Link>
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Prenota una demo live</h1>
            <p className="text-gray-600 mb-8">
              Raccontaci il tuo scenario: in 30 minuti analizzeremo il catalogo, valuteremo le integrazioni e ti mostreremo come gli agenti AI possono accelerare la creazione dei contenuti.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome e cognome
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Maria Rossi"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email di lavoro
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="maria@azienda.it"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Azienda
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Azienda S.p.A."
                />
              </div>
              <div>
                <label htmlFor="catalog" className="block text-sm font-medium text-gray-700 mb-1">
                  Dimensione catalogo
                </label>
                <select
                  id="catalog"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="<500">Meno di 500 SKU</option>
                  <option value="500-5000">500 - 5.000 SKU</option>
                  <option value=">5000">Oltre 5.000 SKU</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Note e obiettivi
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Condividi canali di vendita, mercati e priorità."
                />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="btn-secondary w-full md:w-auto">
                  Invia richiesta
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} ProductAI. Tutti i diritti riservati.</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Termini</Link>
            <Link href="/support">Supporto</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
