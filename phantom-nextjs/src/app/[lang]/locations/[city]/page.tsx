export default async function InternationalCityPage({ params }: { params: Promise<{ lang: string; city: string }> }) {
  const { lang, city } = await params;
  const cityName = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const countryCode = lang.replace('en-', '').toUpperCase();

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">Medical Imaging Equipment in {cityName}</h1>
      <p className="text-lg text-gray-600 mb-8">
        Phantom Healthcare {countryCode} - Your trusted partner in {cityName}.
      </p>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Available Equipment in {cityName}</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600">[Placeholder: Products available in {cityName}, {countryCode}]</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <a href={`/${lang}/locations/${city}/mri`} className="p-4 bg-green-50 rounded-lg hover:bg-green-100">MRI Machines</a>
            <a href={`/${lang}/locations/${city}/ct`} className="p-4 bg-green-50 rounded-lg hover:bg-green-100">CT Scanners</a>
            <a href={`/${lang}/locations/${city}/pet-ct`} className="p-4 bg-green-50 rounded-lg hover:bg-green-100">PET-CT</a>
          </div>
        </section>
      </div>
    </div>
  );
}
