import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRightIcon,
  MusicalNoteIcon,
  SparklesIcon,
  AdjustmentsHorizontalIcon,
  RocketLaunchIcon,
  PlayIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const featureCards = [
  {
    title: 'Workspace sinfonico',
    description:
      'Organizza bozze, take e stem in uno spazio condiviso pensato per produttori, registi e team audio multi-sede.',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: 'Palette timbriche su misura',
    description:
      'Genera progressioni, textures e dinamiche adattive partendo dalle emozioni che vuoi evocare in ogni scena.',
    icon: MusicalNoteIcon,
  },
  {
    title: 'Release intelligenti',
    description:
      'Esporta mix e stem ottimizzati per cinema, podcast, social e live show grazie a preset calibrati dagli esperti ACE-Step.',
    icon: RocketLaunchIcon,
  },
];

const storyMoments = [
  {
    time: 'Atto I',
    heading: 'La scintilla',
    body:
      'Scrivi il brief emozionale e lascia che ACE-Step trasformi parole chiave in moodboard sonori, ritmi e armonie.',
  },
  {
    time: 'Atto II',
    heading: 'Comporre in ensemble',
    body:
      'Collabora in tempo reale con sound designer e musicisti, commentando take e sperimentando nuove combinazioni timbriche.',
  },
  {
    time: 'Atto III',
    heading: 'Dare voce al finale',
    body:
      'Rifinisci la colonna sonora con mastering intelligente e pubblica direttamente nella libreria condivisa con clienti e fan.',
  },
];

const communityHighlights = [
  {
    title: 'Community Vibrante',
    description: 'Eventi settimanali, listening party e feedback live per crescere insieme ad altri creatori sonori.',
    icon: UserGroupIcon,
  },
  {
    title: 'Sound Library Evolutiva',
    description: 'Un archivio curato di pattern, loop e strumenti emergenti aggiornato con il contributo della community.',
    icon: SparklesIcon,
  },
  {
    title: 'Sessioni ACE Mentorship',
    description: 'Workshop immersivi con compositori pluripremiati per perfezionare orchestrazioni, mix e storytelling.',
    icon: PlayIcon,
  },
];

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
    alert('Grazie per aver scelto di entrare nel backstage di ACE-Step!');
  };

  return (
    <div>
      <Head>
        <title>ACE-Step – Sound Stories che danno ritmo al tuo brand</title>
        <meta
          name="description"
          content="ACE-Step unisce compositori, storyteller e brand per creare universi sonori memorabili con una piattaforma collaborativa."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pb-24">
        <section className="relative px-4 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="hero-glow overflow-hidden p-10 sm:p-16">
              <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-6">
                  <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                    Welcome to the ACE-Step soundverse
                  </span>
                  <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                    Il tuo brand, raccontato in movimento attraverso il suono.
                  </h1>
                  <p className="max-w-2xl text-lg text-white/90 sm:text-xl">
                    ACE-Step orchestra strategie audio, librerie creative e produzione collaborativa in un unico flusso. Dalla scintilla all&#39;applauso finale, ogni nota guida la tua community.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link href="/workspace" className="btn-secondary">
                      Entra nello studio digitale
                    </Link>
                    <Link
                      href="/sound-library"
                      className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Esplora la libreria <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
                <div className="relative flex flex-col gap-4 rounded-3xl bg-white/10 p-6 text-white backdrop-blur">
                  <div className="rounded-2xl bg-white/90 p-6 text-neutral-900 shadow-xl">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">Timeline Creativa</p>
                    <ul className="mt-4 space-y-3 text-neutral-700">
                      {storyMoments.map((moment) => (
                        <li key={moment.time} className="rounded-2xl border border-neutral-200/80 bg-white/90 p-4">
                          <p className="text-xs font-semibold uppercase tracking-widest text-primary-600">{moment.time}</p>
                          <p className="mt-1 text-lg font-semibold text-neutral-900">{moment.heading}</p>
                          <p className="mt-1 text-sm text-neutral-600">{moment.body}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/30 bg-white/20 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Mood attuale</p>
                    <p className="mt-3 text-2xl font-semibold">Electro-organic | 108 BPM</p>
                    <p className="mt-2 text-sm text-white/80">Curato dalla community per la campagna Aurora Release.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">Esperienze core</p>
              <h2 className="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">Costruiamo storie sonore che restano in mente</h2>
              <p className="mt-4 text-neutral-700">
                Ogni funzione di ACE-Step nasce da sessioni con creativi, brand director e sound artist. Il risultato è un ecosistema che rende semplice ideare, collaborare e lanciare esperienze immersive.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {featureCards.map((feature) => (
                <article key={feature.title} className="card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-neutral-900">{feature.title}</h3>
                  <p className="mt-3 text-neutral-700">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">Storytelling musicale</p>
                <h2 className="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">Dal brief alla premiere, senza perdere il ritmo</h2>
                <p className="mt-4 text-neutral-700">
                  Pianifica release, sessioni di registrazione e revisioni in una timeline condivisa. Ogni fase mantiene la stessa energia creativa grazie a strumenti basati su AI che comprendono tono, densità e tensione narrativa.
                </p>
              </div>
              <div className="space-y-6">
                {storyMoments.map((moment) => (
                  <div key={moment.time} className="storyline-step">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100 text-secondary-700 font-semibold">
                      {moment.time}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900">{moment.heading}</h3>
                      <p className="mt-2 text-neutral-700">{moment.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">Community ACE-Step</p>
              <h2 className="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">Un palcoscenico condiviso per menti sonore</h2>
              <p className="mt-4 text-neutral-700">
                Non solo strumenti: ACE-Step è uno spazio dove professionisti e creator emergenti si incontrano, condividono feedback e costruiscono nuove release insieme.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {communityHighlights.map((item) => (
                <article key={item.title} className="card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100 text-secondary-700">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-3 text-neutral-700">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-3xl bg-neutral-900 px-8 py-12 text-white shadow-2xl sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-16">
            <div className="max-w-xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Ready for the encore?</p>
              <h2 className="text-3xl font-bold sm:text-4xl">Fai risuonare il tuo progetto con ACE-Step</h2>
              <p className="text-white/80">
                Attiva il periodo di prova di 14 giorni e accedi a workspace, libreria suoni e mentorship. Nessuna carta richiesta, solo pura creatività.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-0">
              <Link href="/pricing" className="btn-primary">
                Scegli il piano
              </Link>
              <Link href="/community" className="btn-ghost bg-white/10 text-white hover:bg-white/20 hover:text-white">
                Partecipa a un listening party
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-3xl bg-white/90 p-10 shadow-xl ring-1 ring-neutral-200 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">Newsletter soundcheck</p>
                <h2 className="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">Ricevi pattern inediti e storie dietro le quinte</h2>
                <p className="mt-3 text-neutral-700">
                  Ogni giovedì condividiamo preset, cue sheet e case study dalla community ACE-Step. Niente spam, solo vibrazioni utili.
                </p>
              </div>
              <form className="flex flex-col gap-4 sm:flex-row" onSubmit={handleSubmit}>
                <label htmlFor="email" className="sr-only">
                  Indirizzo email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="nome@studio.com"
                  className="form-input"
                  aria-describedby="newsletter-helper"
                />
                <button type="submit" className="newsletter-button">
                  Iscriviti
                </button>
              </form>
            </div>
            <p id="newsletter-helper" className="mt-4 text-sm text-neutral-600">
              Rispettando il contrasto 4.5:1, potrai leggere ogni update anche nelle sessioni più buie.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
