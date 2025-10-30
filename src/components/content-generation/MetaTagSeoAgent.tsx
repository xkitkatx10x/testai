import React, { useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

interface MetaTagSeoAgentProps {
  productData: {
    name?: string;
    category?: string;
    brand?: string;
    features?: string[];
    benefits?: string[];
    description?: string;
    images?: string[];
    [key: string]: any;
  };
  onMetaTagsGenerated?: (metaTags: {
    metaTitle: string;
    metaDescription: string;
    altTags: Array<{ image: string; altText: string }>;
    seoUrl: string;
  }) => void;
}

const MetaTagSeoAgent: React.FC<MetaTagSeoAgentProps> = ({
  productData,
  onMetaTagsGenerated,
}) => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [metaDescriptionLength, setMetaDescriptionLength] = useState<number>(160);
  const [includeKeywords, setIncludeKeywords] = useState<boolean>(true);
  const [customKeywords, setCustomKeywords] = useState<string>('');
  const [includeBrand, setIncludeBrand] = useState<boolean>(true);

  const [generatedMetaTitle, setGeneratedMetaTitle] = useState<string>('');
  const [generatedMetaDescription, setGeneratedMetaDescription] = useState<string>('');
  const [generatedAltTags, setGeneratedAltTags] = useState<Array<{ image: string; altText: string }>>([]);
  const [generatedSeoUrl, setGeneratedSeoUrl] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const generateMetaTags = async () => {
    setIsGenerating(true);
    setErrorMessage('');

    const keywordList = customKeywords
      .split(',')
      .map((keyword) => keyword.trim())
      .filter((keyword) => keyword.length > 0);

    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agentType: 'meta',
          productData,
          options: {
            includeKeywords,
            customKeywords: keywordList,
            includeBrand,
            metaDescriptionLength,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || 'Impossibile generare i meta tag.');
        return;
      }

      setGeneratedMetaTitle(data.meta.metaTitle);
      setGeneratedMetaDescription(data.meta.metaDescription);
      setGeneratedAltTags(data.meta.altTags);
      setGeneratedSeoUrl(data.meta.seoUrl);

      if (onMetaTagsGenerated) {
        onMetaTagsGenerated(data.meta);
      }
    } catch (error) {
      console.error('Error generating meta tags:', error);
      setErrorMessage('Si è verificato un errore durante la generazione.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="card p-6 space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Agente Meta Tag SEO</h3>
      <p className="text-gray-600">Genera automaticamente meta descrizioni, tag alt per immagini e URL SEO-friendly.</p>

      <div className="bg-gray-50 p-4 rounded-lg space-y-4">
        <h4 className="font-medium text-gray-800">Configurazione</h4>

        <div>
          <label htmlFor="metaDescriptionLength" className="block text-sm font-medium text-gray-700 mb-1">
            Lunghezza meta description (max caratteri)
          </label>
          <input
            type="number"
            id="metaDescriptionLength"
            min={120}
            max={300}
            value={metaDescriptionLength}
            onChange={(event) => setMetaDescriptionLength(Math.max(120, Math.min(300, Number(event.target.value))))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <label className="flex items-center space-x-3 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={includeBrand}
            onChange={(event) => setIncludeBrand(event.target.checked)}
            className="h-4 w-4 text-primary-600 border-gray-300 rounded"
          />
          <span>Includi il brand nel meta title</span>
        </label>

        <label className="flex items-center space-x-3 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={includeKeywords}
            onChange={(event) => setIncludeKeywords(event.target.checked)}
            className="h-4 w-4 text-primary-600 border-gray-300 rounded"
          />
          <span>Aggiungi keyword personalizzate</span>
        </label>

        {includeKeywords && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Keyword (separate da virgola)</label>
            <textarea
              value={customKeywords}
              onChange={(event) => setCustomKeywords(event.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="es. spedizione veloce, garanzia estesa"
            />
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={generateMetaTags}
        disabled={isGenerating}
        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? (
          <>
            <ArrowPathIcon className="animate-spin h-5 w-5 mr-2" />
            Generazione in corso...
          </>
        ) : (
          'Genera meta tag'
        )}
      </button>

      {errorMessage && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      {generatedMetaTitle && (
        <div className="space-y-4">
          <div className="bg-white border border-primary-100 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">Meta title</h4>
            <p className="text-gray-900 font-medium">{generatedMetaTitle}</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">Meta description</h4>
            <p className="text-gray-700">{generatedMetaDescription}</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">URL SEO suggerito</h4>
            <p className="text-gray-700 break-all">/{generatedSeoUrl}</p>
          </div>

          {generatedAltTags.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
              <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Tag alt immagini</h4>
              <ul className="space-y-1 text-gray-600">
                {generatedAltTags.map((tag, index) => (
                  <li key={tag.image || index}>
                    <span className="font-medium text-gray-800">{tag.altText}</span>
                    <span className="block text-xs text-gray-500 break-all">{tag.image}</span>
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

export default MetaTagSeoAgent;
