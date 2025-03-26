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
    altTags: Array<{image: string; altText: string}>;
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
  
  // Generated meta tags states
  const [generatedMetaTitle, setGeneratedMetaTitle] = useState<string>('');
  const [generatedMetaDescription, setGeneratedMetaDescription] = useState<string>('');
  const [generatedAltTags, setGeneratedAltTags] = useState<Array<{image: string; altText: string}>>([]);
  const [generatedSeoUrl, setGeneratedSeoUrl] = useState<string>('');
  
  // Generate meta tags based on product data and configuration
  const generateMetaTags = async () => {
    setIsGenerating(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const { name, category, brand, features, benefits, description, images } = productData;
      
      // Parse custom keywords
      const keywordsArray = customKeywords
        .split(',')
        .map(k => k.trim())
        .filter(k => k.length > 0);
      
      // Generate meta title
      let metaTitle = '';
      if (includeBrand && brand) {
        metaTitle = `${brand} ${name || ''} - ${category || 'Prodotto'}`;
      } else {
        metaTitle = `${name || ''} - ${category || 'Prodotto'}`;
      }
      
      // Add keywords to meta title if enabled
      if (includeKeywords && keywordsArray.length > 0) {
        // Take only the first keyword to avoid overly long titles
        metaTitle += ` | ${keywordsArray[0]}`;
      }
      
      // Ensure meta title is not too long (max 60-70 chars for SEO)
      if (metaTitle.length > 65) {
        metaTitle = metaTitle.substring(0, 62) + '...';
      }
      
      setGeneratedMetaTitle(metaTitle);
      
      // Generate meta description
      let metaDescription = '';
      
      if (description) {
        // Use existing description if available
        metaDescription = description;
      } else {
        // Create a description based on product data
        const benefitsText = benefits?.slice(0, 2).join(' e ') || '';
        const featuresText = features?.slice(0, 2).join(' e ') || '';
        
        metaDescription = `${name || 'Prodotto'} ${category ? `di categoria ${category}` : ''}`;
        
        if (benefitsText) {
          metaDescription += ` che offre ${benefitsText}.`;
        } else if (featuresText) {
          metaDescription += ` con ${featuresText}.`;
        } else {
          metaDescription += ` di alta qualità.`;
        }
        
        if (includeBrand && brand) {
          metaDescription += ` Scopri ${brand} per prodotti di eccellenza.`;
        }
        
        // Add keywords to meta description if enabled
        if (includeKeywords && keywordsArray.length > 0) {
          metaDescription += ` ${keywordsArray.slice(0, 2).join(', ')}.`;
        }
      }
      
      // Ensure meta description is within the specified length
      if (metaDescription.length > metaDescriptionLength) {
        metaDescription = metaDescription.substring(0, metaDescriptionLength - 3) + '...';
      }
      
      setGeneratedMetaDescription(metaDescription);
      
      // Generate SEO-friendly URL
      let seoUrl = '';
      
      if (name) {
        // Convert name to lowercase, replace spaces with hyphens, remove special chars
        seoUrl = name.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
          .replace(/\-\-+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, '');
      }
      
      if (category) {
        // Add category to URL for better SEO structure
        const categorySlug = category.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
          .replace(/\-\-+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, '');
        
        seoUrl = `${categorySlug}/${seoUrl}`;
      }
      
      setGeneratedSeoUrl(seoUrl);
      
      // Generate alt tags for images
      const altTags: Array<{image: string; altText: string}> = [];
      
      if (images && images.length > 0) {
        images.forEach((image, index) => {
          let altText = '';
          
          switch(index) {
            case 0:
              altText = `${brand || ''} ${name || ''} - Immagine principale del prodotto ${category || ''}`;
              break;
            case 1:
              altText = `${brand || ''} ${name || ''} - Dettaglio del prodotto ${features?.[0] || ''}`;
              break;
            case 2:
              altText = `${brand || ''} ${name || ''} - Vista ${features?.[1] || 'alternativa'} del prodotto`;
              break;
            default:
              altText = `${brand || ''} ${name || ''} - ${category || 'Prodotto'} immagine ${index + 1}`;
          }
          
          // Clean up multiple spaces and trim
          altText = altText.replace(/\s+/g, ' ').trim();
          
          altTags.push({
            image,
            altText
          });
        });
      }
      
      setGeneratedAltTags(altTags);
      
      // Call the callback with generated meta tags if provided
      if (onMetaTagsGenerated) {
        onMetaTagsGenerated({
          metaTitle: generatedMetaTitle,
          metaDescription: generatedMetaDescription,
          altTags: generatedAltTags,
          seoUrl: generatedSeoUrl
        });
      }
      
    } catch (error) {
      console.error('Error generating meta tags:', error);
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <div className="card p-6 space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Agente Meta Tag SEO</h3>
      <p className="text-gray-600">Genera automaticamente meta descrizioni, tag alt per immagini e URL SEO-friendly.</p>
      
      {/* Configuration Panel */}
      <div className="bg-gray-50 p-4 rounded-lg space-y-4">
        <h4 className="font-medium text-gray-800">Configurazione</h4>
        
        {/* Meta Description Length */}
        <div>
          <label htmlFor="metaDescriptionLength" className="block text-sm font-medium text-gray-700 mb-1">
            Lunghezza Meta Descrizione (caratteri)
          </label>
          <input
            type="number"
            id="metaDescriptionLength"
            min="120"
            max="320"
            value={metaDescriptionLength}
            onChange={(e) => setMetaDescriptionLength(Math.max(120, parseInt(e.target.value) || 120))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <p className="mt-1 text-sm text-gray-500">Valore consigliato: 150-160 caratteri per Google</p>
        </div>
        
        {/* Custom Keywords */}
        <div>
          <label htmlFor="customKeywords" className="block text-sm font-medium text-gray-700 mb-1">
            Keyword SEO (separate da virgole)
          </label>
          <textarea
            id="customKeywords"
            value={customKeywords}
            onChange={(e) => setCustomKeywords(e.target.value)}
            placeholder="es. qualità premium, miglior prezzo, spedizione veloce"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            rows={2}
          />
        </div>
        
        {/* Toggle Options */}
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeKeywords}
              onChange={(e) => setIncludeKeywords(e.target.checked)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Includi keyword nei meta tag</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeBrand}
              onChange={(e) => setIncludeBrand(e.target.checked)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Includi brand nei meta tag</span>
          </label>
        </div>
      </div>
      
      {/* Generate Button */}
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
        ) : 'Genera Meta Tag SEO'}
      </button>
      
      {/* Generated Meta Tags Preview */}
      {generatedMetaTitle && (
        <div className="mt-6 space-y-6 border-t pt-6">
          <h4 className="font-medium text-gray-800">Meta Tag Generati</h4>
          
          <div className="space-y-4">
            {/* Meta Title */}
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h5 className="text-sm font-medium text-gray-500 mb-1">Meta Title</h5>
              <p className="text-blue-600 font-medium">{generatedMetaTitle}</p>
              <p className="mt-1 text-xs text-gray-500">{generatedMetaTitle.length} caratteri</p>
            </div>
            
            {/* Meta Description */}
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h5 className="text-sm font-medium text-gray-500 mb-1">Meta Description</h5>
              <p className="text-gray-700">{generatedMetaDescription}</p>
              <p className="mt-1 text-xs text-gray-500">{generatedMetaDescription.length} caratteri</p>
            </div>
            
            {/* SEO URL */}
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h5 className="text-sm font-medium text-gray-500 mb-1">URL SEO-friendly</h5>
              <p className="text-green-600 font-mono text-sm">{generatedSeoUrl}</p>
            </div>
            
            {/* Alt Tags */}
            {generatedAltTags.length > 0 && (
              <div className="p-4 bg-white border border-gray-200 rounded-md">
                <h5 className="text-sm font-medium text-gray-500 mb-2">Tag Alt per Immagini</h5>
                <div className="space-y-3">
                  {generatedAltTags.map((tag, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded overflow-hidden mr-3">
                        <img 
                          src={tag.image} 
                          alt="Thumbnail" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://via.placeholder.com/48?text=Img';
                          }}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-700">{tag.altText}</p>
                        <p className="text-xs text-gray-500 mt-1">{tag.altText.length} caratteri</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Copy to Clipboard Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="text-sm text-primary-600 hover:text-primary-700 px-3 py-1 border border-primary-200 rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(`<title>${generatedMetaTitle}</title>\n<meta name="description" content="${generatedMetaDescription}" />`);
                alert('Meta tag HTML copiati negli appunti!');
              }}
            >
              Copia HTML Meta Tag
            </button>
            
            <button
              type="button"
              className="text-sm text-primary-600 hover:text-primary-700 px-3 py-1 border border-primary-200 rounded-md"
              onClick={() => {
                const altTagsHtml = generatedAltTags.map(tag => 
                  `<img src="${tag.image}" alt="${tag.altText}" />`
                ).join('\n');
                navigator.clipboard.writeText(altTagsHtml);
                alert('HTML tag alt copiati negli appunti!');
              }}
            >
              Copia HTML Tag Alt
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetaTagSeoAgent;