import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <main className="main-content">
      <Header />
      
      {/* About Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>About Phantom Healthcare</h1>
          <p>Your trusted partner in medical imaging solutions</p>
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
              <img src="/images/phantom-building.jpg" alt="Phantom Healthcare Building" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="/images/brijesh-suneja.jpg" alt="Brijesh Suneja" />
              <h3>Brijesh Suneja</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="/images/rochi-nargotra.jpg" alt="Rochi Nargotra" />
              <h3>Rochi Nargotra</h3>
              <p>Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
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