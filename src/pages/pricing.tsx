import Head from 'next/head';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '€69/mese',
    description: 'Per cataloghi fino a 500 SKU e team ridotti.',
    features: [
      '500 generazioni di contenuti al mese',
      '1 integrazione e-commerce',
      'Workflow approvativi base',
      'Supporto email entro 24h',
    ],
  },
  {
    name: 'Growth',
    price: '€149/mese',
    description: 'Per e-commerce in espansione con cataloghi multilingua.',
    features: [
      '2.500 generazioni di contenuti',
      'Integrazioni illimitate',
      'Versioning e A/B test',
      'Supporto prioritario e onboarding guidato',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Contattaci',
    description: 'Per brand globali e marketplace complessi.',
    features: [
      'Generazioni illimitate e modelli custom',
      'SLA dedicati e ambiente on-premise',
      'Audit di qualità trimestrale',
      'Account manager dedicato',
    ],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ProductAI - Prezzi</title>
        <meta name="description" content="Scegli il piano ProductAI più adatto al tuo e-commerce." />
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
            <Link href="/pricing" className="text-primary-600 font-semibold">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Piani trasparenti, senza sorprese</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ogni piano include accesso a tutti gli agenti AI, allineamento con il tuo tone of voice e aggiornamenti continui del modello linguistico.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`card border ${plan.highlight ? 'border-primary-500 shadow-2xl scale-105' : 'border-transparent'}`}
              >
                <h2 className="text-2xl font-semibold text-gray-900">{plan.name}</h2>
                <p className="text-3xl font-bold text-primary-600 my-4">{plan.price}</p>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-2 text-gray-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`mt-8 inline-block w-full text-center py-2 px-4 rounded-md font-medium transition-colors ${
                    plan.highlight
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Inizia ora
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hai esigenze particolari?</h2>
            <p className="text-gray-600 mb-6">
              Il team enterprise può personalizzare modelli, integrazioni e infrastruttura in base alle policy della tua organizzazione.
            </p>
            <Link href="/demo" className="btn-secondary inline-flex items-center">
              Richiedi una demo dedicata
            </Link>
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
