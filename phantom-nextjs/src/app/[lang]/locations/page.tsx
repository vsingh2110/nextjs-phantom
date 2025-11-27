export default async function InternationalLocations({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  // Cities per country
  const countryCities: Record<string, string[]> = {
    'en-us': ['new-york', 'los-angeles', 'chicago', 'houston', 'miami'],
    'en-ae': ['dubai', 'abu-dhabi', 'sharjah', 'ajman'],
    'en-uk': ['london', 'manchester', 'birmingham', 'leeds', 'glasgow'],
    'en-au': ['sydney', 'melbourne', 'brisbane', 'perth', 'adelaide'],
    'en-fr': ['paris', 'marseille', 'lyon', 'toulouse', 'nice']
  };

  const cities = countryCities[lang] || [];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">Our Locations ({lang.toUpperCase()})</h1>
      <p className="text-lg text-gray-600 mb-8">
        Find Phantom Medical Imaging Equipment in your city.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cities.map((city) => (
          <a 
            key={city}
            href={`/${lang}/locations/${city}`}
            className="p-4 bg-green-50 rounded-lg hover:bg-green-100 capitalize"
          >
            {city.replace('-', ' ')}
          </a>
        ))}
      </div>
    </div>
  );
}
