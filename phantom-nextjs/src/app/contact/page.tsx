import ContactForm from '@/components/features/ContactForm';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Phantom Healthcare | MRI, CT Scanner Sales & Service',
  description: 'Contact Phantom Healthcare for MRI, CT Scanner, PET-CT, Cath-Lab equipment sales, service, and spare parts. Offices in India, USA, and UAE.',
  keywords: 'contact phantom healthcare, medical imaging equipment, MRI service India, CT scanner support',
};

export default function Contact() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="relative w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with our team for all your medical imaging equipment needs
          </p>
        </div>
      </section>

      {/* Contact Grid Section - Visit Us + Form */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-gray-50">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            
            {/* Visit Us - Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-3">
                <span className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-location-dot text-primary-600 text-lg sm:text-xl"></i>
                </span>
                Visit Us
              </h2>
              
              <div className="space-y-5 sm:space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-map-marker-alt text-primary-600 text-base sm:text-lg"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">PHANTOM HEALTHCARE</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Plot No. 51, Sector 27C, Near NHPC Chowk,<br />
                      Main Mathura Road, Faridabad, Haryana 121003 (INDIA)
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-phone text-primary-600 text-base sm:text-lg"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Phone</h3>
                    <div className="text-gray-600 text-sm sm:text-base space-y-1">
                      <p><a href="tel:+911294312423" className="hover:text-primary-600 transition-colors">+91 129 4312423</a></p>
                      <p>
                        <a href="tel:+918545815483" className="hover:text-primary-600 transition-colors">+91 8545815483</a>,{' '}
                        <a href="tel:+919899963601" className="hover:text-primary-600 transition-colors">+91 9899963601</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-briefcase text-secondary-600 text-base sm:text-lg"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Business Enquiry</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      <a href="mailto:biz@phantomhealthcare.com" className="hover:text-primary-600 transition-colors break-all">
                        biz@phantomhealthcare.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* HR Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-user-plus text-secondary-600 text-base sm:text-lg"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Recruitment</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      <a href="mailto:hr@phantomhealthcare.com" className="hover:text-primary-600 transition-colors break-all">
                        hr@phantomhealthcare.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* General Info */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-circle-info text-primary-600 text-base sm:text-lg"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">General Info</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      <a href="mailto:info@phantomhealthcare.com" className="hover:text-primary-600 transition-colors break-all">
                        info@phantomhealthcare.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <a href="https://wa.me/+919899963601" target="_blank" rel="noopener noreferrer" 
                     className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
                     aria-label="WhatsApp">
                    <i className="fa-brands fa-whatsapp text-sm sm:text-base md:text-lg"></i>
                  </a>
                  <a href="https://www.facebook.com/phantom.healthcare.ind" target="_blank" rel="noopener noreferrer" 
                     className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
                     aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f text-sm sm:text-base md:text-lg"></i>
                  </a>
                  <a href="https://www.instagram.com/phantomhealthcare/" target="_blank" rel="noopener noreferrer" 
                     className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
                     aria-label="Instagram">
                    <i className="fa-brands fa-instagram text-sm sm:text-base md:text-lg"></i>
                  </a>
                  <a href="https://in.linkedin.com/company/phantom-healthcare-ind-private-limited-company" target="_blank" rel="noopener noreferrer" 
                     className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
                     aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin-in text-sm sm:text-base md:text-lg"></i>
                  </a>
                  <a href="https://www.youtube.com/@phantomhealthcare" target="_blank" rel="noopener noreferrer" 
                     className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
                     aria-label="YouTube">
                    <i className="fa-brands fa-youtube text-sm sm:text-base md:text-lg"></i>
                  </a>
                  <a href="https://twitter.com/Phantomhealthc" target="_blank" rel="noopener noreferrer" 
                     className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-sky-500 hover:bg-sky-600 text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
                     aria-label="Twitter/X">
                    <i className="fa-brands fa-twitter text-sm sm:text-base md:text-lg"></i>
                  </a>
                  <a href="https://goo.gl/maps/2fdRZT8hEBVK4cni9" target="_blank" rel="noopener noreferrer" 
                     className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
                     aria-label="Google Maps">
                    <i className="fa-solid fa-location-dot text-sm sm:text-base md:text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 order-1 lg:order-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-3">
                <span className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-paper-plane text-secondary-600 text-lg sm:text-xl"></i>
                </span>
                Send Enquiry
              </h2>
              <ContactForm formId="contactPageForm" />
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices Section with World Map Background */}
      <section 
        className="py-10 sm:py-14 md:py-16 lg:py-20 relative"
        style={{
          backgroundImage: "url('/images/world-map-3.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#e5e7eb' // gray-200 as fallback
        }}
      >
        <div className="relative w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-10 md:mb-12">
            Our Global Presence
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* India Office */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-md flex-shrink-0 border-2 border-gray-100">
                    <Image 
                      src="/images/india-flag.jpg" 
                      alt="India" 
                      width={56} 
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">India & Sub-Continent</h3>
                    <p className="text-xs sm:text-sm text-primary-600 font-medium">Headquarters</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Phantom Healthcare IND Pvt Ltd</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Plot No. 51, Sector 27C, Near NHPC Chowk,<br />
                    Main Mathura Road, Faridabad,<br />
                    Haryana – 121003 (INDIA)
                  </p>
                </div>
                
                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="flex items-center gap-2 text-gray-600">
                    <i className="fa-solid fa-phone text-primary-500 w-4"></i>
                    <a href="tel:+919899963601" className="hover:text-primary-600 transition-colors">+91 9899963601</a>
                    <span className="text-gray-400">|</span>
                    <a href="tel:+911294312423" className="hover:text-primary-600 transition-colors">+91 129 4312423</a>
                  </p>
                  <p className="flex items-center gap-2 text-gray-600">
                    <i className="fa-solid fa-envelope text-primary-500 w-4"></i>
                    <a href="mailto:info@phantomhealthcare.com" className="hover:text-primary-600 transition-colors break-all">info@phantomhealthcare.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* USA Office */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-red-600 via-white to-blue-700"></div>
              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-md flex-shrink-0 border-2 border-gray-100">
                    <Image 
                      src="/images/usa-map.jpg" 
                      alt="USA" 
                      width={56} 
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">USA & Western Region</h3>
                    <p className="text-xs sm:text-sm text-primary-600 font-medium">North America</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Phantom Healthcare US LLC</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    2501 Chatham Rd, Suite STE R,<br />
                    Springfield, Illinois (62704),<br />
                    United States of America (USA)
                  </p>
                </div>
                
                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="flex items-center gap-2 text-gray-600">
                    <i className="fa-solid fa-phone text-primary-500 w-4"></i>
                    <a href="tel:+16307206801" className="hover:text-primary-600 transition-colors">+1 630 720 6801</a>
                  </p>
                  <p className="flex items-center gap-2 text-gray-600">
                    <i className="fa-solid fa-envelope text-primary-500 w-4"></i>
                    <a href="mailto:biz@phantomhealthcare.com" className="hover:text-primary-600 transition-colors break-all">biz@phantomhealthcare.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* UAE Office */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 md:col-span-2 lg:col-span-1">
              <div className="h-2 bg-gradient-to-r from-green-600 via-white to-red-600"></div>
              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-md flex-shrink-0 border-2 border-gray-100">
                    <Image 
                      src="/images/uae-flag.jpg" 
                      alt="UAE" 
                      width={56} 
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Gulf-Arab & Africa</h3>
                    <p className="text-xs sm:text-sm text-primary-600 font-medium">Middle East</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Phantom Healthcare AE FZC</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    LV 63-C, Al Hamriyah Freezone,<br />
                    Sharjah,<br />
                    United Arab Emirates (UAE)
                  </p>
                </div>
                
                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="flex items-center gap-2 text-gray-600">
                    <i className="fa-solid fa-phone text-primary-500 w-4"></i>
                    <a href="tel:+971522208819" className="hover:text-primary-600 transition-colors">+971 522 208 819</a>
                    <span className="text-gray-400">|</span>
                    <a href="tel:+971556357700" className="hover:text-primary-600 transition-colors">+971 556 357 700</a>
                  </p>
                  <p className="flex items-center gap-2 text-gray-600">
                    <i className="fa-solid fa-envelope text-primary-500 w-4"></i>
                    <a href="mailto:sachin.rawat@phantomhealthcare.com" className="hover:text-primary-600 transition-colors break-all text-[10px] sm:text-xs md:text-sm">sachin.rawat@phantomhealthcare.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section - Simple box with margins */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
          <div className="h-[300px] sm:h-[350px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23594.600297204677!2d77.29099839249344!3d28.46875377374462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce746b47731c5%3A0x696a695f7e4c3ded!2sPhantom%20Healthcare%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1663418936010!5m2!1sen!2sin"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Phantom Healthcare Location"
            />
          </div>
        </div>
      </section>

    </main>
  );
} 