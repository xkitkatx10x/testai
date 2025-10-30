import Head from 'next/head';
import Link from 'next/link';

export default function Account() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>ProductAI - Impostazioni account</title>
        <meta name="description" content="Gestisci preferenze e team del tuo account ProductAI." />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            ProductAI
          </Link>
          <Link href="/logout" className="text-gray-600 hover:text-gray-900">
            Esci
          </Link>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Profilo organizzazione</h1>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
              <div>
                <dt className="font-medium text-gray-900">Nome organizzazione</dt>
                <dd>Demo Commerce S.p.A.</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Piano</dt>
                <dd>Growth (scadenza 31/12/2024)</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Integrazioni attive</dt>
                <dd>Shopify, Magento</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Manager di riferimento</dt>
                <dd>support@productai.com</dd>
              </div>
            </dl>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gestione team</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <th className="py-2">Nome</th>
                  <th className="py-2">Ruolo</th>
                  <th className="py-2">Stato</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm text-gray-600">
                <tr>
                  <td className="py-2">Maria Rossi</td>
                  <td>Admin</td>
                  <td>Attivo</td>
                </tr>
                <tr>
                  <td className="py-2">Luca Bianchi</td>
                  <td>Editor</td>
                  <td>Invito in sospeso</td>
                </tr>
                <tr>
                  <td className="py-2">Sofia Conti</td>
                  <td>Viewer</td>
                  <td>Attivo</td>
                </tr>
              </tbody>
            </table>
            <Link href="/support" className="btn-secondary inline-flex items-center mt-6">
              Gestisci inviti
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
