import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function About() {
  return (
    <main className="main-content">
      <Header />
      
      {/* About Hero Section */}
      <section
        style={{ backgroundImage: "url('/images/phantom-building.jpg')" }}
        className="relative w-full min-h-[400px] flex flex-col md:flex-row items-center justify-between bg-cover bg-center"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        {/* Content */}
        <div className="relative z-10 p-8 md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About Phantom Healthcare</h1>
          <p className="text-white mb-6">
            Our Group had started the operations in year 2011 and has become the leading remarketers, refurbishers and re-assemblers of Pre-owned Super Conductive MRIs and CT Scanners in India. Phantom Healthcare strives to provide professional support with quality services that are custom fit to the needs of today's growing healthcare industry. We aim to develop long-term relationships with our clients and do our best possible to keep Imaging equipment up-to-date and working like new.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold w-max">LEARN MORE</button>
        </div>
        {/* Video or other content */}
        <div className="relative z-10 p-8 md:w-1/2 flex justify-center items-center">
          {/* Place your YouTube embed or other content here */}
        </div>
      </section>

      {/* About Content */}
      <section className="about-content-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>Phantom Healthcare is a leading provider of medical imaging equipment, specializing in MRI, CT Scanner, PET-CT, Cath-Lab, Gamma Camera SPECT, and Bone Densitometer DXA systems.</p>
              
              <h3>Our Mission</h3>
              <p>To provide healthcare facilities worldwide with high-quality, reliable medical imaging equipment and exceptional service, enabling better patient care and improved diagnostic capabilities.</p>
              
              <h3>Our Vision</h3>
              <p>To be the most trusted partner in medical imaging technology, known for quality, reliability, and customer satisfaction.</p>
            </div>
            
            <div className="about-image">
              <Image src="/images/phantom-building.jpg" alt="Phantom Healthcare Building" width={400} height={300} />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 lg:mb-8">Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <Image src="/images/brijesh-suneja.jpg" alt="Brijesh Suneja" width={400} height={300} />
              <h3>Brijesh Suneja</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <Image src="/images/rochi-nargotra.jpg" alt="Rochi Nargotra" width={400} height={300} />
              <h3>Rochi Nargotra</h3>
              <p>Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 lg:mb-8">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <i className="fa fa-star"></i>
              <h3>Quality</h3>
              <p>We maintain the highest standards of quality in all our products and services.</p>
            </div>
            <div className="value-card">
              <i className="fa fa-handshake-o"></i>
              <h3>Trust</h3>
              <p>Building long-term relationships based on trust and reliability.</p>
            </div>
            <div className="value-card">
              <i className="fa fa-users"></i>
              <h3>Customer Focus</h3>
              <p>Our customers are at the heart of everything we do.</p>
            </div>
            <div className="value-card">
              <i className="fa fa-lightbulb-o"></i>
              <h3>Innovation</h3>
              <p>Continuously improving and adopting the latest technologies.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 