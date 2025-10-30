import Head from 'next/head';
import Link from 'next/link';

export default function WooCommerceIntegration() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ProductAI - Integrazione WooCommerce</title>
        <meta name="description" content="Integra ProductAI con WooCommerce." />
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Integrazione WooCommerce</h1>
            <p className="text-gray-600 mb-6">
              Il plugin ufficiale ProductAI per WordPress sincronizza prodotti, tassonomie e campi personalizzati. Genera descrizioni e meta tag direttamente dal backend WooCommerce.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Compatibile con WordPress 6+ e WooCommerce 7+.</li>
              <li>Supporto per prodotti semplici, variabili e bundle.</li>
              <li>Mapping automatico con campi ACF e custom field.</li>
              <li>Supporto multilingua tramite WPML e Polylang.</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Setup rapido</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Installa il plugin ProductAI dal repository privato.</li>
              <li>Configura le API key e seleziona gli attributi da sincronizzare.</li>
              <li>Imposta la frequenza di aggiornamento e scegli i modelli AI da utilizzare.</li>
            </ol>
            <Link href="/demo" className="btn-secondary inline-flex items-center mt-6">
              Prenota una sessione di setup guidato
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
