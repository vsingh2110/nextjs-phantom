import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Blogs() {
  return (
    <main className="main-content">
      <Header />
      
      {/* Blogs Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Blogs & News</h1>
          <p>Stay updated with the latest in medical imaging technology and industry insights</p>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="featured-blog">
        <div className="container">
          <div className="featured-blog-content">
            <div className="featured-blog-image">
              <Image src="/images/iria-2024.jpg" alt="IRIA 2024 Conference" width={400} height={300} />
            </div>
            <div className="featured-blog-text">
              <h2>IRIA 2024 Conference Highlights</h2>
              <p className="blog-meta">Published on January 15, 2024 | Industry News</p>
              <p>Phantom Healthcare participated in the prestigious IRIA 2024 conference, showcasing our latest medical imaging solutions and networking with industry leaders. The event was a great success with significant interest in our refurbished equipment and service offerings.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blogs-section">
        <div className="container">
          <h2>Latest Articles</h2>
          <div className="blogs-grid">
            <article className="blog-card">
              <div className="blog-image">
                <Image src="/images/mri3.jpg" alt="MRI Technology" width={400} height={300} />
              </div>
              <div className="blog-content">
                <h3>Advancements in MRI Technology</h3>
                <p className="blog-meta">January 10, 2024 | Technology</p>
                <p>Explore the latest developments in MRI technology and how they're improving diagnostic capabilities in healthcare facilities worldwide.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <Image src="/images/machines/ct-scan/GE revolution EVO.jpg" alt="CT Scanner" width={400} height={300} />
              </div>
              <div className="blog-content">
                <h3>CT Scanner Maintenance Best Practices</h3>
                <p className="blog-meta">January 5, 2024 | Maintenance</p>
                <p>Learn about the essential maintenance practices that can extend the lifespan of your CT scanner and ensure optimal performance.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <Image src="/images/machines/pet-ct/pet-ct.png" alt="PET-CT Scanner" width={400} height={300} />
              </div>
              <div className="blog-content">
                <h3>PET-CT Imaging: A Comprehensive Guide</h3>
                <p className="blog-meta">December 28, 2023 | Technology</p>
                <p>Understanding the benefits and applications of PET-CT imaging in modern diagnostic medicine and cancer detection.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <Image src="/images/services/amc-annual.jpg" alt="AMC Services" width={400} height={300} />
              </div>
              <div className="blog-content">
                <h3>Why AMC Contracts Are Essential for Medical Equipment</h3>
                <p className="blog-meta">December 20, 2023 | Services</p>
                <p>Discover the importance of Annual Maintenance Contracts in ensuring reliable operation of medical imaging equipment.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <Image src="/images/machines/allura.png" alt="Cath-Lab" width={400} height={300} />
              </div>
              <div className="blog-content">
                <h3>Cath-Lab Technology: Revolutionizing Cardiac Care</h3>
                <p className="blog-meta">December 15, 2023 | Technology</p>
                <p>How modern Cath-Lab technology is transforming cardiac procedures and improving patient outcomes.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <Image src="/images/machines/gamma camera spect/GE infinia gamma camera SPECT.jpg" alt="Gamma Camera" width={400} height={300} />
              </div>
              <div className="blog-content">
                <h3>Nuclear Medicine: The Role of Gamma Cameras</h3>
                <p className="blog-meta">December 10, 2023 | Technology</p>
                <p>Understanding the critical role of gamma cameras in nuclear medicine and diagnostic imaging.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest industry insights and company updates.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 