const categoryNames: Record<string, string> = {
  'mri': 'MRI Machines',
  'ct': 'CT Scanners',
  'pet-ct': 'PET-CT Scanners',
  'cath-lab': 'Cath Lab Equipment',
  'dexa': 'DEXA / Bone Densitometer',
  'gamma-camera': 'Gamma Camera / SPECT'
};

export default async function InternationalCityCategoryPage({ 
  params 
}: { 
  params: Promise<{ lang: string; city: string; category: string }> 
}) {
  const { lang, city, category } = await params;
  const cityName = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const categoryName = categoryNames[category] || category;
  const countryCode = lang.replace('en-', '').toUpperCase();

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">{categoryName} in {cityName}</h1>
      <p className="text-lg text-gray-600 mb-8">
        Find the best {categoryName.toLowerCase()} in {cityName}, {countryCode}. 
        Buy refurbished or brand new equipment from Phantom Healthcare.
      </p>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Phantom for {categoryName} in {cityName}?</h2>
        <p className="text-gray-600">[Placeholder: City-specific SEO content for {countryCode} market]</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Available {categoryName}</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-600">
            [Placeholder: Grid of {categoryName} models available in {cityName}]
          </p>
        </div>
      </section>
    </div>
  );
}
