import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ProductAI - Chi siamo</title>
        <meta name="description" content="Scopri il team e la visione di ProductAI." />
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
            <Link href="/about" className="text-primary-600 font-semibold">
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Portiamo l&apos;AI nel cuore dei cataloghi prodotto</h1>
            <p className="text-lg text-gray-600">
              ProductAI nasce da un team di marketer, data scientist e ingegneri con esperienza diretta in grandi e-commerce europei. Costruiamo soluzioni pragmatiche che migliorano davvero la produttività dei team digitali.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: 'Visione',
              copy: 'Ridurre il time-to-market dei contenuti di prodotto portando automazione e governance in un&apos;unica piattaforma.',
            },
            {
              title: 'Metodo',
              copy: 'Collaboriamo con merchant e agenzie per addestrare modelli verticali, monitorando KPI reali e feedback qualitativi.',
            },
            {
              title: 'Affidabilità',
              copy: 'Privacy-by-design, infrastruttura europea e opzioni di deployment dedicato per settori regolamentati.',
            }].map((item) => (
              <div key={item.title} className="card h-full">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.copy}</p>
              </div>
            ))}
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Un team distribuito in tutta Europa</h2>
                <p className="text-gray-600 mb-6">
                  Operiamo in modalità remote-first con hub a Milano, Barcellona e Berlino. Il supporto è disponibile in italiano, spagnolo, tedesco e inglese.
                </p>
                <Link href="/careers" className="btn-secondary">
                  Lavora con noi
                </Link>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>2019</strong> — Lanciata la prima versione per un marketplace fashion.
                </p>
                <p>
                  <strong>2021</strong> — Apertura del programma partner per agenzie e system integrator.
                </p>
                <p>
                  <strong>2023</strong> — Integrazione con sistemi PIM/DAM enterprise e nuovi modelli linguistici proprietari.
                </p>
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
