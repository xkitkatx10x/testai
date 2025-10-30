import Head from 'next/head';
import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ProductAI - Informativa privacy</title>
        <meta name="description" content="Informativa privacy di ProductAI." />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            ProductAI
          </Link>
          <Link href="/support" className="text-gray-600 hover:text-gray-900">
            Contatta il supporto
          </Link>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-600">
          <h1 className="text-3xl font-bold text-gray-900">Informativa sul trattamento dei dati personali</h1>
          <p>
            ProductAI S.r.l. tratta i dati personali nel rispetto del Regolamento (UE) 2016/679 (GDPR) e della normativa nazionale applicabile. I dati vengono utilizzati esclusivamente per fornire i servizi descritti nel contratto e non vengono ceduti a terzi non autorizzati.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900">Dati raccolti</h2>
          <p>
            Raccogliamo dati identificativi (nome, email, ruolo), dati tecnici relativi all&apos;utilizzo della piattaforma e contenuti forniti volontariamente dagli utenti per generare testi e asset.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900">Diritti degli interessati</h2>
          <p>
            Gli utenti possono esercitare i diritti di accesso, rettifica, cancellazione, limitazione e portabilità scrivendo a privacy@productai.com. Rispondiamo entro 30 giorni.
          </p>
          <p>
            Per informazioni dettagliate o richieste specifiche contatta il nostro <Link href="/support" className="text-primary-600">team di supporto</Link>.
          </p>
        </div>
      </main>
    </div>
  );
}
