'use client'

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      {/* World Map Section */}
      <section className="background-world-map">
        <div className="footer-country-address container">
          {/* USA & Western Region */}
          <div className="footer-box-country footer-box2-country">
            <h3>USA & Western Region</h3>
            <Image src="/images/usa-map.jpg" alt="USA Map" width={200} height={150} unoptimized />
            <p>
              <strong>Phantom Healthcare US LLC</strong><br />
              424, Fort Hill Drive, STE 105,<br />
              Naperville, Illinois(60540) ,United States of America (USA)
            </p>
            <div className="a-link-country">
              <a href="tel:+16307206801">+16307206801</a> <a href="tel:+919899963601">+919899963601</a>
              <a href="mailto:info@phantomhealthcare.com">info@phantomhealthcare.com</a>
              <a href="mailto:biz@phantomhealthcare.com">biz@phantomhealthcare.com</a>
            </div>
          </div>

          {/* Gulf-Arab & African Region */}
          <div className="footer-box-country footer-box2-country">
            <h3>Gulf-Arab & African Region</h3>
            <Image src="/images/uae-flag.jpg" alt="UAE Flag" width={200} height={150} unoptimized />
            <p>
              <strong>Phantom Healthcare AE FZC</strong> <br />
              LV 63-C, Al Hamriyah Freezone, Sharjah<br />
              United Arab Emirates(UAE)
            </p>
            <div className="a-link-country">
              <a href="tel:+971522208819">+971522208819</a> <a href="tel:+971556357700">+971556357700</a>
              <a href="mailto:sachin.rawat@phantomhealthcare.com">sachin.rawat@phantomhealthcare.com</a><br />
              <a href="mailto:info@phantomhealthcare.com">info@phantomhealthcare.com</a>
              <a href="mailto:biz@phantomhealthcare.com">biz@phantomhealthcare.com</a>
            </div>
          </div>

          {/* India & Sub-Continent Region */}
          <div className="footer-box-country footer-box1-country">
            <h3>India & Sub-Continent Region</h3>
            <Image src="/images/india-flag.jpg" alt="India Flag" width={200} height={150} unoptimized />
            <p>
              <strong>Phantom Healthcare IND Private Limited</strong> <br />
              Plot No. 51, Sector 27C, Near NHPC Chowk,<br />
              Main Mathura Road, Faridabad, Haryana – 121003 (INDIA)
            </p>
            <div className="a-link-country">
              <a href="tel:+919899963601">+919899963601</a> <a href="tel:+911294312423">+911294312423</a>
              <a href="mailto:info@phantomhealthcare.com">info@phantomhealthcare.com</a><br />
              <a href="mailto:biz@phantomhealthcare.com">biz@phantomhealthcare.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section className="footer">
        <div className="footer-box-wrap container">
          {/* Box 1 - Company Info */}
          <div className="footer-box footer-box1">
            <div className="footer-logo">
              <Link href="/">
                <Image src="/images/white-logo.png" alt="Phantom Healthcare" width={200} height={60} unoptimized />
              </Link>
            </div>
            <div className="footer-company-name">
              Phantom Healthcare IND Private Limited
            </div>
            <div className="phantom-address">
              Plot No. 51, Sector 27C, Near NHPC Chowk,<br />
              Main Mathura Road, Faridabad, Haryana – 121003 (INDIA)
            </div>
            <div className="phantom-contact">
              <ul>
                <li><a href="tel:+919899963601">+91 9899963601</a></li>
                <li><a href="tel:+918384037073">+91 8384037073</a></li>
                <li><a href="tel:+911294312423">+91 129 4312423</a></li>
                <li><a href="mailto:info@phantomhealthcare.com">info@phantomhealthcare.com</a></li>
                <li><a href="mailto:biz@phantomhealthcare.com">biz@phantomhealthcare.com</a></li>
              </ul>
            </div>
          </div>

          {/* Box 2 - Useful Links & Services */}
          <div className="footer-box footer-box2">
            <div className="footer-our-products">
              <div className="footer-our-products-heading">Useful Links</div>
              <ul>
                <li><Link href="/product-pages/mri-scanner-machines/1.5T-mri-scanner-machines.html">1.5T MRI Scanner Machines</Link></li>
                <li><Link href="/product-pages/mri-scanner-machines/3.0T-mri-scanner-machines.html">3.0T MRI Scanner Machines</Link></li>
                <li><Link href="/product-pages/refurbished-siemens-mri-scanner-machines.html">Siemens MRI Scanner Machines</Link></li>
                <li><Link href="/product-pages/refurbished-siemens-mri-scanner-machines.html">GE MRI Scanner Machines</Link></li>
                <li><Link href="/product-pages/refurbished-ct-scan-machines.html">CT Scanner Machines</Link></li>
                <li><Link href="/product-pages/refurbished-pet-ct-scanner-machines.html">PET-CT Scanner Machines</Link></li>
              </ul>
            </div>

            <div className="footer-our-services">
              <div className="footer-our-products-heading">Our Services</div>
              <ul>
                <li><Link href="/service-pages/amc-cmc-services-packages-for-ct-scanner-machines.html">CMC/AMC Service Packages For CT Scanners</Link></li>
                <li><Link href="/service-pages/amc-cmc-services-packages-fot-mri-scanner-machines.html">CMC/AMC Service Packages For MRI Scanners</Link></li>
                <li><Link href="/service-pages/medical-imaging-radiology-equipment-installation.html">Medical Imaging Radiology Equipment Installation</Link></li>
                <li><Link href="/service-pages/medical-imaging-radiology-site-planning-and-construction.html">Medical Imaging Radiology Site Planning and Construction</Link></li>
                <li><Link href="/service-pages/mri-helium-filling-services.html">MRI Helium Filling Services</Link></li>
                <li><Link href="/service-pages/mri-deinstallation-and-reinstallation-relocation.html">MRI De-Installation and Re-Installation</Link></li>
              </ul>
            </div>

            <div className="footer-refurbished-mri">
              <div className="footer-our-products-heading">More Products</div>
              <ul>
                <li><Link href="/product-pages/refurbished-cath-lab-machines.html">Cath Lab Machines</Link></li>
                <li><Link href="/product-pages/refurbished-bone-densitometer-dexa.html">Bone Desnsitometer-DEXA</Link></li>
                <li><Link href="/product-pages/refurbished-gamma-camera-spect-system-machine.html">Gamma Camera SPECT Machines</Link></li>
                <li><Link href="/product-pages/brand-new-ct-scan-machines.html">Brand New CT Scanner Machines</Link></li>
                <li><Link href="/events-and-news.html">News and Events</Link></li>
                <li><Link href="/sitemap.xml">Sitemap.xml</Link></li>
              </ul>
            </div>
          </div>

          {/* Box 3 - Map & Social */}
          <div className="footer-box footer-box3">
            <div className="map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23594.600297204677!2d77.29099839249344!3d28.46875377374462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce746b47731c5%3A0x696a695f7e4c3ded!2sPhantom%20Healthcare%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1663418936010!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="footer-social-icons">
              <ul className="footer-social">
                <li>
                  <a className="sociali-footer" href="https://twitter.com/Phantomhealthc" target="_blank" aria-label="Twitter">
                    <i className="fa fa-twitter fa-fw" title="Twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="sociali-footer" href="https://wa.me/+919899963601" target="_blank" aria-label="Whatsapp">
                    <i className="fa fa-whatsapp fa-fw" title="Whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a className="sociali-footer" href="https://www.youtube.com/@phantomhealthcare" target="_blank" aria-label="YouTube">
                    <i className="fa fa-youtube fa-fw" title="YouTube"></i>
                  </a>
                </li>
                <li>
                  <a className="sociali-footer" href="https://goo.gl/maps/2fdRZT8hEBVK4cni9" target="_blank" aria-label="Google Maps">
                    <i className="fa fa-street-view fa-fw" title="Google Maps"></i>
                  </a>
                </li>
                <li>
                  <a className="sociali-footer" href="https://www.instagram.com/phantomhealthcare/" target="_blank" aria-label="Instagram">
                    <i className="fa fa-instagram fa-fw" title="Instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="sociali-footer" href="https://www.facebook.com/phantom.healthcare.ind" target="_blank" aria-label="Facebook">
                    <i className="fa fa-facebook-square fa-fw" title="Facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="sociali-footer" href="https://www.pinterest.com/phantomhealthcare/" target="_blank" aria-label="Pinterest">
                    <i className="fa fa-pinterest fa-fw" title="Pinterest"></i>
                  </a>
                </li>
                <li>
                  <a className="sociali-footer" href="https://in.linkedin.com/company/phantom-healthcare-ind-private-limited-company" target="_blank" aria-label="LinkedIn">
                    <i className="fa fa-linkedin fa-fw" title="LinkedIn"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Menu */}
        <div className="footer-menu">
          <div className="footer-menu-wrap container">
            <div className="footer-menu-box footer-menu-box1">
              <Link href="/privacy-policy.html">Privacy Policy</Link>
            </div>
            <div className="footer-menu-box footer-menu-box1">
              <Link href="/faqs.html">FAQs</Link>
            </div>
            <div className="footer-menu-box footer-menu-box1">
              <Link href="/terms-and-conditions.html">Terms & Conditions</Link>
            </div>
            <div className="footer-menu-box footer-menu-box1">
              <Link href="/sitemap.html">Sitemap</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className="bottom-bar">
        <div className="copyrights">
          © Copyright 2011-2024- Phantom Healthcare
        </div>
      </section>
    </footer>
  );
} 