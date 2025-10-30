import Head from 'next/head';
import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ProductAI - Termini di servizio</title>
        <meta name="description" content="Termini e condizioni di ProductAI." />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            ProductAI
          </Link>
          <Link href="/support" className="text-gray-600 hover:text-gray-900">
            Supporto
          </Link>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-600">
          <h1 className="text-3xl font-bold text-gray-900">Termini di servizio</h1>
          <p>
            I presenti Termini disciplinano l&apos;utilizzo della piattaforma ProductAI. Accedendo o utilizzando il servizio accetti integralmente le condizioni riportate di seguito.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900">Utilizzo del servizio</h2>
          <p>
            È vietato utilizzare la piattaforma per finalità illecite o non autorizzate. Gli output generati devono rispettare le policy di pubblicazione dei marketplace e dei canali di vendita collegati.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900">Limitazione di responsabilità</h2>
          <p>
            ProductAI fornisce modelli AI addestrati su dataset di settore e monitora la qualità dei contenuti. Tuttavia, l&apos;ultima revisione e responsabilità editoriale restano in capo al cliente.
          </p>
          <p>
            Per chiarimenti su clausole specifiche contatta <Link href="mailto:legal@productai.com" className="text-primary-600">legal@productai.com</Link>.
          </p>
        </div>
      </main>
    </div>
  );
}
