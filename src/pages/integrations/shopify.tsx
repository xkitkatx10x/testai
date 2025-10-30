import Head from 'next/head';
import Link from 'next/link';

export default function ShopifyIntegration() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ProductAI - Integrazione Shopify</title>
        <meta name="description" content="Dettagli sull'integrazione Shopify di ProductAI." />
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Integrazione Shopify</h1>
            <p className="text-gray-600 mb-6">
              Sincronizza automaticamente prodotti, collezioni e metafield da Shopify. ProductAI rileva gli aggiornamenti in tempo reale e aggiorna le schede con le ultime generazioni dei moduli AI.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Installazione con app privata e chiavi API sicure.</li>
              <li>Supporto per Shopify Markets e currency multiple.</li>
              <li>Mapping automatico tra metafield e attributi dei modelli AI.</li>
              <li>Invio degli output direttamente nei campi descrizione, SEO e card.</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Requisiti</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Shopify Plus o Advanced con API access.</li>
              <li>Permessi per leggere e scrivere prodotti, media e metafield.</li>
              <li>Webhook attivi per prodotti, varianti e immagini.</li>
            </ul>
            <Link href="/demo" className="btn-secondary inline-flex items-center mt-6">
              Pianifica onboarding assistito
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
