import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { getCityData, getAllCitySlugs, productCategories } from '@/lib/data/cities';

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityData = getCityData(city);
  
  if (!cityData) {
    return { title: 'City Not Found' };
  }

  return {
    title: `Medical Imaging Equipment in ${cityData.name} | MRI, CT Scanner Dealers | Phantom Healthcare`,
    description: `Buy refurbished & new MRI, CT scan, PET-CT, Cath Lab machines in ${cityData.name}, ${cityData.state}. Trusted medical imaging equipment dealers with installation & AMC services. Call ${cityData.phone}`,
    keywords: cityData.seoKeywords.join(', '),
    openGraph: {
      title: `Medical Imaging Equipment Dealers in ${cityData.name}`,
      description: `Phantom Healthcare ${cityData.name} - Your trusted partner for MRI, CT, PET-CT machines in ${cityData.state}`,
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityData = getCityData(city);
  
  if (!cityData) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Medical Imaging Equipment in {cityData.name}
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Phantom Healthcare - Your trusted partner for MRI, CT scan, and other medical imaging 
            equipment in {cityData.name}, {cityData.state}. Sales, installation, and maintenance services.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a 
              href={`tel:${cityData.phone.replace(/\s/g, '')}`}
              className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              📞 {cityData.phone}
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>{cityData.address.line1}, {cityData.address.landmark}, {cityData.name} - {cityData.address.pincode}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${cityData.email}`} className="text-green-700 hover:underline">
              ✉️ {cityData.email}
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Browse by Category */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Medical Equipment in {cityData.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {productCategories.map((category) => (
              <Link 
                key={category.slug}
                href={`/locations/${city}/${category.slug}`}
                className="p-4 bg-white border rounded-lg hover:border-green-500 hover:shadow-md transition text-center"
              >
                <span className="text-3xl mb-2 block">{category.icon}</span>
                <span className="font-medium text-gray-800">{category.name}</span>
                <span className="block text-xs text-gray-500 mt-1">in {cityData.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Phantom Healthcare in {cityData.name}?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">✅ Local Presence</h3>
              <p className="text-gray-600">
                Dedicated office in {cityData.name} with trained engineers for quick response.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">✅ Wide Coverage</h3>
              <p className="text-gray-600">
                We serve {cityData.serviceAreas.slice(0, 3).join(', ')} and nearby areas from our {cityData.name} office.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">✅ Trusted by Hospitals</h3>
              <p className="text-gray-600">
                Serving leading hospitals including {cityData.nearbyHospitals.slice(0, 2).join(', ')}.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Services in {cityData.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-bold mb-2">Equipment Sales</h3>
              <p className="text-gray-600 text-sm">New & refurbished MRI, CT, PET-CT machines</p>
              <Link href="/products" className="text-green-600 text-sm hover:underline mt-2 inline-block">
                View Products →
              </Link>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-bold mb-2">AMC / CMC</h3>
              <p className="text-gray-600 text-sm">Annual maintenance contracts for all equipment</p>
              <Link href="/service-pages/amc-cmc-services-packages-for-ct-scanner-machines" className="text-green-600 text-sm hover:underline mt-2 inline-block">
                View AMC Plans →
              </Link>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-bold mb-2">Installation</h3>
              <p className="text-gray-600 text-sm">Professional installation & site planning</p>
              <Link href="/service-pages/medical-imaging-radiology-equipment-installation" className="text-green-600 text-sm hover:underline mt-2 inline-block">
                Learn More →
              </Link>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-bold mb-2">MRI Helium Filling</h3>
              <p className="text-gray-600 text-sm">Helium refilling services for MRI machines</p>
              <Link href="/service-pages/mri-helium-filling-services" className="text-green-600 text-sm hover:underline mt-2 inline-block">
                Learn More →
              </Link>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Areas We Serve from {cityData.name}</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Our {cityData.name} office provides medical imaging equipment and services across {cityData.state} including:
            </p>
            <div className="flex flex-wrap gap-2">
              {cityData.serviceAreas.map((area) => (
                <span key={area} className="bg-white px-3 py-1 rounded-full text-sm border">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our {cityData.name} Office Location</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-4">Office Address</h3>
                <address className="not-italic text-gray-700">
                  <strong>Phantom Healthcare - {cityData.name}</strong><br />
                  {cityData.address.line1}<br />
                  {cityData.address.line2 && <>{cityData.address.line2}<br /></>}
                  {cityData.address.landmark && <>{cityData.address.landmark}<br /></>}
                  {cityData.name}, {cityData.state} - {cityData.address.pincode}
                </address>
                <div className="mt-4 space-y-2">
                  <p><strong>Phone:</strong> {cityData.phone}</p>
                  <p><strong>Email:</strong> {cityData.email}</p>
                </div>
              </div>
            </div>
            <div>
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50000!2d${cityData.mapCoordinates.lng}!3d${cityData.mapCoordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000`}
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Phantom Healthcare ${cityData.name} Office Location`}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Generate static params for all cities
export async function generateStaticParams(): Promise<{ city: string }[]> {
  return getAllCitySlugs().map((city) => ({ city }));
}
