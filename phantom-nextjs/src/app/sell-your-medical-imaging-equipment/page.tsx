import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/features/ContactForm';
import { BreadcrumbJsonLd, SellEquipmentSpeakableJsonLd, SellEquipmentFAQJsonLd } from '@/components/seo/JsonLd';
import FAQSection from '@/components/ui/FAQSection';

export const metadata: Metadata = {
  title: 'Sell Medical Imaging Equipment - Phantom Healthcare',
  description: 'Get best value for used MRI, CT, PET-CT, Cath Lab. Quick payment in 3-5 days, free evaluation, nationwide pickup. Sell to Phantom Healthcare.',
  
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/sell-your-medical-imaging-equipment',
    siteName: 'Phantom Healthcare',
    title: 'Sell Your Medical Imaging Equipment - Phantom Healthcare',
    description: 'Get the best value for your used MRI, CT, PET-CT, Cath Lab machines. Quick cash payment, free evaluation, nationwide pickup.',
    images: [{
      url: '/images/phantom-building.jpg',
      width: 1200,
      height: 630,
      alt: 'Phantom Healthcare - Sell Your Equipment'
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Sell Your Medical Imaging Equipment - Phantom Healthcare',
    description: 'Get the best value for your used MRI, CT, PET-CT, Cath Lab machines. Quick cash payment, free evaluation.',
    images: ['/images/phantom-building.jpg'],
  },
  
  alternates: {
    canonical: 'https://phantomhealthcare.com/sell-your-medical-imaging-equipment',
  },
};

const sellFaqs = [
  {
    question: "What types of medical imaging equipment do you purchase?",
    answer: "We purchase all major medical imaging equipment including MRI scanners (1.5T and 3.0T), CT scanners (16-slice to 128-slice), PET-CT systems, Cath Labs, Gamma Cameras, and Bone Densitometers (DEXA). We accept equipment from leading manufacturers like GE, Siemens, Philips, and Toshiba."
  },
  {
    question: "How quickly can I receive payment?",
    answer: "Once we inspect and agree on the price, payment is processed within 3-5 business days. We offer multiple payment options including bank transfer, cheque, or cash (for smaller amounts) as per your preference."
  },
  {
    question: "Do you provide de-installation services?",
    answer: "Yes, absolutely! We provide complete de-installation services at no extra cost. Our experienced engineers will safely disconnect, dismantle, and remove the equipment from your facility. We handle all aspects including cryogen recovery for MRI systems."
  },
  {
    question: "What condition should my equipment be in?",
    answer: "We purchase equipment in various conditions - working, non-working, or partially functional. However, working equipment with proper maintenance history and complete documentation fetches better valuations. Even non-functional equipment has value for spare parts."
  },
  {
    question: "How do you determine the valuation?",
    answer: "Our valuation is based on multiple factors: equipment age, model, manufacturer, working condition, maintenance history, market demand, and current spare parts value. We provide transparent, fair market valuations backed by our 14+ years of industry experience."
  },
  {
    question: "Do you purchase equipment from outside India?",
    answer: "Yes, we purchase equipment from hospitals and imaging centers worldwide, including UAE, USA, UK, and other countries. We handle all logistics, customs clearance, and international shipping documentation."
  }
];

export default function SellYourEquipmentPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://phantomhealthcare.com' },
        { name: 'Sell Your Equipment', url: 'https://phantomhealthcare.com/sell-your-medical-imaging-equipment' }
      ]} />
      <SellEquipmentSpeakableJsonLd />
      <SellEquipmentFAQJsonLd />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-[#255a0a] text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="mx-2" aria-hidden="true">›</span></li>
              <li aria-current="page" className="text-white">Sell Your Equipment</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Sell Your Medical Imaging Equipment for Top Value
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
                Upgrading your imaging center? Closing your facility? Get instant cash for your used MRI, CT, PET-CT, Cath Lab, and other medical equipment. Fair prices, quick payment, hassle-free process.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#sell-form" 
                  className="inline-flex items-center px-8 py-4 bg-[#59913d] hover:bg-[#255a0a] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Free Valuation
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
                <a 
                  href="tel:+919899963601" 
                  className="inline-flex items-center px-8 py-4 bg-white text-[#59913d] font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gray-100"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call Now
                </a>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/phantom-building.jpg"
                alt="Sell Medical Equipment to Phantom Healthcare"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Sell to Us Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Sell to Phantom Healthcare?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With 14+ years in the medical imaging industry, we offer the most competitive prices and professional service for your equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-[#59913d]/10 to-[#255a0a]/10 p-8 rounded-xl border border-[#59913d]/20 hover:shadow-lg transition-shadow text-center md:text-left">
              <div className="w-16 h-16 bg-[#59913d] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-dollar-sign text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Market Price</h3>
              <p className="text-gray-700 leading-relaxed">
                We offer competitive, fair market valuations based on current demand, equipment condition, and spare parts value. No hidden deductions.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-[#59913d]/10 to-[#255a0a]/10 p-8 rounded-xl border border-[#59913d]/20 hover:shadow-lg transition-shadow text-center md:text-left">
              <div className="w-16 h-16 bg-[#59913d] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-clock text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Payment</h3>
              <p className="text-gray-700 leading-relaxed">
                Receive payment within 3-5 business days after inspection and agreement. Multiple payment options available for your convenience.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-[#59913d]/10 to-[#255a0a]/10 p-8 rounded-xl border border-[#59913d]/20 hover:shadow-lg transition-shadow text-center md:text-left">
              <div className="w-16 h-16 bg-[#59913d] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-truck text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free De-installation</h3>
              <p className="text-gray-700 leading-relaxed">
                Our expert engineers handle complete de-installation, dismantling, and removal at no extra cost. Includes cryogen recovery for MRI systems.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gradient-to-br from-[#59913d]/10 to-[#255a0a]/10 p-8 rounded-xl border border-[#59913d]/20 hover:shadow-lg transition-shadow text-center md:text-left">
              <div className="w-16 h-16 bg-[#59913d] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-shield-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Confidential & Secure</h3>
              <p className="text-gray-700 leading-relaxed">
                All transactions are handled with complete confidentiality. We sign NDAs if required and ensure secure data wiping from equipment.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gradient-to-br from-[#59913d]/10 to-[#255a0a]/10 p-8 rounded-xl border border-[#59913d]/20 hover:shadow-lg transition-shadow text-center md:text-left">
              <div className="w-16 h-16 bg-[#59913d] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-file-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Documentation</h3>
              <p className="text-gray-700 leading-relaxed">
                We handle all paperwork including sale agreements, transfer documentation, and customs clearance for international transactions.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gradient-to-br from-[#59913d]/10 to-[#255a0a]/10 p-8 rounded-xl border border-[#59913d]/20 hover:shadow-lg transition-shadow text-center md:text-left">
              <div className="w-16 h-16 bg-[#59913d] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-globe text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pan-India Presence</h3>
              <p className="text-gray-700 leading-relaxed">
                With offices in Faridabad, Mumbai, Chennai, and Kolkata, we provide quick on-site inspections anywhere in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment We Purchase Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Equipment We Purchase
            </h2>
            <p className="text-lg text-gray-600">
              We buy all types of medical imaging equipment from leading manufacturers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* MRI */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl text-[#59913d] mb-4">
                <i className="fas fa-circle-notch"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">MRI Scanners</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• 1.5T & 3.0T Systems</li>
                <li>• GE, Siemens, Philips</li>
                <li>• All models & configurations</li>
              </ul>
            </div>

            {/* CT */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl text-[#59913d] mb-4">
                <i className="fas fa-procedures"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">CT Scanners</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• 16 to 128-slice systems</li>
                <li>• All major brands</li>
                <li>• Single & Dual source</li>
              </ul>
            </div>

            {/* PET-CT */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl text-[#59913d] mb-4">
                <i className="fas fa-atom"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">PET-CT Systems</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• All configurations</li>
                <li>• With or without CT</li>
                <li>• Complete or parts</li>
              </ul>
            </div>

            {/* Cath Lab */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl text-[#59913d] mb-4">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cath Labs</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Single & Bi-plane</li>
                <li>• C-arm systems</li>
                <li>• Flat panel detectors</li>
              </ul>
            </div>

            {/* Gamma Camera */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl text-[#59913d] mb-4">
                <i className="fas fa-radiation"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gamma Cameras</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• SPECT systems</li>
                <li>• Dual & Single head</li>
                <li>• All manufacturers</li>
              </ul>
            </div>

            {/* DEXA */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl text-[#59913d] mb-4">
                <i className="fas fa-bone"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bone Densitometers</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• DEXA systems</li>
                <li>• GE Lunar, Hologic</li>
                <li>• All models</li>
              </ul>
            </div>

            {/* Spare Parts */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl text-[#59913d] mb-4">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Spare Parts</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• RF coils, Gradient coils</li>
                <li>• Detectors, Tubes</li>
                <li>• Boards, Monitors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-lg text-gray-600">
              From initial contact to payment, we make selling your equipment hassle-free
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#59913d] to-[#255a0a] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-700">
                Fill out the form below or call us with equipment details. Provide make, model, year, and condition.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#59913d] to-[#255a0a] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inspection</h3>
              <p className="text-gray-700">
                Our expert engineer visits your site for physical inspection and testing. Usually within 48-72 hours.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#59913d] to-[#255a0a] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quotation</h3>
              <p className="text-gray-700">
                We provide a fair, transparent quote based on inspection. No hidden charges or surprise deductions.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#59913d] to-[#255a0a] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Payment & Pickup</h3>
              <p className="text-gray-700">
                Once agreed, we de-install, remove equipment, and process payment within 3-5 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="sell-form" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Free Equipment Valuation
            </h2>
            <p className="text-lg text-gray-600">
              Fill in the details below and our team will contact you within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <ContactForm 
              formId="sellEquipmentForm"
              className="space-y-6"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Or reach us directly:</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:+919899963601" className="flex items-center text-[#59913d] hover:text-[#255a0a] font-semibold">
                <i className="fas fa-phone mr-2"></i>
                +91-98999-63601
              </a>
              <a href="tel:+918384037073" className="flex items-center text-[#59913d] hover:text-[#255a0a] font-semibold">
                <i className="fas fa-phone mr-2"></i>
                +91-83840-37073
              </a>
              <a href="mailto:biz@phantomhealthcare.com" className="flex items-center text-[#59913d] hover:text-[#255a0a] font-semibold">
                <i className="fas fa-envelope mr-2"></i>
                biz@phantomhealthcare.com
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
            subtitle="Common questions about selling your medical imaging equipment"
            faqs={sellFaqs}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#59913d] to-[#255a0a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Sell Your Equipment?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Get the best value for your medical imaging equipment today. Quick, professional, hassle-free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#sell-form" 
              className="inline-flex items-center px-8 py-4 bg-white text-[#59913d] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Get Free Valuation
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
            <a 
              href="tel:+919899963601" 
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#59913d] transition-all duration-300"
            >
              <i className="fas fa-phone mr-2"></i>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
