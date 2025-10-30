import Head from 'next/head';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>ProductAI - Dashboard</title>
        <meta name="description" content="Panoramica del workspace ProductAI." />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            ProductAI
          </Link>
          <div className="flex items-center space-x-4 text-gray-600">
            <Link href="/content-generation" className="hover:text-gray-900">
              Generazione contenuti
            </Link>
            <Link href="/market-analysis" className="hover:text-gray-900">
              Analisi di mercato
            </Link>
            <Link href="/account" className="hover:text-gray-900">
              Account
            </Link>
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              title: 'Generazioni questo mese',
              value: '845',
              subtitle: '+12% rispetto al mese precedente',
            },
            {
              title: 'Schede pubblicate',
              value: '312',
              subtitle: '78 in revisione, 24 in attesa approvazione',
            },
            {
              title: 'Valutazione qualità media',
              value: '4.6/5',
              subtitle: 'Basata su feedback dei team locali',
            }].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl shadow-lg p-6">
                <p className="text-sm text-gray-500 uppercase tracking-wide">{card.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{card.value}</p>
                <p className="text-sm text-gray-600 mt-1">{card.subtitle}</p>
              </div>
            ))}
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prossime azioni consigliate</h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Aggiorna le descrizioni dei prodotti top seller in Francia con tono più promozionale.</li>
              <li>• Crea nuove immagini contestuali per il lancio della linea Primavera Estate.</li>
              <li>• Analizza il calo di conversione nella categoria accessori tech e pianifica un test A/B.</li>
            </ul>
            <Link href="/content-generation" className="btn-secondary inline-flex items-center mt-6">
              Vai alla generazione contenuti
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
