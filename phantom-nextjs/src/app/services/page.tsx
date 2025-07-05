import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Services() {
  return (
    <main className="main-content">
      <Header />
      
      {/* Services Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive medical imaging equipment services and support</p>
        </div>
      </section>

      {/* Service Packages */}
      <section id="service-packages" className="service-section">
        <div className="container">
          <h2>Service Packages</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src="/images/services/amc-annual.jpg" alt="AMC Services" />
              <h3>Annual Maintenance Contract (AMC)</h3>
              <p>Comprehensive annual maintenance contracts to ensure your equipment runs smoothly throughout the year.</p>
              <ul>
                <li>Preventive maintenance</li>
                <li>24/7 technical support</li>
                <li>Priority service response</li>
                <li>Parts replacement coverage</li>
              </ul>
              <a href="/service-pages/amc-cmc-services-packages-for-ct-scanner-machines" className="btn btn-primary">Learn More</a>
            </div>
            
            <div className="service-card">
              <img src="/images/services/cmc-services.jpg" alt="CMC Services" />
              <h3>Comprehensive Maintenance Contract (CMC)</h3>
              <p>All-inclusive maintenance contracts covering all aspects of equipment care and support.</p>
              <ul>
                <li>Full equipment coverage</li>
                <li>Software updates</li>
                <li>Performance optimization</li>
                <li>Emergency response</li>
              </ul>
              <a href="/service-pages/amc-cmc-services-packages-fot-mri-scanner-machines" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Repairs and Upgrades */}
      <section id="repairs-and-upgrdaes" className="service-section">
        <div className="container">
          <h2>Repairs and Upgrades</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src="/images/services/repair-your-mri-ct.jpg" alt="Equipment Repair" />
              <h3>Equipment Repair</h3>
              <p>Expert repair services for all major medical imaging equipment brands and models.</p>
              <ul>
                <li>Diagnostic troubleshooting</li>
                <li>Component replacement</li>
                <li>System calibration</li>
                <li>Quality assurance testing</li>
              </ul>
            </div>
            
            <div className="service-card">
              <img src="/images/services/upgrade-your-ct-mri.jpg" alt="Equipment Upgrades" />
              <h3>Equipment Upgrades</h3>
              <p>Upgrade your existing equipment with the latest technology and features.</p>
              <ul>
                <li>Software upgrades</li>
                <li>Hardware enhancements</li>
                <li>Performance improvements</li>
                <li>Feature additions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation and Site Planning */}
      <section className="service-section">
        <div className="container">
          <h2>Installation and Site Planning</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src="/images/services/de-installation-relocation.jpg" alt="Installation Services" />
              <h3>Equipment Installation</h3>
              <p>Professional installation services for all medical imaging equipment.</p>
              <ul>
                <li>Site preparation</li>
                <li>Equipment assembly</li>
                <li>System integration</li>
                <li>Commissioning and testing</li>
              </ul>
              <a href="/service-pages/medical-imaging-radiology-equipment-installation" className="btn btn-primary">Learn More</a>
            </div>
            
            <div className="service-card">
              <img src="/images/services/site-planning.jpg" alt="Site Planning" />
              <h3>Site Planning and Construction</h3>
              <p>Comprehensive site planning and construction services for medical imaging facilities.</p>
              <ul>
                <li>Facility design</li>
                <li>Infrastructure planning</li>
                <li>Construction supervision</li>
                <li>Regulatory compliance</li>
              </ul>
              <a href="/service-pages/medical-imaging-radiology-site-planning-and-construction" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="service-section">
        <div className="container">
          <h2>Specialized Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src="/images/services/cold-head-helium.jpg" alt="Helium Services" />
              <h3>Helium Filling Services</h3>
              <p>Professional helium filling and maintenance services for MRI systems.</p>
              <ul>
                <li>Helium level monitoring</li>
                <li>Emergency refills</li>
                <li>System optimization</li>
                <li>Cost-effective solutions</li>
              </ul>
              <a href="/service-pages/mri-helium-filling-services" className="btn btn-primary">Learn More</a>
            </div>
            
            <div className="service-card">
              <img src="/images/services/de-installation-relocation.jpg" alt="Relocation Services" />
              <h3>De-installation and Relocation</h3>
              <p>Safe and efficient equipment relocation services for medical facilities.</p>
              <ul>
                <li>Equipment dismantling</li>
                <li>Safe transportation</li>
                <li>Reinstallation</li>
                <li>System verification</li>
              </ul>
              <a href="/service-pages/mri-deinstallation-and-reinstallation-relocation" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 