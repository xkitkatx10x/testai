import Head from 'next/head';
import Link from 'next/link';

export default function Integrations() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ProductAI - Integrazioni</title>
        <meta name="description" content="Scopri le integrazioni ufficiali di ProductAI." />
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
          <section className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Connettori pronti all&apos;uso</h1>
            <p className="text-lg text-gray-600">
              Sincronizza cataloghi, immagini e stock con la tua piattaforma e-commerce preferita. Tutte le integrazioni includono mapping automatico degli attributi e webhook per gli aggiornamenti.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              href: '/integrations/shopify',
              name: 'Shopify',
              description: 'Importa prodotti, metafield e collezioni. Supporto per Shopify Markets e lingue multiple.',
            },
            {
              href: '/integrations/woocommerce',
              name: 'WooCommerce',
              description: 'Connettore ufficiale per WordPress con sincronizzazione varianti e attributi custom.',
            },
            {
              href: '/integrations/magento',
              name: 'Magento',
              description: 'Compatibile con Adobe Commerce e store multi-sito. Gestione ruoli e approvazioni.',
            }].map((integration) => (
              <Link key={integration.href} href={integration.href} className="card block h-full">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{integration.name}</h2>
                <p className="text-gray-600">{integration.description}</p>
              </Link>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
