import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Products() {
  return (
    <main className="main-content">
      <Header />
      
      {/* Products Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>High-quality medical imaging equipment from leading manufacturers</p>
        </div>
      </section>

      {/* MRI Scanners */}
      <section className="product-category">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 lg:mb-8">MRI Scanners</h2>
          <div className="products-grid">
            <div className="product-card">
              <Image src="/images/machines/1.5t-mri/GE Signa 1.5T HDxt.jpg" alt="GE Signa 1.5T HDxt" width={400} height={300} />
              <h3>GE Signa 1.5T HDxt</h3>
              <p>High-definition 1.5T MRI scanner with advanced imaging capabilities.</p>
              <a href="/product-pages/refurbished-ge-mri-scanner-machines" className="btn btn-primary">Learn More</a>
            </div>
            <div className="product-card">
              <Image src="/images/machines/3.0t-mri/GE Signa 3.0T.jpg" alt="GE Signa 3.0T" width={400} height={300} />
              <h3>GE Signa 3.0T</h3>
              <p>High-field 3.0T MRI scanner for superior image quality and resolution.</p>
              <a href="/product-pages/refurbished-ge-mri-scanner-machines" className="btn btn-primary">Learn More</a>
            </div>
            <div className="product-card">
              <Image src="/images/machines/3.0t-mri/Siemens Magnetom Skyra MRI.jpg" alt="Siemens Magnetom Skyra" width={400} height={300} />
              <h3>Siemens Magnetom Skyra</h3>
              <p>Advanced 3.0T MRI system with cutting-edge technology.</p>
              <a href="/product-pages/refurbished-siemens-mri-scanner-machines" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* CT Scanners */}
      <section className="product-category">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 lg:mb-8">CT Scanners</h2>
          <div className="products-grid">
            <div className="product-card">
              <Image src="/images/machines/ct-scan/GE revolution EVO.jpg" alt="GE Revolution EVO" width={400} height={300} />
              <h3>GE Revolution EVO</h3>
              <p>Advanced CT scanner with revolutionary imaging technology.</p>
              <a href="/product-pages/refurbished-ct-scan-machines" className="btn btn-primary">Learn More</a>
            </div>
            <div className="product-card">
              <Image src="/images/machines/ct-scan/brightspeed.jpg" alt="GE BrightSpeed" width={400} height={300} />
              <h3>GE BrightSpeed</h3>
              <p>High-performance CT scanner for accurate diagnostic imaging.</p>
              <a href="/product-pages/refurbished-ct-scan-machines" className="btn btn-primary">Learn More</a>
            </div>
            <div className="product-card">
              <Image src="/images/machines/ct-scan/Siemens Go Now CT Scanner.jpg" alt="Siemens Go Now" width={400} height={300} />
              <h3>Siemens Go Now</h3>
              <p>Portable CT scanner for flexible imaging solutions.</p>
              <a href="/product-pages/refurbished-ct-scan-machines" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* PET-CT Scanners */}
      <section className="product-category">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 lg:mb-8">PET-CT Scanners</h2>
          <div className="products-grid">
            <div className="product-card">
              <Image src="/images/machines/pet-ct/pet-ct.png" alt="PET-CT Scanner" width={400} height={300} />
              <h3>PET-CT Scanner</h3>
              <p>Combined PET and CT imaging for comprehensive diagnostic information.</p>
              <a href="/product-pages/refurbished-pet-ct-scanner-machines" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Cath-Lab */}
      <section className="product-category">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 lg:mb-8">Cath-Lab Systems</h2>
          <div className="products-grid">
            <div className="product-card">
              <Image src="/images/machines/allura.png" alt="Philips Allura" width={400} height={300} />
              <h3>Philips Allura</h3>
              <p>Advanced cardiovascular imaging system for interventional procedures.</p>
              <a href="/product-pages/refurbished-cath-lab-machines" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Gamma Camera SPECT */}
      <section className="product-category">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 lg:mb-8">Gamma Camera SPECT Systems</h2>
          <div className="products-grid">
            <div className="product-card">
              <Image src="/images/machines/gamma camera spect/GE infinia gamma camera SPECT.jpg" alt="GE Infinia Gamma Camera" width={400} height={300} />
              <h3>GE Infinia Gamma Camera</h3>
              <p>Advanced SPECT imaging system for nuclear medicine.</p>
              <a href="/product-pages/refurbished-gamma-camera-spect-system-machine" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Bone Densitometer */}
      <section className="product-category">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 lg:mb-8">Bone Densitometer DXA</h2>
          <div className="products-grid">
            <div className="product-card">
              <Image src="/images/machines/Dexa Bone Densitometer.jpg" alt="DEXA Bone Densitometer" width={400} height={300} />
              <h3>DEXA Bone Densitometer</h3>
              <p>Precise bone density measurement for osteoporosis diagnosis.</p>
              <a href="/product-pages/refurbished-bone-densitometer-dexa" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 