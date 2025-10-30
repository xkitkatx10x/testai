import Head from 'next/head';
import Link from 'next/link';

export default function MagentoIntegration() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ProductAI - Integrazione Magento</title>
        <meta name="description" content="Integra ProductAI con Adobe Commerce / Magento." />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/integrations" className="text-sm text-primary-600">
            ← Tutte le integrazioni
          </Link>
          <Link href="/signup" className="btn-primary">
            Attiva integrazione
          </Link>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Integrazione Magento</h1>
            <p className="text-gray-600 mb-6">
              Connettore API-first compatibile con Adobe Commerce on-premise e cloud. Gestisce cataloghi multi-store, ruoli di approvazione e deployment in ambienti separati.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Sincronizzazione bidirezionale di attributi, categorie e media.</li>
              <li>Supporto per store view multiple e localizzazioni.</li>
              <li>Gestione ruoli con granularità su generazione e pubblicazione.</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Opzioni enterprise</h2>
            <p className="text-gray-600 mb-4">
              Disponibili ambienti dedicati, replica geografica e audit log conformi alle policy di settore (fashion, pharma, telco).
            </p>
            <Link href="/demo" className="btn-secondary inline-flex items-center">
              Confrontati con un solution architect
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
