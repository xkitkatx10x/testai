export type ToneType = 'formal' | 'colloquial' | 'technical' | 'creative';
export type TargetType = 'general' | 'technical' | 'business' | 'casual';
export type EmphasisType = 'benefits' | 'technical' | 'balanced';

export interface ProductData {
  name?: string;
  category?: string;
  brand?: string;
  mainFeature?: string;
  features?: string[];
  benefits?: string[];
  specifications?: Record<string, string>;
  images?: string[];
  description?: string;
  [key: string]: any;
}

export interface TitleOptions {
  tone: ToneType;
  keywords: string[];
}

export interface DescriptionOptions {
  tone: ToneType;
  target: TargetType;
  highlightBenefits: boolean;
  minChars: number;
  maxChars: number;
}

export interface CardOptions {
  tone: ToneType;
  emphasis: EmphasisType;
  paragraphCount: number;
  charsPerParagraph: number;
  includeCTA: boolean;
  includeImages: boolean;
  customSections: string[];
}

export interface MetaTagOptions {
  includeKeywords: boolean;
  customKeywords: string[];
  includeBrand: boolean;
  metaDescriptionLength: number;
}

export function generateTitle(productData: ProductData, options: TitleOptions): string {
  const { name, category, brand, mainFeature } = productData;
  const { tone, keywords } = options;

  const keywordPhrase = keywords.length > 0 ? ` - ${keywords.slice(0, 2).join(' ')}` : '';
  let title = '';

  switch (tone) {
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

  return title.replace(/\s+/g, ' ').trim();
}

export function generateShortDescription(productData: ProductData, options: DescriptionOptions): string {
  const { name, category, brand, features, benefits } = productData;
  const { tone, target, highlightBenefits, minChars, maxChars } = options;

  let description = '';

  switch (tone) {
    case 'formal':
      if (target === 'business') {
        description = `${brand || 'Il prodotto'} ${name || ''} è una soluzione ${category || 'professionale'} progettata per ottimizzare i processi aziendali.`;
      } else if (target === 'technical') {
        description = `${brand || 'Il prodotto'} ${name || ''} rappresenta un\'avanzata soluzione ${category || 'tecnologica'} con specifiche tecniche superiori.`;
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

  if (highlightBenefits && benefits && benefits.length > 0) {
    const benefitsToShow = benefits.slice(0, 2);
    description += ` Offre ${benefitsToShow.join(' e ')}.`;
  } else if (highlightBenefits && features && features.length > 0) {
    const featuresToShow = features.slice(0, 2);
    description += ` Caratterizzato da ${featuresToShow.join(' e ')}.`;
  }

  switch (target) {
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

  if (description.length < minChars) {
    description += ` ${brand || 'Questo prodotto'} è stato progettato con attenzione ai dettagli e materiali di alta qualità per garantire la massima soddisfazione.`;
  }

  if (description.length > maxChars) {
    description = description.substring(0, maxChars - 3) + '...';
  }

  return description;
}

export function generateProductCard(productAttributes: ProductData, options: CardOptions) {
  const { name = '', category = 'prodotto', brand = 'Brand', benefits, specifications, features, images } = productAttributes;
  const { tone, emphasis, paragraphCount, charsPerParagraph, includeCTA, includeImages, customSections } = options;

  let title = '';
  switch (tone) {
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

  const benefitsText = benefits?.slice(0, 2).join(' e ') || '';
  const shortDescription = `${brand} ${name} è un ${category} che offre ${benefitsText || 'prestazioni eccezionali'}. Ideale per ogni esigenza.`;

  const paragraphs: string[] = [];

  let introParagraph = '';
  switch (tone) {
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
      introParagraph = `Immagina di possedere un ${category} che non solo soddisfa le tue aspettative, ma le supera. ${brand} ${name} è quella scintilla di magia che trasforma l\'ordinario in straordinario.`;
      break;
    default:
      introParagraph = `${brand} ${name} è un ${category} di qualità superiore. Questo prodotto è stato progettato per offrire prestazioni eccellenti e un\'esperienza utente ottimale.`;
  }
  paragraphs.push(introParagraph);

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
      specsList = "design ergonomico, materiali di alta qualità e tecnologia all\'avanguardia";
    }

    const technicalParagraph = `Dal punto di vista tecnico, ${brand} ${name} si distingue per ${specsList}. Queste caratteristiche garantiscono prestazioni superiori in ogni situazione d\'uso.`;
    paragraphs.push(technicalParagraph);
  }

  customSections.forEach((section) => {
    if (section.trim()) {
      paragraphs.push(section.trim());
    }
  });

  while (paragraphs.length < paragraphCount) {
    paragraphs.push(`${brand} ${name} continua a ricevere feedback positivi dai clienti che apprezzano la qualità e l\'affidabilità di questo ${category}. La combinazione di design innovativo e funzionalità avanzate lo rende una scelta eccellente.`);
  }

  const trimmedParagraphs = paragraphs.slice(0, paragraphCount).map((paragraph) => {
    if (paragraph.length > charsPerParagraph) {
      return paragraph.substring(0, charsPerParagraph - 3) + '...';
    }
    return paragraph;
  });

  const callToAction = includeCTA
    ? `Acquista ora ${brand} ${name} e scopri la differenza. Offerta limitata con spedizione gratuita!`
    : '';

  const optimizedImages = includeImages
    ? (() => {
        const optimized = [] as Array<{ url: string; altText: string }>;
        if (images && images.length > 0) {
          for (let i = 0; i < Math.min(images.length, 3); i += 1) {
            optimized.push({
              url: images[i]!,
              altText: `${brand} ${name} - ${i === 0 ? 'Vista principale' : i === 1 ? 'Dettaglio prodotto' : 'In uso'}`,
            });
          }
        } else {
          optimized.push(
            { url: 'https://via.placeholder.com/600x400?text=Immagine+Principale', altText: `${brand} ${name} - Vista principale` },
            { url: 'https://via.placeholder.com/600x400?text=Dettaglio', altText: `${brand} ${name} - Dettaglio prodotto` },
            { url: 'https://via.placeholder.com/600x400?text=In+Uso', altText: `${brand} ${name} - In uso` },
          );
        }
        return optimized;
      })()
    : undefined;

  return {
    title,
    shortDescription,
    paragraphs: trimmedParagraphs,
    callToAction,
    optimizedImages,
  };
}

export function generateMetaTags(productData: ProductData, options: MetaTagOptions) {
  const { name, category, brand, features, benefits, description, images } = productData;
  const { includeKeywords, customKeywords, includeBrand, metaDescriptionLength } = options;

  const keywordsArray = customKeywords.filter((keyword) => keyword.trim().length > 0).map((keyword) => keyword.trim());

  let metaTitle = includeBrand && brand ? `${brand} ${name || ''} - ${category || 'Prodotto'}` : `${name || ''} - ${category || 'Prodotto'}`;
  if (includeKeywords && keywordsArray.length > 0) {
    metaTitle += ` | ${keywordsArray[0]}`;
  }
  if (metaTitle.length > 65) {
    metaTitle = `${metaTitle.substring(0, 62)}...`;
  }

  let metaDescription = '';
  if (description) {
    metaDescription = description;
  } else {
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

    if (includeKeywords && keywordsArray.length > 0) {
      metaDescription += ` ${keywordsArray.slice(0, 2).join(', ')}.`;
    }
  }

  if (metaDescription.length > metaDescriptionLength) {
    metaDescription = `${metaDescription.substring(0, metaDescriptionLength - 3)}...`;
  }

  let seoUrl = '';
  if (name) {
    seoUrl = name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  if (category) {
    const categorySlug = category
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
    seoUrl = `${categorySlug}/${seoUrl}`;
  }

  const altTags: Array<{ image: string; altText: string }> = [];
  if (images && images.length > 0) {
    images.forEach((image, index) => {
      let altText = '';
      switch (index) {
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
      altText = altText.replace(/\s+/g, ' ').trim();
      altTags.push({ image, altText });
    });
  }

  return {
    metaTitle,
    metaDescription,
    altTags,
    seoUrl,
  };
}
