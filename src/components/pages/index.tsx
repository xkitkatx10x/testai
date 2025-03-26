import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Email submitted:', email);
    setEmail('');
    alert('Grazie per esserti iscritto alla nostra newsletter!');
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>ProductAI - Ottimizzazione Schede Prodotto con AI</title>
        <meta
          name="description"
          content="Piattaforma SaaS per ottimizzare le schede prodotto degli e-commerce attraverso l'utilizzo di moduli AI specializzati."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-600">ProductAI</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/features" className="text-gray-600 hover:text-gray-900">
              Funzionalità
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Prezzi
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              Chi Siamo
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Accedi
            </Link>
            <Link href="/signup" className="btn-primary">
              Prova Gratuita
            </Link>
            <Link href="/content-generation" className="text-gray-600 hover:text-gray-900 flex items-center">
              <span>Generazione Contenuti</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ottimizza le tue schede prodotto con l'intelligenza artificiale
                </h2>
                <p className="text-xl mb-8">
                  Genera contenuti ottimizzati, analizza il mercato e migliora le conversioni con la nostra piattaforma SaaS all-in-one.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link href="/signup" className="btn-secondary text-center">
                    Inizia Gratuitamente
                  </Link>
                  <Link href="/demo" className="bg-white text-primary-700 hover:bg-gray-100 font-medium py-2 px-4 rounded-md transition-colors text-center">
                    Richiedi una Demo
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white p-6 rounded-lg shadow-xl">
                  <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <div className="h-8 bg-primary-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-primary-100 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-primary-100 rounded w-5/6"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="h-24 bg-gray-100 rounded-md"></div>
                    <div className="h-24 bg-gray-100 rounded-md"></div>
                  </div>
                  <div className="h-8 bg-secondary-500 rounded-md w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Integrazione con le principali piattaforme e-commerce</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sincronizza facilmente i tuoi prodotti con le piattaforme più popolari
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="h-20 w-20 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-xl">Shopify</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrazione Shopify</h3>
                <p className="text-gray-600 mb-4">
                  Sincronizza automaticamente il tuo catalogo Shopify e ottimizza le schede prodotto con un solo click.
                </p>
                <Link href="/integrations/shopify" className="text-primary-600 font-medium inline-flex items-center">
                  Scopri di più <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="card text-center">
                <div className="h-20 w-20 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-xl">WooC</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrazione WooCommerce</h3>
                <p className="text-gray-600 mb-4">
                  Collega il tuo negozio WordPress e migliora le tue schede prodotto con contenuti ottimizzati per SEO.
                </p>
                <Link href="/integrations/woocommerce" className="text-primary-600 font-medium inline-flex items-center">
                  Scopri di più <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="card text-center">
                <div className="h-20 w-20 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-xl">Magento</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrazione Magento</h3>
                <p className="text-gray-600 mb-4">
                  Connetti il tuo store Magento e automatizza la creazione di schede prodotto professionali e coinvolgenti.
                </p>
                <Link href="/integrations/magento" className="text-primary-600 font-medium inline-flex items-center">
                  Scopri di più <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Funzionalità Principali</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Scopri come ProductAI può trasformare il tuo e-commerce
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card">
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Generazione Contenuti Ottimizzati</h3>
                <p className="text-gray-600">
                  Crea titoli accattivanti, descrizioni coinvolgenti e meta tag SEO-friendly automaticamente con i nostri moduli AI specializzati.
                </p>
              </div>
              <div className="card">
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Analisi di Mercato</h3>
                <p className="text-gray-600">
                  Monitora i prezzi dei concorrenti, analizza le recensioni e identifica i trend di mercato per ottimizzare la tua strategia.
                </p>
              </div>
              <div className="card">
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Categorizzazione Automatica</h3>
                <p className="text-gray-600">
                  Classifica automaticamente i tuoi prodotti nelle categorie appropriate grazie ai nostri algoritmi di machine learning.
                </p>
              </div>
              <div className="card">
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Suggerimenti per Cross-Selling</h3>
                <p className="text-gray-600">
                  Aumenta il valore medio degli ordini con suggerimenti intelligenti di prodotti correlati e complementari.
                </p>
              </div>
              <div className="card">
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Supporto Multilingua</h3>
                <p className="text-gray-600">
                  Genera contenuti in diverse lingue per raggiungere un pubblico globale e migliorare la tua presenza internazionale.
                </p>
              </div>
              <div className="card">
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dashboard Analitico</h3>
                <p className="text-gray-600">
                  Monitora le performance delle tue schede prodotto con metriche dettagliate e report personalizzabili.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">I Nostri Clienti</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Scopri cosa dicono i nostri clienti della nostra piattaforma
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Marco Rossi</h4>
                    <p className="text-gray-600 text-sm">CEO, FashionStore</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Da quando utilizziamo ProductAI, abbiamo visto un incremento del 35% nel tasso di conversione delle nostre schede prodotto. Un investimento che si è ripagato in pochissimo tempo."
                </p>
              </div>
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Laura Bianchi</h4>
                    <p className="text-gray-600 text-sm">Marketing Manager, TechStore</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "La categorizzazione automatica ci ha fatto risparmiare ore di lavoro manuale. Ora possiamo concentrarci sulla strategia invece che sulla gestione del catalogo."
                </p>
              </div>
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Giovanni Verdi</h4>
                    <p className="text-gray-600 text-sm">E-commerce Director, HomeDecor</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "L'analisi della concorrenza ci ha permesso di ottimizzare i nostri prezzi e migliorare le nostre descrizioni prodotto. I risultati sono stati immediati e significativi."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto a trasformare il tuo e-commerce?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Inizia oggi stesso con una prova gratuita di 14 giorni. Nessuna carta di credito richiesta.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/signup" className="btn-secondary">
                Inizia Gratuitamente
              </Link>
              <Link href="/contact" className="bg-white text-primary-700 hover:bg-gray-100 font-medium py-2 px-4 rounded-md transition-colors">
                Contattaci
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-lg p-8 md:p-12">
              <div