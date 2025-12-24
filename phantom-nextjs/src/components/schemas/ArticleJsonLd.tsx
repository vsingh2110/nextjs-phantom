import Script from 'next/script';

interface ArticleJsonLdProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  author: string;
  url: string;
}

export default function ArticleJsonLd({
  title,
  description,
  image,
  datePublished,
  author,
  url,
}: ArticleJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: `https://www.phantomhealthcare.com${image}`,
    datePublished: datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Phantom Healthcare',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.phantomhealthcare.com/images/phantom-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.blog-excerpt'],
    },
  };

  return (
    <Script
      id="article-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
