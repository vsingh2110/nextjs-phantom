import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/features/ContactForm';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import FAQSection from '@/components/ui/FAQSection';

export const metadata: Metadata = {
  title: 'Medical Imaging Spare Parts & Inventory - Phantom Healthcare',
  description: 'Largest inventory of genuine spare parts for MRI, CT, PET-CT, Cath Lab machines. 5000+ SKUs in stock. Same-day dispatch across India. RF coils, gradient coils, detectors, boards & more.',
  
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/spare-parts-and-inventory',
    siteName: 'Phantom Healthcare',
    title: 'Medical Imaging Spare Parts & Inventory - Phantom Healthcare',
    description: 'Largest inventory of genuine spare parts for MRI, CT, PET-CT, Cath Lab machines. 5000+ SKUs in stock. Same-day dispatch.',
    images: [{
      url: '/images/phantom-building.jpg',
      width: 1200,
      height: 630,
      alt: 'Phantom Healthcare Spare Parts Warehouse'
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Imaging Spare Parts & Inventory - Phantom Healthcare',
    description: 'Largest inventory of genuine spare parts for MRI, CT, PET-CT, Cath Lab machines. 5000+ SKUs in stock.',
    images: ['/images/phantom-building.jpg'],
  },
  
  alternates: {
    canonical: 'https://phantomhealthcare.com/spare-parts-and-inventory',
  },
};

const sparePartsFaqs = [
  {
    question: "What types of spare parts do you stock?",
    answer: "We maintain a comprehensive inventory of over 5000+ SKUs covering all major medical imaging modalities - MRI (RF coils, gradient coils, patient tables), CT (X-ray tubes, detectors, slip rings), PET-CT (detectors, electronics), Cath Lab (image intensifiers, X-ray tubes, generators), and general components like monitors, computers, UPS systems, and cables."
  },
  {
    question: "Are the spare parts genuine or compatible?",
    answer: "We stock both OEM (Original Equipment Manufacturer) genuine parts and high-quality compatible alternatives. All parts are thoroughly tested and come with quality assurance. We clearly specify the part type (OEM/compatible) in product descriptions and can help you choose based on your budget and requirements."
  },
  {
    question: "How quickly can you dispatch parts?",
    answer: "Parts in stock are dispatched the same day or next business day. We ship via reliable couriers (Blue Dart, DHL, FedEx) to ensure quick delivery across India. International shipping is also available. Tracking details are provided immediately upon dispatch."
  },
  {
    question: "Do you provide warranty on spare parts?",
    answer: "Yes! All our spare parts come with warranty ranging from 90 days to 1 year depending on the part type and manufacturer. OEM parts typically carry longer warranties. We also offer replacement/refund for DOA (Dead on Arrival) parts within 7 days of delivery."
  },
  {
    question: "Can I return a part if it doesn't fit?",
    answer: "Yes, we have a 7-day return policy for unused parts in original packaging. If you ordered the wrong part or it doesn't fit your system, you can return it for a refund or exchange. Return shipping charges may apply unless the error was from our side."
  },
  {
    question: "Do you provide installation support?",
    answer: "While most spare parts are field-replaceable, we offer technical guidance over phone/email. For complex installations (like RF coils, gradient coils, X-ray tubes), we can arrange field engineers on chargeable basis. Installation manuals and wiring diagrams are provided where available."
  }
];

export default function SparePartsPage() {
  return (
    <>
      {/* JSON-LD Breadcrumb */}
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://phantomhealthcare.com' },
        { name: 'Spare Parts & Inventory', url: 'https://phantomhealthcare.com/spare-parts-and-inventory' }
      ]} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-[#255a0a] text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="mx-2" aria-hidden="true">›</span></li>
              <li aria-current="page" className="text-white">Spare Parts & Inventory</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                India's Largest Medical Imaging Spare Parts Inventory
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
                Over 5000+ SKUs in stock! Genuine OEM and compatible spare parts for MRI, CT, PET-CT, Cath Lab, and all medical imaging equipment. Same-day dispatch. Pan-India delivery.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://spareparts.phantomhealthcare.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-[#59913d] hover:bg-[#255a0a] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Browse Online Store
                  <i className="fas fa-external-link-alt ml-2"></i>
                </a>
                <a 
                  href="#inquiry-form" 
                  className="inline-flex items-center px-8 py-4 bg-white text-[#59913d] font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gray-100"
                >
                  Request Quote
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/phantom-building.jpg"
                alt="Phantom Healthcare Spare Parts Warehouse"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#59913d] mb-2">5000+</div>
              <div className="text-gray-600 font-medium">SKUs in Stock</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#59913d] mb-2">14+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#59913d] mb-2">Same Day</div>
              <div className="text-gray-600 font-medium">Dispatch</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#59913d] mb-2">Pan-India</div>
              <div className="text-gray-600 font-medium">Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Features */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              State-of-the-Art Warehouse Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our climate-controlled warehouses across India maintain optimal conditions for sensitive medical equipment parts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center md:text-left">
              <div className="w-16 h-16 bg-[#59913d] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-warehouse text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple Locations</h3>
              <p className="text-gray-700 leading-relaxed">
                Warehouses in Faridabad (Delhi NCR), Mumbai, Chennai, and Kolkata ensuring quick delivery across India.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center md:text-left">
              <div className="w-16 h-16 bg-[#59913d] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-temperature-low text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Climate Controlled</h3>
              <p className="text-gray-700 leading-relaxed">
                Temperature and humidity controlled storage to preserve electronic components and sensitive parts.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center md:text-left">
              <div className="w-16 h-16 bg-[#59913d] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-barcode text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inventory Management</h3>
              <p className="text-gray-700 leading-relaxed">
                Advanced tracking system with barcodes and serial number tracking for all parts. Real-time stock updates.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center md:text-left">
              <div className="w-16 h-16 bg-[#59913d] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-shield-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Tested</h3>
              <p className="text-gray-700 leading-relaxed">
                All parts undergo quality inspection and testing before storage. Defective parts are segregated immediately.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center md:text-left">
              <div className="w-16 h-16 bg-[#59913d] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-boxes text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Organized Storage</h3>
              <p className="text-gray-700 leading-relaxed">
                Systematic categorization by equipment type, manufacturer, and part number for quick retrieval.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center md:text-left">
              <div className="w-16 h-16 bg-[#59913d] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-shipping-fast text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Logistics</h3>
              <p className="text-gray-700 leading-relaxed">
                Partnerships with Blue Dart, DHL, FedEx for reliable express shipping. Same-day dispatch for in-stock items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parts Categories */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Spare Parts Catalog
            </h2>
            <p className="text-lg text-gray-600">
              We stock parts for all major medical imaging equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* MRI Parts */}
            <div className="bg-gradient-to-br from-[#59913d]/10 to-[#255a0a]/10 p-8 rounded-xl border border-[#59913d]/20">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-[#59913d] rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-circle-notch text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">MRI Spare Parts</h3>
              </div>
              <ul className="grid grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>RF Coils (Head, Body, Knee)</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Gradient Coils</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Patient Tables</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Cryogen System Parts</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>RF Amplifiers</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Shim Systems</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Control Boards</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Power Supplies</span></li>
              </ul>
            </div>

            {/* CT Parts */}
            <div className="bg-gradient-to-br from-[#59913d]/10 to-[#255a0a]/10 p-8 rounded-xl border border-[#59913d]/20">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-[#59913d] rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-procedures text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">CT Scanner Parts</h3>
              </div>
              <ul className="grid grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>X-Ray Tubes</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Detectors (Solid State)</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Slip Rings</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Gantry Motors</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>High Voltage Generators</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Patient Tables</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Cooling Systems</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>DAS Boards</span></li>
              </ul>
            </div>

            {/* PET-CT Parts */}
            <div className="bg-gradient-to-br from-[#59913d]/10 to-[#255a0a]/10 p-8 rounded-xl border border-[#59913d]/20">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-[#59913d] rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-atom text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">PET-CT Parts</h3>
              </div>
              <ul className="grid grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>PET Detectors</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>PMT Modules</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Scintillation Crystals</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>CT Components</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Gantry Parts</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Electronics Boards</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Workstations</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Software Licenses</span></li>
              </ul>
            </div>

            {/* Cath Lab Parts */}
            <div className="bg-gradient-to-br from-[#59913d]/10 to-[#255a0a]/10 p-8 rounded-xl border border-[#59913d]/20">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-[#59913d] rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-heartbeat text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">Cath Lab Parts</h3>
              </div>
              <ul className="grid grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Image Intensifiers</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Flat Panel Detectors</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>C-arm Components</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>X-Ray Tubes</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>HV Generators</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Patient Tables</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Monitors & Displays</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-[#59913d] mr-2 mt-1 flex-shrink-0"></i><span>Control Panels</span></li>
              </ul>
            </div>
          </div>

          {/* General Parts */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Universal Components</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <i className="fas fa-desktop text-3xl text-[#59913d] mb-2"></i>
                <p className="text-sm font-semibold text-gray-700">Monitors</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <i className="fas fa-laptop text-3xl text-[#59913d] mb-2"></i>
                <p className="text-sm font-semibold text-gray-700">Computers</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <i className="fas fa-battery-full text-3xl text-[#59913d] mb-2"></i>
                <p className="text-sm font-semibold text-gray-700">UPS Systems</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <i className="fas fa-plug text-3xl text-[#59913d] mb-2"></i>
                <p className="text-sm font-semibold text-gray-700">Cables</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <i className="fas fa-fan text-3xl text-[#59913d] mb-2"></i>
                <p className="text-sm font-semibold text-gray-700">Cooling Fans</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <i className="fas fa-filter text-3xl text-[#59913d] mb-2"></i>
                <p className="text-sm font-semibold text-gray-700">Filters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#59913d] to-[#255a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <i className="fas fa-shopping-cart text-6xl mb-6"></i>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Shop Online 24/7
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Browse our complete catalog online at our dedicated e-commerce portal. Search by equipment type, manufacturer, part number, or description. Real-time stock availability. Secure online payment. Order tracking.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://spareparts.phantomhealthcare.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#59913d] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Visit Online Store
                <i className="fas fa-external-link-alt ml-2"></i>
              </a>
              <a 
                href="#inquiry-form" 
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#59913d] transition-all duration-300"
              >
                Request Bulk Quote
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-200">
              <i className="fas fa-phone mr-2"></i>
              Need help finding a part? Call us: <a href="tel:+919899963601" className="font-bold hover:underline">+91-98999-63601</a>
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry-form" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-600">
              Send us your part requirement and we'll source it for you
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <ContactForm 
              formId="sparePartsInquiry"
              className="space-y-6"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Or contact us directly:</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:+919899963601" className="flex items-center text-[#59913d] hover:text-[#255a0a] font-semibold">
                <i className="fas fa-phone mr-2"></i>
                +91-98999-63601
              </a>
              <a href="tel:+918384037073" className="flex items-center text-[#59913d] hover:text-[#255a0a] font-semibold">
                <i className="fas fa-phone mr-2"></i>
                +91-83840-37073
              </a>
              <a href="mailto:spareparts@phantomhealthcare.com" className="flex items-center text-[#59913d] hover:text-[#255a0a] font-semibold">
                <i className="fas fa-envelope mr-2"></i>
                spareparts@phantomhealthcare.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Common questions about our spare parts inventory and services"
            faqs={sparePartsFaqs}
          />
        </div>
      </section>

      {/* Benefits Summary */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <i className="fas fa-award text-4xl text-[#59913d] mb-3"></i>
              <h3 className="font-bold text-gray-900 mb-1">Quality Assured</h3>
              <p className="text-sm text-gray-600">All parts tested</p>
            </div>
            <div>
              <i className="fas fa-shipping-fast text-4xl text-[#59913d] mb-3"></i>
              <h3 className="font-bold text-gray-900 mb-1">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Same-day dispatch</p>
            </div>
            <div>
              <i className="fas fa-certificate text-4xl text-[#59913d] mb-3"></i>
              <h3 className="font-bold text-gray-900 mb-1">Warranty Included</h3>
              <p className="text-sm text-gray-600">90 days to 1 year</p>
            </div>
            <div>
              <i className="fas fa-headset text-4xl text-[#59913d] mb-3"></i>
              <h3 className="font-bold text-gray-900 mb-1">Expert Support</h3>
              <p className="text-sm text-gray-600">Technical assistance</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
