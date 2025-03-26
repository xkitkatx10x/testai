import React, { useState, useEffect } from 'react';
import { ArrowPathIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

type ToneType = 'formal' | 'colloquial' | 'technical' | 'creative';
type EmphasisType = 'benefits' | 'technical' | 'balanced';

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
    optimizedImages?: Array<{url: string; altText: string}>;
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
  
  // Generated content states
  const [generatedTitle, setGeneratedTitle] = useState<string>('');
  const [generatedShortDesc, setGeneratedShortDesc] = useState<string>('');
  const [generatedParagraphs, setGeneratedParagraphs] = useState<string[]>([]);
  const [generatedCTA, setGeneratedCTA] = useState<string>('');
  const [optimizedImages, setOptimizedImages] = useState<Array<{url: string; altText: string}>>([]);
  
  // Mock function to simulate AI product card generation
  const generateProductCard = async () => {
    setIsGenerating(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate product card content based on configuration
      const { name, category, brand, features, benefits, specifications, images } = productAttributes;
      
      // Generate title based on tone
      let title = '';
      switch(tone) {
        case 'formal':
          title = `${brand} ${name} - ${category} Professionale`;
          break;
        case 'colloquial':
          title = `Scopri il Fantastico ${brand} ${name}!`;
          break;
        case 'technical':
          title = `${brand} ${name}: ${category} con Specifiche Avanzate`;
          break;
        case 'creative':
          title = `Rivoluziona la tua Esperienza con ${brand} ${name}`;
          break;
        default:
          title = `${brand} ${name} - ${category}`;
      }
      setGeneratedTitle(title);
      
      // Generate short description
      const benefitsText = benefits?.slice(0, 2).join(' e ') || '';
      const shortDesc = `${brand} ${name} è un ${category} che offre ${benefitsText}. Ideale per ogni esigenza.`;
      setGeneratedShortDesc(shortDesc);
      
      // Generate paragraphs based on configuration
      const paragraphs: string[] = [];
      
      // Introduction paragraph
      let introParagraph = '';
      switch(tone) {
        case 'formal':
          introParagraph = `Il ${brand} ${name} rappresenta una soluzione ${category} di alta qualità, progettata per soddisfare le esigenze più elevate. Questo prodotto combina prestazioni eccellenti con un design elegante.`;
          break;
        case 'colloquial':
          introParagraph = `Ehi, hai mai desiderato un ${category} che faccia davvero la differenza? Il ${brand} ${name} è esattamente quello che stavi cercando! È fantastico, semplice da usare e cambierà il tuo modo di vedere i ${category}.`;
          break;
        case 'technical':
          introParagraph = `Il ${brand} ${name} è un ${category} tecnicamente avanzato che implementa le più recenti innovazioni nel settore. Le specifiche tecniche di questo dispositivo lo posizionano ai vertici della categoria.`;
          break;
        case 'creative':
          introParagraph = `Immagina di possedere un ${category} che non solo soddisfa le tue aspettative, ma le supera. ${brand} ${name} è quella scintilla di magia che trasforma l'ordinario in straordinario.`;
          break;
        default:
          introParagraph = `${brand} ${name} è un ${category} di qualità superiore. Questo prodotto è stato progettato per offrire prestazioni eccellenti e un'esperienza utente ottimale.`;
      }
      paragraphs.push(introParagraph);
      
      // Features or benefits paragraph based on emphasis
      if (emphasis === 'benefits' || emphasis === 'balanced') {
        const benefitsParagraph = `Questo ${category} offre numerosi vantaggi, tra cui ${benefits?.join(', ') || 'facilità d\'uso e prestazioni elevate'}. Utilizzando ${brand} ${name}, potrai ${benefits?.[0] || 'migliorare la tua produttività'} e ${benefits?.[1] || 'ottenere risultati superiori'}.`;
        paragraphs.push(benefitsParagraph);
      }
      
      if (emphasis === 'technical' || emphasis === 'balanced') {
        let specsList = '';
        if (specifications && Object.keys(specifications).length > 0) {
          specsList = Object.entries(specifications)
            .map(([key, value]) => `${key}: ${value}`)
            .join(', ');
        } else if (features && features.length > 0) {
          specsList = features.join(', ');
        } else {
          specsList = 'design ergonomico, materiali di alta qualità e tecnologia all\'avanguardia';
        }
        
        const technicalParagraph = `Dal punto di vista tecnico, ${brand} ${name} si distingue per ${specsList}. Queste caratteristiche garantiscono prestazioni superiori in ogni situazione d'uso.`;
        paragraphs.push(technicalParagraph);
      }
      
      // Add custom sections if provided
      customSections.forEach(section => {
        if (section.trim()) {
          paragraphs.push(`${section}`);
        }
      });
      
      // Ensure we have the requested number of paragraphs
      while (paragraphs.length < paragraphCount) {
        paragraphs.push(`${brand} ${name} continua a ricevere feedback positivi dai clienti che apprezzano la qualità e l'affidabilità di questo ${category}. La combinazione di design innovativo e funzionalità avanzate lo rende una scelta eccellente.`);
      }
      
      // Trim paragraphs to the specified character count
      const trimmedParagraphs = paragraphs.slice(0, paragraphCount).map(para => {
        if (para.length > charsPerParagraph) {
          return para.substring(0, charsPerParagraph - 3) + '...';
        }
        return para;
      });
      
      setGeneratedParagraphs(trimmedParagraphs);
      
      // Generate call to action if enabled
      if (includeCTA) {
        const cta = `Acquista ora ${brand} ${name} e scopri la differenza. Offerta limitata con spedizione gratuita!`;
        setGeneratedCTA(cta);
      } else {
        setGeneratedCTA('');
      }
      
      // Generate optimized images if enabled
      if (includeImages) {
        const optimizedImgs = [];
        
        // Use provided images or create placeholders
        if (images && images.length > 0) {
          for (let i = 0; i < Math.min(images.length, 3); i++) {
            optimizedImgs.push({
              url: images[i],
              altText: `${brand} ${name} - ${i === 0 ? 'Vista principale' : i === 1 ? 'Dettaglio prodotto' : 'In uso'}`
            });
          }
        } else {
          // Placeholder images
          optimizedImgs.push(
            { url: 'https://via.placeholder.com/600x400?text=Immagine+Principale', altText: `${brand} ${name} - Vista principale` },
            { url: 'https://via.placeholder.com/600x400?text=Dettaglio', altText: `${brand} ${name} - Dettaglio prodotto` },
            { url: 'https://via.placeholder.com/600x400?text=In+Uso', altText: `${brand} ${name} - In uso` }
          );
        }
        
        setOptimizedImages(optimizedImgs);
      } else {
        setOptimizedImages([]);
      }
      
      // Call the callback with generated content if provided
      if (onCardGenerated) {
        onCardGenerated({
          title: generatedTitle,
          shortDescription: generatedShortDesc,
          paragraphs: trimmedParagraphs,
          callToAction: generatedCTA,
          optimizedImages: includeImages ? optimizedImages : undefined
        });
      }
      
    } catch (error) {
      console.error('Error generating product card:', error);
    } finally {
      setIsGenerating(false);
    }
  };
  
  const addCustomSection = () => {
    setCustomSections([...customSections, '']);
  };
  
  const removeCustomSection = (index: number) => {
    const updatedSections = [...customSections];
    updatedSections.splice(index, 1);
    setCustomSections(updatedSections);
  };
  
  const updateCustomSection = (index: number, value: string) => {
    const updatedSections = [...customSections];
    updatedSections[index] = value;
    setCustomSections(updatedSections);
  };
  
  useEffect(() => {
    // This effect can be used for initialization or cleanup if needed
  }, []);
  
  return (
    <div className="card p-6 space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Agente Scheda Prodotto Completa</h3>
      <p className="text-gray-600">Configura e genera una scheda prodotto completa con contenuti ottimizzati.</p>
      
      {/* Configuration Panel */}
      <div className="bg-gray-50 p-4 rounded-lg space-y-4">
        <h4 className="font-medium text-gray-800">Configurazione</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Paragraph Count */}
          <div>
            <label htmlFor="paragraphCount" className="block text-sm font-medium text-gray-700 mb-1">
              Numero di paragrafi
            </label>
            <input
              type="number"
              id="paragraphCount"
              min="1"
              max="5"
              value={paragraphCount}
              onChange={(e) => setParagraphCount(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          {/* Characters per Paragraph */}
          <div>
            <label htmlFor="charsPerParagraph" className="block text-sm font-medium text-gray-700 mb-1">
              Caratteri per paragrafo
            </label>
            <input
              type="number"
              id="charsPerParagraph"
              min="100"
              max="500"
              step="50"
              value={charsPerParagraph}
              onChange={(e) => setCharsPerParagraph(Math.max(100, parseInt(e.target.value) || 100))}
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
        
        {/* Emphasis Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Enfasi su</label>
          <div className="grid grid-cols-3 gap-2">
            {(['benefits', 'technical', 'balanced'] as EmphasisType[]).map((emphasisOption) => (
              <button
                key={emphasisOption}
                type="button"
                onClick={() => setEmphasis(emphasisOption)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${emphasis === emphasisOption ? 'bg-primary-600 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                {emphasisOption === 'benefits' ? 'Benefici' : 
                 emphasisOption === 'technical' ? 'Specifiche Tecniche' : 'Bilanciato'}
              </button>
            ))}
          </div>
        </div>
        
        {/* Toggle Options */}
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeCTA}
              onChange={(e) => setIncludeCTA(e.target.checked)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Includi Call-to-Action</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeImages}
              onChange={(e) => setIncludeImages(e.target.checked)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Ottimizza immagini</span>
          </label>
        </div>
        
        {/* Custom Sections */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700">Sezioni personalizzate</label>
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
                onChange={(e) => updateCustomSection(index, e.target.value)}
                placeholder="Inserisci il contenuto della sezione personalizzata..."
                className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                rows={2}
              />
              {customSections.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeCustomSection(index)}
                  className="p-1 text-gray-400 hover:text-red-500"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Generate Button */}
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
        ) : 'Genera Scheda Prodotto'}
      </button>
      
      {/* Generated Content Preview */}
      {generatedTitle && (
        <div className="mt-8 space-y-6 border-t pt-6">
          <h4 className="font-medium text-gray-800">Anteprima Scheda Prodotto</h4>
          
          <div className="space-y-4">
            <div>
              <h5 className="text-sm font-medium text-gray-500 mb-1">Titolo</h5>
              <p className="text-lg font-semibold text-gray-900">{generatedTitle}</p>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-gray-500 mb-1">Descrizione Breve</h5>
              <p className="text-gray-700">{generatedShortDesc}</p>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-gray-500 mb-1">Contenuto</h5>
              <div className="space-y-3">
                {generatedParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-700">{paragraph}</p>
                ))}
              </div>
            </div>
            
            {generatedCTA && (
              <div>
                <h5 className="text-sm font-medium text-gray-500 mb-1">Call to Action</h5>
                <p className="text-primary-600 font-medium">{generatedCTA}</p>
              </div>
            )}
            
            {optimizedImages.length > 0 && (
              <div>
                <h5 className="text-sm font-medium text-gray-500 mb-1">Immagini Ottimizzate</h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                  {optimizedImages.map((img, index) => (
                    <div key={index} className="relative aspect-video bg-gray-100 rounded-md overflow-hidden">
                      <img 
                        src={img.url} 
                        alt={img.altText} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs p-1 truncate">
                        {img.altText}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCardAgent;