import Script from 'next/script';

export default function BlogListingSpeakableJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Phantom Healthcare Blog',
    description: 'Expert insights on medical imaging equipment, technology, and healthcare industry trends',
    url: 'https://www.phantomhealthcare.com/blogs',
    publisher: {
      '@type': 'Organization',
      name: 'Phantom Healthcare',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.phantomhealthcare.com/images/phantom-logo.png',
      },
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.blog-excerpt'],
    },
  };

  return (
    <Script
      id="blog-listing-speakable-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
