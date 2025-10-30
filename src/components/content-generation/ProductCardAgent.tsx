import React, { useState } from 'react';
import { ArrowPathIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ToneType, EmphasisType } from '@/lib/contentGenerators';

interface ProductCardAgentProps {
  productAttributes: {
    name?: string;
    category?: string;
    features?: string[];
    benefits?: string[];
    specifications?: Record<string, string>;
    brand?: string;
    images?: string[];
    [key: string]: any;
  };
  onCardGenerated?: (cardData: {
    title: string;
    shortDescription: string;
    paragraphs: string[];
    callToAction: string;
    optimizedImages?: Array<{ url: string; altText: string }>;
  }) => void;
}

const ProductCardAgent: React.FC<ProductCardAgentProps> = ({
  productAttributes,
  onCardGenerated,
}) => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [paragraphCount, setParagraphCount] = useState<number>(3);
  const [charsPerParagraph, setCharsPerParagraph] = useState<number>(200);
  const [tone, setTone] = useState<ToneType>('formal');
  const [emphasis, setEmphasis] = useState<EmphasisType>('balanced');
  const [includeCTA, setIncludeCTA] = useState<boolean>(true);
  const [includeImages, setIncludeImages] = useState<boolean>(true);
  const [customSections, setCustomSections] = useState<string[]>(['']);

  const [generatedTitle, setGeneratedTitle] = useState<string>('');
  const [generatedShortDesc, setGeneratedShortDesc] = useState<string>('');
  const [generatedParagraphs, setGeneratedParagraphs] = useState<string[]>([]);
  const [generatedCTA, setGeneratedCTA] = useState<string>('');
  const [optimizedImages, setOptimizedImages] = useState<Array<{ url: string; altText: string }>>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const updateCustomSection = (index: number, value: string) => {
    setCustomSections((sections) => {
      const updated = [...sections];
      updated[index] = value;
      return updated;
    });
  };

  const addCustomSection = () => {
    setCustomSections((sections) => [...sections, '']);
  };

  const removeCustomSection = (index: number) => {
    setCustomSections((sections) => sections.filter((_, i) => i !== index));
  };

  const generateProductCard = async () => {
    setIsGenerating(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agentType: 'card',
          productData: productAttributes,
          options: {
            tone,
            emphasis,
            paragraphCount,
            charsPerParagraph,
            includeCTA,
            includeImages,
            customSections,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || 'Impossibile generare la scheda prodotto.');
        return;
      }

      setGeneratedTitle(data.card.title);
      setGeneratedShortDesc(data.card.shortDescription);
      setGeneratedParagraphs(data.card.paragraphs);
      setGeneratedCTA(data.card.callToAction);
      setOptimizedImages(data.card.optimizedImages || []);

      if (onCardGenerated) {
        onCardGenerated(data.card);
      }
    } catch (error) {
      console.error('Error generating product card:', error);
      setErrorMessage('Si è verificato un errore durante la generazione.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="card p-6 space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Agente Scheda Prodotto</h3>
      <p className="text-gray-600">Crea paragrafi, call to action e suggerimenti immagini per una scheda prodotto completa.</p>

      <div className="bg-gray-50 p-4 rounded-lg space-y-4">
        <h4 className="font-medium text-gray-800">Configurazione</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Numero di paragrafi</label>
            <input
              type="number"
              min={2}
              max={6}
              value={paragraphCount}
              onChange={(event) => setParagraphCount(Math.max(2, Math.min(6, Number(event.target.value))))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Caratteri per paragrafo</label>
            <input
              type="number"
              min={120}
              max={400}
              value={charsPerParagraph}
              onChange={(event) => setCharsPerParagraph(Math.max(120, Math.min(400, Number(event.target.value))))}
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Enfasi del contenuto</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {(['benefits', 'technical', 'balanced'] as EmphasisType[]).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setEmphasis(option)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  emphasis === option
                    ? 'bg-primary-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {option === 'benefits' ? 'Benefici' : option === 'technical' ? 'Tecnico' : 'Bilanciato'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex items-center space-x-3 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={includeCTA}
              onChange={(event) => setIncludeCTA(event.target.checked)}
              className="h-4 w-4 text-primary-600 border-gray-300 rounded"
            />
            <span>Includi call to action</span>
          </label>
          <label className="flex items-center space-x-3 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={includeImages}
              onChange={(event) => setIncludeImages(event.target.checked)}
              className="h-4 w-4 text-primary-600 border-gray-300 rounded"
            />
            <span>Suggerisci immagini ottimizzate</span>
          </label>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Sezioni personalizzate</span>
            <button
              type="button"
              onClick={addCustomSection}
              className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700"
            >
              <PlusIcon className="h-4 w-4 mr-1" />
              Aggiungi sezione
            </button>
          </div>
          {customSections.map((section, index) => (
            <div key={index} className="flex items-start space-x-2">
              <textarea
                value={section}
                onChange={(event) => updateCustomSection(index, event.target.value)}
                rows={2}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Aggiungi note o punti da includere nel testo"
              />
              {customSections.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeCustomSection(index)}
                  className="text-gray-500 hover:text-red-600"
                  aria-label="Rimuovi sezione"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={generateProductCard}
        disabled={isGenerating}
        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? (
          <>
            <ArrowPathIcon className="animate-spin h-5 w-5 mr-2" />
            Generazione in corso...
          </>
        ) : (
          'Genera scheda prodotto'
        )}
      </button>

      {errorMessage && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      {(generatedTitle || generatedParagraphs.length > 0) && (
        <div className="space-y-4">
          {generatedTitle && (
            <div className="bg-white border border-primary-100 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">Titolo card</h4>
              <p className="text-lg font-medium text-gray-900">{generatedTitle}</p>
              {generatedShortDesc && <p className="mt-2 text-gray-600">{generatedShortDesc}</p>}
            </div>
          )}

          {generatedParagraphs.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
              <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Paragrafi generati</h4>
              {generatedParagraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {generatedCTA && (
            <div className="bg-white border border-secondary-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-secondary-700 uppercase tracking-wide">Call to action</h4>
              <p className="text-gray-700">{generatedCTA}</p>
            </div>
          )}

          {includeImages && optimizedImages.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
              <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Suggerimenti immagini</h4>
              <ul className="space-y-2 text-gray-600">
                {optimizedImages.map((image, index) => (
                  <li key={image.url || index}>
                    <span className="font-medium text-gray-800">{image.altText}</span>
                    <span className="block text-xs text-gray-500 break-all">{image.url}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCardAgent;
