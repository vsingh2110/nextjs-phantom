'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <main className="main-content">
      <Header />
      
      {/* Contact Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for all your medical imaging equipment needs</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fa fa-map-marker"></i>
                  <div>
                    <h3>Address</h3>
                    <p>Phantom Healthcare India Pvt. Ltd.<br />
                    Plot No. 1, Sector 11, IMT Manesar,<br />
                    Gurugram, Haryana 122050, India</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="fa fa-phone"></i>
                  <div>
                    <h3>Phone</h3>
                    <p><a href="tel:+919899963601">+91 98999 63601</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="fa fa-envelope"></i>
                  <div>
                    <h3>Email</h3>
                    <p><a href="mailto:info@phantomhealthcare.com">info@phantomhealthcare.com</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="fa fa-clock-o"></i>
                  <div>
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <ContactForm 
                formId="contactPageForm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.0123!3d28.3676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDIyJzAzLjQiTiA3N8KwMDAnNDQuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Phantom Healthcare Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 