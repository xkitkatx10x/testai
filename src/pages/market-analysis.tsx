import Head from 'next/head';
import Link from 'next/link';

export default function MarketAnalysis() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>ProductAI - Analisi di mercato</title>
        <meta
          name="description"
          content="Monitora competitor, pricing e performance di catalogo con i moduli di market intelligence di ProductAI."
        />
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Monitoraggio competitivo in tempo reale</h1>
            <p className="text-gray-600 mb-6">
              Raccogliamo dati da marketplace, feed di competitor e recensioni per suggerirti price point, priorità contenutistiche e opportunità di upsell.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-gray-600">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Pricing dinamico</h2>
                <p>Aggiornamenti giornalieri sui prezzi concorrenti e alert per margini sotto soglia.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Benchmark contenuti</h2>
                <p>Analizziamo tone of voice, lunghezza e keyword delle schede competitor per suggerire ottimizzazioni.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Sentiment &amp; recensioni</h2>
                <p>Integra recensioni pubbliche per identificare esigenze dei clienti e arricchire i tuoi copy.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Reportistica automatica</h2>
            <p className="text-gray-600 mb-6">
              Crea report personalizzati e condividili con marketing, merchandising e supply chain. Gli insight sono integrati direttamente nella dashboard di generazione contenuti.
            </p>
            <Link href="/demo" className="btn-secondary">
              Richiedi una demo del modulo Market Intelligence
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
