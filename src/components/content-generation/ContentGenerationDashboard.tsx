import React, { useState } from 'react';
import TitleAgent from './TitleAgent';
import ShortDescriptionAgent from './ShortDescriptionAgent';
import ProductCardAgent from './ProductCardAgent';
import MetaTagSeoAgent from './MetaTagSeoAgent';

interface ContentGenerationDashboardProps {
  initialProductData?: {
    name?: string;
    category?: string;
    brand?: string;
    features?: string[];
    benefits?: string[];
    specifications?: Record<string, string>;
    images?: string[];
    [key: string]: any;
  };
}

const ContentGenerationDashboard: React.FC<ContentGenerationDashboardProps> = ({
  initialProductData = {
    name: 'Prodotto di esempio',
    category: 'Elettronica',
    brand: 'BrandTest',
    features: ['Resistente all\'acqua', 'Batteria a lunga durata', 'Design ergonomico'],
    benefits: ['Risparmio di tempo', 'Facilità d\'uso', 'Maggiore produttività'],
    specifications: {
      'Dimensioni': '10 x 5 x 2 cm',
      'Peso': '250g',
      'Materiale': 'Alluminio',
      'Colore': 'Nero'
    },
    images: [
      'https://via.placeholder.com/600x400?text=Prodotto+Principale',
      'https://via.placeholder.com/600x400?text=Dettaglio',
      'https://via.placeholder.com/600x400?text=In+Uso'
    ],
    mainFeature: 'Intelligenza Artificiale'
  }
}) => {
  const [productData, setProductData] = useState(initialProductData);
  const [activeTab, setActiveTab] = useState<'title' | 'description' | 'card' | 'meta'>('title');
  const [generatedContent, setGeneratedContent] = useState<{
    title?: string;
    shortDescription?: string;
    cardData?: {
      title: string;
      shortDescription: string;
      paragraphs: string[];
      callToAction: string;
      optimizedImages?: Array<{url: string; altText: string}>;
    };
    metaTags?: {
      metaTitle: string;
      metaDescription: string;
      altTags: Array<{image: string; altText: string}>;
      seoUrl: string;
    };
  }>({});
  
  // Suggested keywords for title generation
  const suggestedKeywords = [
    'miglior prezzo',
    'alta qualità',
    'spedizione veloce',
    'garanzia estesa',
    'novità',
    'bestseller',
    'offerta speciale'
  ];
  
  // Handle title generation
  const handleTitleGenerated = (title: string) => {
    setGeneratedContent(prev => ({ ...prev, title }));
  };
  
  // Handle short description generation
  const handleDescriptionGenerated = (description: string) => {
    setGeneratedContent(prev => ({ ...prev, shortDescription: description }));
  };
  
  // Handle product card generation
  const handleCardGenerated = (cardData: {
    title: string;
    shortDescription: string;
    paragraphs: string[];
    callToAction: string;
    optimizedImages?: Array<{url: string; altText: string}>;
  }) => {
    setGeneratedContent(prev => ({ ...prev, cardData }));
  };
  
  // Handle meta tags generation
  const handleMetaTagsGenerated = (metaTags: {
    metaTitle: string;
    metaDescription: string;
    altTags: Array<{image: string; altText: string}>;
    seoUrl: string;
  }) => {
    setGeneratedContent(prev => ({ ...prev, metaTags }));
  };
  
  // Update product data
  const handleProductDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    setProductData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };
  
  // Add/remove feature
  const handleFeatureChange = (index: number, value: string) => {
    const updatedFeatures = [...(productData.features || [])];
    updatedFeatures[index] = value;
    setProductData(prev => ({
      ...prev,
      features: updatedFeatures
    }));
  };
  
  const addFeature = () => {
    setProductData(prev => ({
      ...prev,
      features: [...(prev.features || []), '']
    }));
  };
  
  const removeFeature = (index: number) => {
    const updatedFeatures = [...(productData.features || [])];
    updatedFeatures.splice(index, 1);
    setProductData(prev => ({
      ...prev,
      features: updatedFeatures
    }));
  };
  
  // Add/remove benefit
  const handleBenefitChange = (index: number, value: string) => {
    const updatedBenefits = [...(productData.benefits || [])];
    updatedBenefits[index] = value;
    setProductData(prev => ({
      ...prev,
      benefits: updatedBenefits
    }));
  };
  
  const addBenefit = () => {
    setProductData(prev => ({
      ...prev,
      benefits: [...(prev.benefits || []), '']
    }));
  };
  
  const removeBenefit = (index: number) => {
    const updatedBenefits = [...(productData.benefits || [])];
    updatedBenefits.splice(index, 1);
    setProductData(prev => ({
      ...prev,
      benefits: updatedBenefits
    }));
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">ProductAI - Generazione Contenuti</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Product Data Panel */}
        <div className="lg:col-span-1">
          <div className="card p-6 space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Dati Prodotto</h2>
            <p className="text-gray-600">Inserisci i dati del prodotto per generare contenuti ottimizzati.</p>
            
            <div className="space-y-4">
              {/* Basic Info */}
              <div>
                <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Prodotto
                </label>
                <input
                  type="text"
                  id="productName"
                  value={productData.name || ''}
                  onChange={(e) => handleProductDataChange(e, 'name')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                  Brand
                </label>
                <input
                  type="text"
                  id="brand"
                  value={productData.brand || ''}
                  onChange={(e) => handleProductDataChange(e, 'brand')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Categoria
                </label>
                <input
                  type="text"
                  id="category"
                  value={productData.category || ''}
                  onChange={(e) => handleProductDataChange(e, 'category')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="mainFeature" className="block text-sm font-medium text-gray-700 mb-1">
                  Caratteristica Principale
                </label>
                <input
                  type="text"
                  id="mainFeature"
                  value={productData.mainFeature || ''}
                  onChange={(e) => handleProductDataChange(e, 'mainFeature')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              {/* Features */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Caratteristiche
                  </label>
                  <button
                    type="button"
                    onClick={addFeature}
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    + Aggiungi
                  </button>
                </div>
                
                {(productData.features || []).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => handleFeatureChange(index, e.target.value)}
                      className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Benefits */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Benefici
                  </label>
                  <button
                    type="button"
                    onClick={addBenefit}
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    + Aggiungi
                  </button>
                </div>
                
                {(productData.benefits || []).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      value={benefit}
                      onChange={(e) => handleBenefitChange(index, e.target.value)}
                      className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <button
                      type="button"
                      onClick={() => removeBenefit(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* AI Agents Panel */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="mb-6 border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('title')}
                className={`${activeTab === 'title' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Titoli
              </button>
              <button
                onClick={() => setActiveTab('description')}
                className={`${activeTab === 'description' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Descrizioni Brevi
              </button>
              <button
                onClick={() => setActiveTab('card')}
                className={`${activeTab === 'card' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Scheda Completa
              </button>
              <button
                onClick={() => setActiveTab('meta')}
                className={`${activeTab === 'meta' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Meta Tag SEO
              </button>
            </nav>
          </div>
          
          {/* Active Tab Content */}
          <div>
            {activeTab === 'title' && (
              <TitleAgent 
                productData={productData} 
                suggestedKeywords={suggestedKeywords}
                onTitleGenerated={handleTitleGenerated}
              />
            )}
            
            {activeTab === 'description' && (
              <ShortDescriptionAgent 
                productData={productData}
                onDescriptionGenerated={handleDescriptionGenerated}
              />
            )}
            
            {activeTab === 'card' && (
              <ProductCardAgent 
                productAttributes={productData}
                onCardGenerated={handleCardGenerated}
              />
            )}
            
            {activeTab === 'meta' && (
              <MetaTagSeoAgent 
                productData={productData}
                onMetaTagsGenerated={handleMetaTagsGenerated}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentGenerationDashboard;