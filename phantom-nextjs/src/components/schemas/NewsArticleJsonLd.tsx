import Script from 'next/script';

interface NewsArticleJsonLdProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  author: string;
  url: string;
}

export default function NewsArticleJsonLd({
  title,
  description,
  image,
  datePublished,
  author,
  url,
}: NewsArticleJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
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
  };

  return (
    <Script
      id="news-article-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
