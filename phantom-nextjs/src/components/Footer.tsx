'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#33a7ef] via-[#259ae1] to-[#133d5a] text-white pt-12">
      {/* Footer Box Wrap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
        {/* Company Info */}
        <div className="w-full md:w-1/3 p-4">
          <Link href="/">
            <Image src="/images/white-logo.png" alt="Phantom Healthcare" width={180} height={55} className="mb-4 mx-auto" unoptimized />
          </Link>
          <p className="font-semibold mb-2 leading-tight text-center">Phantom Healthcare IND Private Limited</p>
          <p className="text-xs leading-relaxed mb-4 text-center">Plot No. 51, Sector 27C, Near NHPC Chowk, Main Mathura Road, Faridabad, Haryana – 121003 (INDIA)</p>
          <ul className="space-y-1 text-xs text-center">
            <li><a href="tel:+919899963601" className="hover:underline">+91&nbsp;9899963601</a></li>
            <li><a href="tel:+918384037073" className="hover:underline">+91&nbsp;8384037073</a></li>
            <li><a href="tel:+911294312423" className="hover:underline">+91&nbsp;129&nbsp;4312423</a></li>
            <li><a href="mailto:info@phantomhealthcare.com" className="hover:underline">info@phantomhealthcare.com</a></li>
            <li><a href="mailto:biz@phantomhealthcare.com" className="hover:underline">biz@phantomhealthcare.com</a></li>
          </ul>
        </div>

        {/* Useful Links + Services */}
        <div className="w-full md:w-1/3 p-4">
          <h4 className="font-semibold text-lg mb-2 text-center">Useful Links</h4>
          <ul className="space-y-1 text-xs tracking-tight text-center">
            {['1.5T MRI Scanner Machines','3.0T MRI Scanner Machines','Siemens MRI Scanner Machines','GE MRI Scanner Machines','CT Scanner Machines','PET-CT Scanner Machines','News and Events','Blogs'].map((item)=> (
              <li key={item}><Link href="#" className="hover:underline">{item}</Link></li>
            ))}
          </ul>

          <h4 className="font-semibold text-lg mt-4 mb-2 text-center">Our Services</h4>
          <ul className="space-y-1 text-xs tracking-tight text-center">
            {['CMC/AMC Packages For CT','CMC/AMC Packages For MRI','Equipment Installation','Site Planning & Construction','MRI Helium Filling','MRI De-Installation & Re-Installation'].map(s=>(<li key={s}><Link href="#" className="hover:underline">{s}</Link></li>))}
          </ul>
        </div>

        {/* Map & Social */}
        <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
          {/* Map container - vertical rectangle like original site */}
          <div className="w-full md:w-64 h-80 rounded-lg overflow-hidden shadow-lg mb-4 relative">
            {/* Iframe positioned to show marker in center - using negative margins to shift view */}
            <iframe
              title="map"
              /* Using exact iframe URL from original website - shows company name + correct location */
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23594.600297204677!2d77.29099839249344!3d28.46875377374462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce746b47731c5%3A0x696a695f7e4c3ded!2sPhantom%20Healthcare%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1663418936010!5m2!1sen!2sin"
              loading="lazy"
              className="absolute w-[150%] h-[150%] border-0"
              style={{
                left: '-25%',   /* Moderate left shift */
                top: '-20%',    /* Moderate up shift to show marker and title */
                transform: 'scale(1)'
              }}
            ></iframe>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            {[
              {href:'https://twitter.com/Phantomhealthc', icon:'fa-twitter'},
              {href:'https://wa.me/919899963601', icon:'fa-whatsapp'},
              {href:'https://www.youtube.com/@phantomhealthcare', icon:'fa-youtube'},
              {href:'https://www.instagram.com/phantomhealthcare/', icon:'fa-instagram'},
              {href:'https://www.facebook.com/phantom.healthcare.ind', icon:'fa-facebook'},
              {href:'https://www.pinterest.com/phantomhealthcare/', icon:'fa-pinterest'},
              {href:'https://in.linkedin.com/company/phantom-healthcare-ind-private-limited-company', icon:'fa-linkedin'}
            ].map(s=>(
              <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 flex items-center justify-center text-[0.7rem]">
                <i className={`fa ${s.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Regional Offices */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm lg:text-base px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {[
          {region:'India & Sub-Continent', flag:'/images/india-flag.jpg', company:'Phantom Healthcare IND Private Limited', address:'Faridabad, Haryana – 121003 (INDIA)', phones:['+91 9899963601'], emails:['info@phantomhealthcare.com']},
          {region:'USA & Western', flag:'/images/usa-map.jpg', company:'Phantom Healthcare US LLC', address:'Naperville, IL (USA)', phones:['+1 630 720 6801'], emails:['info@phantomhealthcare.com']},
          {region:'Gulf-Arab & African', flag:'/images/uae-flag.jpg', company:'Phantom Healthcare AE FZC', address:'Sharjah (UAE)', phones:['+971 522 208 819'], emails:['sachin.rawat@phantomhealthcare.com']}
        ].map(off=>(
          <div key={off.region} className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Image src={off.flag} alt="flag" width={24} height={16} className="rounded-sm" unoptimized />
              <p className="font-semibold">{off.region}</p>
            </div>
            <p className="font-semibold leading-tight mb-1">{off.company}</p>
            <p className="leading-tight mb-2">{off.address}</p>
            {off.phones.map(p=>(<p key={p}><a href={`tel:${p.replace(/[^\d+]/g,'')}`} className="hover:underline">{p}</a></p>))}
            {off.emails.map(e=>(<p key={e}><a href={`mailto:${e}`} className="hover:underline">{e}</a></p>))}
          </div>
        ))}
      </div>

      {/* Footer Menu */}
      <div className="footer-menu mt-4">
        <div className="footer-menu-wrap container mx-auto flex justify-center space-x-4 text-sm">
          <div className="footer-menu-box"><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></div>
          <div className="footer-menu-box"><Link href="/faqs" className="hover:underline">FAQs</Link></div>
          <div className="footer-menu-box"><Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></div>
          <div className="footer-menu-box"><Link href="/sitemap" className="hover:underline">Sitemap</Link></div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-4 py-4 bg-black bg-opacity-20 text-center text-xs">
        © 2011-2024&nbsp;Phantom Healthcare
      </div>
    </footer>
  )
} 