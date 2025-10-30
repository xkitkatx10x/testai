import Head from 'next/head';
import Link from 'next/link';

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ProductAI - Lavora con noi</title>
        <meta name="description" content="Posizioni aperte in ProductAI." />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            ProductAI
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            Chi siamo
          </Link>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Entra nel team ProductAI</h1>
            <p className="text-gray-600 mb-6">
              Lavoriamo in modalità remote-first con hub a Milano, Barcellona e Berlino. Cerchiamo persone curiose, attente ai dati e appassionate di e-commerce.
            </p>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Senior Product Marketing Manager</h2>
                <p className="text-gray-600">Guida il posizionamento di ProductAI e coordina campagne multi-canale con il team growth.</p>
                <Link href="mailto:jobs@productai.com" className="text-primary-600 font-medium">
                  Invia candidatura →
                </Link>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Full-Stack Engineer</h2>
                <p className="text-gray-600">Costruisci dashboard, API e integrazioni enterprise con stack TypeScript, Next.js e Node.</p>
                <Link href="mailto:jobs@productai.com" className="text-primary-600 font-medium">
                  Candidati ora →
                </Link>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">AI Prompt Designer</h2>
                <p className="text-gray-600">Progetta prompt verticali per fashion, beauty, tech e arredo, misurando l&apos;impatto sui KPI.</p>
                <Link href="mailto:jobs@productai.com" className="text-primary-600 font-medium">
                  Invia candidatura →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
