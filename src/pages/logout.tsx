import Head from 'next/head';
import Link from 'next/link';

export default function Logout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <Head>
        <title>ProductAI - Logout</title>
        <meta name="description" content="Termina la sessione ProductAI." />
      </Head>
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Sei uscito dal tuo account</h1>
        <p className="text-gray-600">
          Per accedere nuovamente alla dashboard, effettua il login con le tue credenziali o contatta il supporto per assistenza.
        </p>
        <div className="flex flex-col gap-3">
          <Link href="/login" className="btn-primary">
            Torna al login
          </Link>
          <Link href="/support" className="btn-secondary">
            Contatta il supporto
          </Link>
        </div>
      </div>
    </div>
  );
}
