import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { getCityData, getAllCitySlugs, productCategories, getCategoryData } from '@/lib/data/cities';

// Product links based on category
const categoryProductLinks: Record<string, { name: string; href: string }[]> = {
  'mri': [
    { name: 'GE Signa HDxt 1.5T', href: '/product-pages/mri-scanner-machines/1-5t-mri/ge-signa-hdxt' },
    { name: 'Siemens Magnetom Avanto', href: '/product-pages/mri-scanner-machines/1-5t-mri/siemens-magnetom-avanto' },
    { name: 'GE Discovery MR750 3.0T', href: '/product-pages/mri-scanner-machines/3-0t-mri/ge-discovery-mr750' },
    { name: 'Siemens Magnetom Vida 3.0T', href: '/product-pages/mri-scanner-machines/3-0t-mri/siemens-magnetom-vida' },
    { name: 'View All MRI Machines', href: '/product-pages/mri-scanner-machines' },
  ],
  'ct': [
    { name: 'GE BrightSpeed 16-Slice', href: '/product-pages/brand-new-ct-scan-machines/16-slice-ct/ge-brightspeed-16' },
    { name: 'Siemens Somatom Emotion 16', href: '/product-pages/brand-new-ct-scan-machines/16-slice-ct/siemens-somatom-emotion-16' },
    { name: '32-Slice CT Scanners', href: '/product-pages/brand-new-ct-scan-machines/32-slice-ct' },
    { name: '64-Slice CT Scanners', href: '/product-pages/brand-new-ct-scan-machines/64-slice-ct' },
    { name: '128-Slice CT Scanners', href: '/product-pages/brand-new-ct-scan-machines/128-slice-ct' },
    { name: 'View All CT Scanners', href: '/product-pages/brand-new-ct-scan-machines' },
  ],
  'pet-ct': [
    { name: 'Refurbished PET-CT Scanners', href: '/product-pages/refurbished-pet-ct-scanner-machines' },
  ],
  'cath-lab': [
    { name: 'Refurbished Cath Lab Machines', href: '/product-pages/refurbished-cath-lab-machines' },
  ],
  'dexa': [
    { name: 'Refurbished DEXA Machines', href: '/product-pages/refurbished-bone-densitometer-dexa' },
  ],
  'gamma-camera': [
    { name: 'Refurbished Gamma Camera', href: '/product-pages/refurbished-gamma-camera-spect-system-machine' },
  ],
  'c-arm': [
    { name: 'C-Arm Machines', href: '/products' },
  ],
};

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ city: string; category: string }> }): Promise<Metadata> {
  const { city, category } = await params;
  const cityData = getCityData(city);
  const categoryData = getCategoryData(category);
  
  if (!cityData || !categoryData) {
    return { title: 'Not Found' };
  }

  return {
    title: `${categoryData.name} in ${cityData.name} | Buy ${categoryData.name} ${cityData.state} | Phantom Healthcare`,
    description: `Buy refurbished & new ${categoryData.name} in ${cityData.name}, ${cityData.state}. Best prices on ${categoryData.name.toLowerCase()} with installation, warranty & AMC. Call ${cityData.phone}`,
    keywords: `${categoryData.name} ${cityData.name}, ${categoryData.name} dealers ${cityData.state}, buy ${categoryData.name.toLowerCase()} ${cityData.name}, refurbished ${categoryData.name.toLowerCase()} ${cityData.name}`,
    openGraph: {
      title: `${categoryData.name} Dealers in ${cityData.name}`,
      description: `Phantom Healthcare - Buy ${categoryData.name} in ${cityData.name} with installation and AMC services`,
    },
  };
}

export default async function CityCategoryPage({ params }: { params: Promise<{ city: string; category: string }> }) {
  const { city, category } = await params;
  const cityData = getCityData(city);
  const categoryData = getCategoryData(category);
  
  if (!cityData || !categoryData) {
    notFound();
  }

  const productLinks = categoryProductLinks[category] || [];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4 opacity-80">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">→</span>
            <Link href={`/locations/${city}`} className="hover:underline">{cityData.name}</Link>
            <span className="mx-2">→</span>
            <span>{categoryData.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {categoryData.icon} {categoryData.name} in {cityData.name}
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Find the best {categoryData.name.toLowerCase()} dealers and suppliers in {cityData.name}. 
            Buy refurbished or brand new equipment from Phantom Healthcare with installation and AMC.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a 
              href={`tel:${cityData.phone.replace(/\s/g, '')}`}
              className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              📞 Call Now: {cityData.phone}
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Available Products */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Available {categoryData.name} Models</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productLinks.map((product) => (
              <Link 
                key={product.href}
                href={product.href}
                className="border rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <span className="text-blue-600 text-sm">View Details →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">
            Why Buy {categoryData.name} from Phantom in {cityData.name}?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">✅ Local Service Team</h3>
              <p className="text-gray-600">
                Dedicated service engineers based in {cityData.name} for quick response and support.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">✅ Competitive Pricing</h3>
              <p className="text-gray-600">
                Best prices on {categoryData.name.toLowerCase()} in {cityData.state} with flexible payment options.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">✅ Complete Installation</h3>
              <p className="text-gray-600">
                Professional site planning, installation, and commissioning included.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">✅ AMC Available</h3>
              <p className="text-gray-600">
                Comprehensive Annual Maintenance Contracts with quick breakdown support.
              </p>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{categoryData.name} Services in {cityData.name}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/service-pages/amc-cmc-services-packages-for-ct-scanner-machines" className="border rounded-lg p-6 hover:border-blue-500">
              <h3 className="font-bold mb-2">AMC / CMC</h3>
              <p className="text-gray-600 text-sm">Annual maintenance contracts for {categoryData.name}</p>
            </Link>
            <Link href="/service-pages/medical-imaging-radiology-equipment-installation" className="border rounded-lg p-6 hover:border-blue-500">
              <h3 className="font-bold mb-2">Installation</h3>
              <p className="text-gray-600 text-sm">Professional installation services in {cityData.name}</p>
            </Link>
            <Link href="/service-pages/mri-deinstallation-and-reinstallation-relocation" className="border rounded-lg p-6 hover:border-blue-500">
              <h3 className="font-bold mb-2">Relocation</h3>
              <p className="text-gray-600 text-sm">Equipment shifting and reinstallation</p>
            </Link>
          </div>
        </section>

        {/* Other Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Other Equipment in {cityData.name}</h2>
          <div className="flex flex-wrap gap-3">
            {productCategories
              .filter(cat => cat.slug !== category)
              .map((cat) => (
                <Link 
                  key={cat.slug}
                  href={`/locations/${city}/${cat.slug}`}
                  className="px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-100 transition"
                >
                  {cat.icon} {cat.name}
                </Link>
              ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-900 text-white p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Looking for {categoryData.name} in {cityData.name}?
              </h2>
              <p className="opacity-90 mb-4">
                Contact our {cityData.name} team for best prices and immediate availability.
              </p>
              <div className="space-y-2">
                <p>📞 {cityData.phone}</p>
                <p>✉️ {cityData.email}</p>
                <p>📍 {cityData.address.line1}, {cityData.name}</p>
              </div>
            </div>
            <div className="text-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg inline-block hover:bg-gray-100"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export async function generateStaticParams(): Promise<{ city: string; category: string }[]> {
  const params: { city: string; category: string }[] = [];
  const cities = getAllCitySlugs();
  const categories = productCategories.map(c => c.slug);
  
  for (const city of cities) {
    for (const category of categories) {
      params.push({ city, category });
    }
  }
  return params;
}
