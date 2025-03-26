import React, { useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

type ToneType = 'formal' | 'colloquial' | 'technical' | 'creative';
type TargetType = 'general' | 'technical' | 'business' | 'casual';

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
  
  // Generate short description based on product data and configuration
  const generateDescription = async () => {
    setIsGenerating(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const { name, category, brand, features, benefits } = productData;
      
      // Base description template
      let description = '';
      
      // Generate description based on tone and target audience
      switch(tone) {
        case 'formal':
          if (target === 'business') {
            description = `${brand || 'Il prodotto'} ${name || ''} è una soluzione ${category || 'professionale'} progettata per ottimizzare i processi aziendali.`;
          } else if (target === 'technical') {
            description = `${brand || 'Il prodotto'} ${name || ''} rappresenta un'avanzata soluzione ${category || 'tecnologica'} con specifiche tecniche superiori.`;
          } else {
            description = `${brand || 'Il prodotto'} ${name || ''} è un ${category || 'prodotto'} di alta qualità che offre prestazioni eccellenti.`;
          }
          break;
          
        case 'colloquial':
          if (target === 'casual') {
            description = `Cerchi un ${category || 'prodotto'} fantastico? ${brand || 'Questo prodotto'} ${name || ''} è esattamente ciò che ti serve!`;
          } else {
            description = `Scopri ${brand || 'il nostro prodotto'} ${name || ''}, il ${category || 'prodotto'} che tutti stanno adorando per la sua semplicità e efficacia.`;
          }
          break;
          
        case 'technical':
          description = `${brand || 'Il prodotto'} ${name || ''}: ${category || 'soluzione'} tecnicamente avanzata con ${features?.[0] || 'caratteristiche innovative'} e ${features?.[1] || 'prestazioni ottimizzate'}.`;
          break;
          
        case 'creative':
          description = `Immagina di trasformare la tua esperienza con ${brand || 'un prodotto'} ${name || ''}, il ${category || 'prodotto'} che ridefinisce gli standard.`;
          break;
          
        default:
          description = `${brand || 'Il prodotto'} ${name || ''} è un ${category || 'prodotto'} di qualità superiore.`;
      }
      
      // Add benefits if option is enabled
      if (highlightBenefits && benefits && benefits.length > 0) {
        const benefitsToShow = benefits.slice(0, 2);
        description += ` Offre ${benefitsToShow.join(' e ')}.`;
      } else if (highlightBenefits && features && features.length > 0) {
        // Use features as fallback if no benefits are provided
        const featuresToShow = features.slice(0, 2);
        description += ` Caratterizzato da ${featuresToShow.join(' e ')}.`;
      }
      
      // Add a closing statement based on target audience
      switch(target) {
        case 'business':
          description += ` Ideale per aziende che cercano efficienza e affidabilità.`;
          break;
        case 'technical':
          description += ` Progettato per utenti esigenti che richiedono prestazioni superiori.`;
          break;
        case 'casual':
          description += ` Perfetto per un uso quotidiano senza complicazioni.`;
          break;
        default:
          description += ` Soddisfa le esigenze di ogni tipo di utente.`;
      }
      
      // Ensure the description is within the specified character limits
      if (description.length < minChars) {
        // Add more details if description is too short
        description += ` ${brand || 'Questo prodotto'} è stato progettato con attenzione ai dettagli e materiali di alta qualità per garantire la massima soddisfazione.`;
      }
      
      if (description.length > maxChars) {
        // Trim description if it's too long
        description = description.substring(0, maxChars - 3) + '...';
      }
      
      setGeneratedDescription(description);
      
      // Call the callback with generated description if provided
      if (onDescriptionGenerated) {
        onDescriptionGenerated(description);
      }
      
    } catch (error) {
      console.error('Error generating description:', error);
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <div className="card p-6 space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Agente Descrizioni Brevi</h3>
      <p className="text-gray-600">Genera descrizioni sintetiche ottimizzate per visualizzazioni in anteprima.</p>
      
      {/* Configuration Panel */}
      <div className="bg-gray-50 p-4 rounded-lg space-y-4">
        <h4 className="font-medium text-gray-800">Configurazione</h4>
        
        {/* Character Limits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="minChars" className="block text-sm font-medium text-gray-700 mb-1">
              Caratteri minimi
            </label>
            <input
              type="number"
              id="minChars"
              min="50"
              max="120"
              value={minChars}
              onChange={(e) => {
                const value = parseInt(e.target.value);
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
              min="100"
              max="300"
              value={maxChars}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setMaxChars(Math.max(value, minChars + 20));
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
        
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
        
        {/* Target Audience */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Target di riferimento</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {(['general', 'technical', 'business', 'casual'] as TargetType[]).map((targetOption) => (
              <button
                key={targetOption}
                type="button"
                onClick={() => setTarget(targetOption)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${target === targetOption ? 'bg-primary-600 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                {targetOption === 'general' ? 'Generale' : 
                 targetOption === 'technical' ? 'Tecnico' : 
                 targetOption === 'business' ? 'Business' : 'Casual'}
              </button>
            ))}
          </div>
        </div>
        
        {/* Highlight Benefits Option */}
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={highlightBenefits}
              onChange={(e) => setHighlightBenefits(e.target.checked)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Evidenzia i principali benefici</span>
          </label>
        </div>
      </div>
      
      {/* Generate Button */}
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
        ) : 'Genera Descrizione Breve'}
      </button>
      
      {/* Generated Description Preview */}
      {generatedDescription && (
        <div className="mt-6 space-y-4 border-t pt-6">
          <h4 className="font-medium text-gray-800">Descrizione Generata</h4>
          <div className="p-4 bg-white border border-gray-200 rounded-md">
            <p className="text-gray-800">{generatedDescription}</p>
            <div className="mt-2 text-sm text-gray-500 flex justify-between">
              <span>{generatedDescription.length} caratteri</span>
              <span className={generatedDescription.length < minChars ? 'text-red-500' : 
                              generatedDescription.length > maxChars ? 'text-red-500' : 'text-green-500'}>
                {generatedDescription.length < minChars ? 'Sotto il minimo' : 
                 generatedDescription.length > maxChars ? 'Sopra il massimo' : 'Lunghezza ottimale'}
              </span>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-primary-600 hover:text-primary-700"
              onClick={() => {
                navigator.clipboard.writeText(generatedDescription);
                alert('Descrizione copiata negli appunti!');
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

export default ShortDescriptionAgent;