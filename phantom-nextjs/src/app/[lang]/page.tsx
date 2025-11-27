import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCountryConfig, getValidCountryCodes } from '@/components/international';

export default async function InternationalHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const config = getCountryConfig(lang);
  
  if (!config) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Phantom Healthcare - {config.name}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your trusted partner for medical imaging equipment in {config.name}. 
            We provide sales, installation, and maintenance services.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link 
              href={`/${config.code}/products`}
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              View Products
            </Link>
            <Link 
              href={`/${config.code}/contact`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-2">Medical Imaging Equipment</h3>
              <p className="text-gray-600">MRI, CT, PET-CT, Cath Lab, and more</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">Service & Maintenance</h3>
              <p className="text-gray-600">AMC contracts, repairs, and installations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">Local Presence</h3>
              <p className="text-gray-600">Based in {config.address.city}, {config.name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['MRI Scanners', 'CT Scanners', 'PET-CT', 'Cath Lab'].map((product) => (
              <div key={product} className="border rounded-lg p-6 hover:border-blue-500 transition text-center">
                <h3 className="text-lg font-semibold mb-2">{product}</h3>
                <p className="text-gray-600 text-sm mb-4">View available models</p>
                <Link 
                  href={`/${config.code}/products`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-6">
            Contact our {config.name} team today
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href={`tel:${config.phone.replace(/\s/g, '')}`} className="text-lg">
              📞 {config.phone}
            </a>
            <span className="hidden md:inline">|</span>
            <a href={`mailto:${config.email}`} className="text-lg">
              ✉️ {config.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams(): Promise<{ lang: string }[]> {
  return getValidCountryCodes().map((lang) => ({ lang }));
}
