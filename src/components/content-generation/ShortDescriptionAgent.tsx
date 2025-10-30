import React, { useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { ToneType, TargetType } from '@/lib/contentGenerators';

interface ShortDescriptionAgentProps {
  productData: {
    name?: string;
    category?: string;
    brand?: string;
    features?: string[];
    benefits?: string[];
    [key: string]: any;
  };
  onDescriptionGenerated?: (description: string) => void;
}

const ShortDescriptionAgent: React.FC<ShortDescriptionAgentProps> = ({
  productData,
  onDescriptionGenerated,
}) => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [minChars, setMinChars] = useState<number>(80);
  const [maxChars, setMaxChars] = useState<number>(160);
  const [tone, setTone] = useState<ToneType>('formal');
  const [target, setTarget] = useState<TargetType>('general');
  const [highlightBenefits, setHighlightBenefits] = useState<boolean>(true);
  const [generatedDescription, setGeneratedDescription] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const generateDescription = async () => {
    setIsGenerating(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agentType: 'description',
          productData,
          options: {
            tone,
            target,
            highlightBenefits,
            minChars,
            maxChars,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || 'Impossibile generare la descrizione.');
        return;
      }

      setGeneratedDescription(data.description);
      if (onDescriptionGenerated) {
        onDescriptionGenerated(data.description);
      }
    } catch (error) {
      console.error('Error generating description:', error);
      setErrorMessage('Si è verificato un errore durante la generazione.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="card p-6 space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Agente Descrizioni Brevi</h3>
      <p className="text-gray-600">Genera descrizioni sintetiche ottimizzate per visualizzazioni in anteprima.</p>

      <div className="bg-gray-50 p-4 rounded-lg space-y-4">
        <h4 className="font-medium text-gray-800">Configurazione</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="minChars" className="block text-sm font-medium text-gray-700 mb-1">
              Caratteri minimi
            </label>
            <input
              type="number"
              id="minChars"
              min={50}
              max={120}
              value={minChars}
              onChange={(event) => {
                const value = Number(event.target.value);
                setMinChars(Math.min(value, maxChars - 20));
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div>
            <label htmlFor="maxChars" className="block text-sm font-medium text-gray-700 mb-1">
              Caratteri massimi
            </label>
            <input
              type="number"
              id="maxChars"
              min={100}
              max={300}
              value={maxChars}
              onChange={(event) => {
                const value = Number(event.target.value);
                setMaxChars(Math.max(value, minChars + 20));
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tono di voce</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {(['formal', 'colloquial', 'technical', 'creative'] as ToneType[]).map((toneOption) => (
              <button
                key={toneOption}
                type="button"
                onClick={() => setTone(toneOption)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  tone === toneOption
                    ? 'bg-primary-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {toneOption === 'formal'
                  ? 'Formale'
                  : toneOption === 'colloquial'
                    ? 'Colloquiale'
                    : toneOption === 'technical'
                      ? 'Tecnico'
                      : 'Creativo'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Target di riferimento</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {(['general', 'technical', 'business', 'casual'] as TargetType[]).map((targetOption) => (
              <button
                key={targetOption}
                type="button"
                onClick={() => setTarget(targetOption)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  target === targetOption
                    ? 'bg-primary-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {targetOption === 'general'
                  ? 'Generale'
                  : targetOption === 'technical'
                    ? 'Tecnico'
                    : targetOption === 'business'
                      ? 'Business'
                      : 'Casual'}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Evidenzia benefici</span>
          <button
            type="button"
            onClick={() => setHighlightBenefits((value) => !value)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              highlightBenefits ? 'bg-primary-600' : 'bg-gray-300'
            }`}
            aria-pressed={highlightBenefits}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                highlightBenefits ? 'translate-x-5' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={generateDescription}
        disabled={isGenerating}
        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? (
          <>
            <ArrowPathIcon className="animate-spin h-5 w-5 mr-2" />
            Generazione in corso...
          </>
        ) : (
          'Genera descrizione breve'
        )}
      </button>

      {errorMessage && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      {generatedDescription && (
        <div className="bg-white border border-primary-100 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">Descrizione generata</h4>
          <p className="text-gray-700">{generatedDescription}</p>
        </div>
      )}
    </div>
  );
};

export default ShortDescriptionAgent;
