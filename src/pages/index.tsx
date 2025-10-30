import Head from 'next/head';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

type NewsletterStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<NewsletterStatus>('idle');
  const [feedback, setFeedback] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setFeedback('Inserisci un indirizzo email valido.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setFeedback('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setFeedback(data.error || 'Impossibile completare l\'iscrizione.');
        return;
      }

      setStatus('success');
      setEmail('');
      setFeedback(data.duplicate ? 'Sei già iscritto alla nostra newsletter.' : 'Iscrizione completata! A breve riceverai aggiornamenti da ProductAI.');
    } catch (error) {
      console.error('Newsletter subscription failed', error);
      setStatus('error');
      setFeedback('Si è verificato un problema temporaneo. Riprova più tardi.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>ProductAI - Ottimizzazione Schede Prodotto con AI</title>
        <meta
          name="description"
          content="Piattaforma SaaS per ottimizzare le schede prodotto degli e-commerce attraverso moduli AI specializzati."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            ProductAI
          </Link>
          <nav className="hidden md:flex space-x-8 text-gray-600">
            <Link href="/features" className="hover:text-gray-900">
              Funzionalità
            </Link>
            <Link href="/pricing" className="hover:text-gray-900">
              Prezzi
            </Link>
            <Link href="/integrations" className="hover:text-gray-900">
              Integrazioni
            </Link>
            <Link href="/about" className="hover:text-gray-900">
              Chi siamo
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Accedi
            </Link>
            <Link href="/signup" className="btn-primary">
              Prova gratuita
            </Link>
            <Link href="/content-generation" className="hidden lg:inline-flex items-center text-gray-600 hover:text-gray-900">
              Dashboard AI
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Ottimizza le tue schede prodotto con intelligenza artificiale verticale
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Coordina copywriter, marketer e algoritmi in un unico workspace. Genera titoli, descrizioni, meta tag e insight competitivi in pochi minuti.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <Link href="/signup" className="btn-secondary text-center">
                  Attiva la prova gratuita
                </Link>
                <Link
                  href="/demo"
                  className="bg-white text-primary-700 hover:bg-gray-100 font-medium py-2 px-4 rounded-md transition-colors text-center"
                >
                  Richiedi una demo live
                </Link>
              </div>
              <p className="mt-6 text-sm text-primary-100">
                Nessuna carta richiesta. Include 1.000 generazioni e accesso a tutti i moduli.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white text-gray-800 p-6 rounded-xl shadow-xl space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="h-8 bg-primary-200 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-primary-100 rounded w-1/2 mb-2" />
                  <div className="h-4 bg-primary-100 rounded w-5/6" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-gray-100 rounded-lg" />
                  <div className="h-24 bg-gray-100 rounded-lg" />
                </div>
                <div className="h-10 bg-secondary-500 rounded-md" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Connettori ufficiali per il tuo e-commerce</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sincronizza cataloghi, immagini e stock da Shopify, WooCommerce e Magento. Mapping automatico degli attributi e webhook per aggiornamenti in tempo reale.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Shopify',
                description:
                  'Importa prodotti, metafield e collezioni. Supportiamo Shopify Markets e storefront multilingua.',
                href: '/integrations/shopify',
              },
              {
                title: 'WooCommerce',
                description:
                  'Plugin ufficiale per WordPress con sincronizzazione di varianti, tassonomie e campi personalizzati.',
                href: '/integrations/woocommerce',
              },
              {
                title: 'Magento',
                description:
                  'Connettore API-first compatibile con Adobe Commerce, store multipli e workflow di approvazione.',
                href: '/integrations/magento',
              },
            ].map((integration) => (
              <Link key={integration.title} href={integration.href} className="card h-full text-left">
                <div className="h-16 w-16 rounded-full bg-primary-100 text-primary-600 font-bold text-lg flex items-center justify-center mb-4">
                  {integration.title.slice(0, 2)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{integration.title}</h3>
                <p className="text-gray-600">{integration.description}</p>
                <span className="mt-4 inline-flex items-center text-primary-600 font-medium">
                  Scopri di più
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quattro agenti AI coordinati</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ogni agente è specializzato in un output: titoli, descrizioni brevi, schede complete e meta tag. Li puoi combinare nei tuoi workflow approvativi.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                title: 'Titoli SEO-ready',
                description: 'Headline multilingua con tono di voce configurabile e keyword suggerite dal modulo Market Intelligence.',
              },
              {
                title: 'Descrizioni sintetiche',
                description: 'Perfette per listing e annunci. Rispettiamo i limiti di caratteri dei marketplace e i requisiti legali.',
              },
              {
                title: 'Schede prodotto complete',
                description: 'Paragrafi modulari, call to action e suggerimenti immagini pronti per CMS e marketplace.',
              },
              {
                title: 'Meta tag e alt text',
                description: 'Ottimizzazione SEO automatica con URL parlanti e alt text generati sulle tue immagini originali.',
              }].map((feature) => (
                <div key={feature.title} className="card">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cosa dicono i nostri clienti</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Brand enterprise e scale-up digitali utilizzano ProductAI per pubblicare più velocemente e con maggiore coerenza.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
                name: 'Laura Bianchi',
                role: 'Marketing Manager · TechStore',
                quote: 'La generazione automatica dei meta tag ci ha fatto risparmiare ore e migliorato il posizionamento organico.',
              },
              {
                name: 'Marco Verdi',
                role: 'E-commerce Director · FashionHub',
                quote: 'I workflow approvativi con versioning hanno ridotto del 40% i tempi di pubblicazione dei nuovi prodotti.',
              },
              {
                name: 'Sara Conti',
                role: 'Head of Content · Casa&Design',
                quote: 'Gli insight di market analysis ci indicano quali schede aggiornare ogni settimana: finalmente priorità chiare.',
              }].map((testimonial) => (
                <div key={testimonial.name} className="card h-full flex flex-col">
                  <p className="text-gray-600 italic mb-4">“{testimonial.quote}”</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary-700 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Pronto a trasformare il tuo catalogo?</h2>
            <p className="text-lg mb-6">
              Attiva la prova gratuita di 14 giorni o richiedi una sessione dedicata con il nostro team di onboarding.
            </p>
            <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-3 sm:space-y-0">
              <Link href="/signup" className="btn-secondary">
                Inizia ora
              </Link>
              <Link
                href="/demo"
                className="bg-white text-primary-700 hover:bg-gray-100 font-medium py-2 px-4 rounded-md transition-colors"
              >
                Parla con un esperto
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="md:flex md:items-center md:justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Resta aggiornato sulle novità di ProductAI</h2>
                <p className="text-gray-600 mt-2">
                  Case study, nuovi modelli e inviti agli eventi riservati ai professionisti dell\'e-commerce.
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="laura@azienda.it"
                className="flex-1 newsletter-input"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="newsletter-button disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Iscrizione...' : 'Iscriviti'}
              </button>
            </form>
            {feedback && (
              <p
                className={`mt-4 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}
                role={status === 'error' ? 'alert' : undefined}
              >
                {feedback}
              </p>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ProductAI. Tutti i diritti riservati.</p>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Termini</Link>
            <Link href="/support">Supporto</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
