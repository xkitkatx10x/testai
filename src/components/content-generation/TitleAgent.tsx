import React, { useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

type ToneType = 'formal' | 'colloquial' | 'technical' | 'creative';

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
  
  // Toggle keyword selection
  const toggleKeyword = (keyword: string) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter(k => k !== keyword));
    } else {
      setSelectedKeywords([...selectedKeywords, keyword]);
    }
  };
  
  // Add custom keyword
  const addCustomKeyword = () => {
    if (customKeyword.trim() && !selectedKeywords.includes(customKeyword.trim())) {
      setSelectedKeywords([...selectedKeywords, customKeyword.trim()]);
      setCustomKeyword('');
    }
  };
  
  // Generate title based on product data, tone and keywords
  const generateTitle = async () => {
    setIsGenerating(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const { name, category, brand, mainFeature } = productData;
      
      // Generate title based on tone and selected keywords
      let title = '';
      const keywordPhrase = selectedKeywords.length > 0 ? 
        ` - ${selectedKeywords.slice(0, 2).join(' ')}` : '';
      
      switch(tone) {
        case 'formal':
          title = `${brand || ''} ${name || ''} ${category ? `- ${category}` : ''} ${mainFeature ? `con ${mainFeature}` : ''}${keywordPhrase}`;
          break;
        case 'colloquial':
          title = `Scopri il Fantastico ${name || ''} di ${brand || ''} ${mainFeature ? `con ${mainFeature}` : ''}${keywordPhrase}`;
          break;
        case 'technical':
          title = `${brand || ''} ${name || ''}: ${category || ''} ${mainFeature ? `con Tecnologia ${mainFeature}` : ''}${keywordPhrase}`;
          break;
        case 'creative':
          title = `Rivoluziona la tua Esperienza con ${brand || ''} ${name || ''} ${keywordPhrase}`;
          break;
        default:
          title = `${brand || ''} ${name || ''} - ${category || ''}${keywordPhrase}`;
      }
      
      // Clean up multiple spaces and trim
      title = title.replace(/\s+/g, ' ').trim();
      
      setGeneratedTitle(title);
      
      // Call the callback with generated title if provided
      if (onTitleGenerated) {
        onTitleGenerated(title);
      }
      
    } catch (error) {
      console.error('Error generating title:', error);
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <div className="card p-6 space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Agente Titoli</h3>
      <p className="text-gray-600">Genera titoli ottimizzati per SEO con tono personalizzato e keyword rilevanti.</p>
      
      {/* Configuration Panel */}
      <div className="bg-gray-50 p-4 rounded-lg space-y-4">
        <h4 className="font-medium text-gray-800">Configurazione</h4>
        
        {/* Tone Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tono di voce</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {(['formal', 'colloquial', 'technical', 'creative'] as ToneType[]).map((toneOption) => (
              <button
                key={toneOption}
                type="button"
                onClick={() => setTone(toneOption)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${tone === toneOption ? 'bg-primary-600 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                {toneOption === 'formal' ? 'Formale' : 
                 toneOption === 'colloquial' ? 'Colloquiale' : 
                 toneOption === 'technical' ? 'Tecnico' : 'Creativo'}
              </button>
            ))}
          </div>
        </div>
        
        {/* Keywords Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Keyword Suggerite</label>
          
          {suggestedKeywords.length > 0 ? (
            <div className="flex flex-wrap gap-2 mb-3">
              {suggestedKeywords.map((keyword, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => toggleKeyword(keyword)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedKeywords.includes(keyword) ? 'bg-primary-600 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                >
                  {keyword}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 mb-3">Nessuna keyword suggerita disponibile.</p>
          )}
          
          {/* Custom Keyword Input */}
          <div className="flex">
            <input
              type="text"
              value={customKeyword}
              onChange={(e) => setCustomKeyword(e.target.value)}
              placeholder="Aggiungi una keyword personalizzata"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && addCustomKeyword()}
            />
            <button
              type="button"
              onClick={addCustomKeyword}
              className="bg-primary-600 text-white px-4 py-2 rounded-r-md hover:bg-primary-700 transition-colors"
            >
              Aggiungi
            </button>
          </div>
          
          {/* Selected Keywords */}
          {selectedKeywords.length > 0 && (
            <div className="mt-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Keyword Selezionate</label>
              <div className="flex flex-wrap gap-2">
                {selectedKeywords.map((keyword, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
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
      
      {/* Generate Button */}
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
        ) : 'Genera Titolo Ottimizzato'}
      </button>
      
      {/* Generated Title Preview */}
      {generatedTitle && (
        <div className="mt-6 space-y-4 border-t pt-6">
          <h4 className="font-medium text-gray-800">Titolo Generato</h4>
          <div className="p-4 bg-white border border-gray-200 rounded-md">
            <p className="text-lg font-semibold text-gray-900">{generatedTitle}</p>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-primary-600 hover:text-primary-700"
              onClick={() => {
                navigator.clipboard.writeText(generatedTitle);
                alert('Titolo copiato negli appunti!');
              }}
            >
              Copia negli appunti
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TitleAgent;