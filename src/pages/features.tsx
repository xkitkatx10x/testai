import Head from 'next/head';
import Link from 'next/link';

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ProductAI - Funzionalità</title>
        <meta
          name="description"
          content="Scopri tutte le funzionalità della piattaforma ProductAI per ottimizzare le schede prodotto."
        />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            ProductAI
          </Link>
          <nav className="hidden md:flex space-x-6 text-gray-600">
            <Link href="/features" className="text-primary-600 font-semibold">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <section className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Una piattaforma, quattro moduli specializzati</h1>
            <p className="text-lg text-gray-600">
              ProductAI coordina diversi agenti verticali per creare contenuti, ottimizzare le immagini e analizzare le prestazioni dei tuoi prodotti. Ogni modulo nasce da casi d&apos;uso reali raccolti con merchant enterprise.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Agente Titoli',
                description:
                  'Propone headline SEO-ready sulla base di tono di voce, parole chiave e posizionamento del brand.',
              },
              {
                title: 'Agente Descrizioni Brevi',
                description:
                  'Sintetizza punti di forza e benefici in 160 caratteri, ottimizzati per schede prodotto e listing feed.',
              },
              {
                title: 'Agente Scheda Prodotto',
                description:
                  'Genera paragrafi modulari, call to action e suggerimenti multilingua pronti per CMS e marketplace.',
              },
              {
                title: 'Agente Meta Tag',
                description:
                  'Scrive meta-title, meta-description e alt text coerenti con le linee guida SEO del tuo settore.',
              },
              {
                title: 'Monitor prestazioni',
                description:
                  'Tiene traccia di CTR e conversioni, segnala i prodotti con contenuti da rinfrescare e suggerisce priorità.',
              },
              {
                title: 'Workflow collaborativi',
                description:
                  'Invita copywriter, product manager e agenzie; definisci stati di approvazione e commenti contestuali.',
              },
            ].map((feature) => (
              <div key={feature.title} className="card h-full">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h2>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Integrazioni con i tuoi sistemi</h2>
                <p className="text-gray-600 mb-6">
                  Connettori ufficiali per Shopify, WooCommerce e Magento permettono di importare automaticamente cataloghi, immagini e attributi custom. Le API REST e GraphQL consentono invece di collegare PIM e DAM proprietari.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/integrations/shopify" className="btn-secondary">
                    Shopify
                  </Link>
                  <Link href="/integrations/woocommerce" className="btn-secondary">
                    WooCommerce
                  </Link>
                  <Link href="/integrations/magento" className="btn-secondary">
                    Magento
                  </Link>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Automazioni principali</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Sync pianificato dei cataloghi</li>
                  <li>Validazione SEO automatica prima della pubblicazione</li>
                  <li>Storico versioni con confronto A/B</li>
                  <li>Esportazione verso marketplace in un click</li>
                </ul>
              </div>
            </div>
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
