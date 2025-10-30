import React, { useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { ToneType } from '@/lib/contentGenerators';

interface TitleAgentProps {
  productData: {
    name?: string;
    category?: string;
    brand?: string;
    mainFeature?: string;
    [key: string]: any;
  };
  suggestedKeywords?: string[];
  onTitleGenerated?: (title: string) => void;
}

const TitleAgent: React.FC<TitleAgentProps> = ({
  productData,
  suggestedKeywords = [],
  onTitleGenerated,
}) => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [tone, setTone] = useState<ToneType>('formal');
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [customKeyword, setCustomKeyword] = useState<string>('');
  const [generatedTitle, setGeneratedTitle] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const toggleKeyword = (keyword: string) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter((k) => k !== keyword));
    } else {
      setSelectedKeywords([...selectedKeywords, keyword]);
    }
  };

  const addCustomKeyword = () => {
    const trimmed = customKeyword.trim();
    if (trimmed && !selectedKeywords.includes(trimmed)) {
      setSelectedKeywords([...selectedKeywords, trimmed]);
    }
    setCustomKeyword('');
  };

  const generateTitle = async () => {
    setIsGenerating(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agentType: 'title',
          productData,
          options: {
            tone,
            keywords: selectedKeywords,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || 'Impossibile generare il titolo.');
        return;
      }

      setGeneratedTitle(data.title);
      if (onTitleGenerated) {
        onTitleGenerated(data.title);
      }
    } catch (error) {
      console.error('Error generating title:', error);
      setErrorMessage('Si è verificato un errore durante la generazione.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="card p-6 space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Agente Titoli</h3>
      <p className="text-gray-600">Genera titoli ottimizzati per SEO con tono personalizzato e keyword rilevanti.</p>

      <div className="bg-gray-50 p-4 rounded-lg space-y-4">
        <h4 className="font-medium text-gray-800">Configurazione</h4>

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
          <label className="block text-sm font-medium text-gray-700 mb-1">Keyword suggerite</label>

          {suggestedKeywords.length > 0 ? (
            <div className="flex flex-wrap gap-2 mb-3">
              {suggestedKeywords.map((keyword) => (
                <button
                  key={keyword}
                  type="button"
                  onClick={() => toggleKeyword(keyword)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    selectedKeywords.includes(keyword)
                      ? 'bg-primary-600 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {keyword}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 mb-3">Nessuna keyword suggerita disponibile.</p>
          )}

          <div className="flex">
            <input
              type="text"
              value={customKeyword}
              onChange={(event) => setCustomKeyword(event.target.value)}
              placeholder="Aggiungi una keyword personalizzata"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              onKeyDown={(event) => event.key === 'Enter' && (event.preventDefault(), addCustomKeyword())}
            />
            <button
              type="button"
              onClick={addCustomKeyword}
              className="bg-primary-600 text-white px-4 py-2 rounded-r-md hover:bg-primary-700 transition-colors"
            >
              Aggiungi
            </button>
          </div>

          {selectedKeywords.length > 0 && (
            <div className="mt-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Keyword selezionate</label>
              <div className="flex flex-wrap gap-2">
                {selectedKeywords.map((keyword) => (
                  <span key={keyword} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    {keyword}
                    <button
                      type="button"
                      className="ml-1 text-primary-600 hover:text-primary-800"
                      onClick={() => toggleKeyword(keyword)}
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={generateTitle}
        disabled={isGenerating}
        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? (
          <>
            <ArrowPathIcon className="animate-spin h-5 w-5 mr-2" />
            Generazione in corso...
          </>
        ) : (
          'Genera titolo ottimizzato'
        )}
      </button>

      {errorMessage && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      {generatedTitle && (
        <div className="bg-white border border-primary-100 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">Titolo generato</h4>
          <p className="text-lg font-medium text-gray-900">{generatedTitle}</p>
        </div>
      )}
    </div>
  );
};

export default TitleAgent;
