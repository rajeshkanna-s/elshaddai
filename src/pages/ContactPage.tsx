import { useState, useEffect, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useAnimations';
import '../styles/pages.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', businessType: '', product: '', message: ''
  });
  const revealRef = useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', businessType: '', product: '', message: '' });
  };

  return (
    <div ref={revealRef}>
      <div className="page-banner">
        <div className="page-banner-content">
          <h1>Contact Us</h1>
          <div className="page-banner-breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Contact</span>
          </div>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-lg-7 reveal">
              <div className="contact-form-wrapper">
                <h2>Request a Quote</h2>
                <p>Fill out the form below and our team will get back to you within 24 hours.</p>

                {submitted ? (
                  <div className="form-success">
                    ✅ Thank you! Your message has been sent successfully. We'll contact you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Full Name *</label>
                          <input type="text" id="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Your full name" required />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email Address *</label>
                          <input type="email" id="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="your@email.com" required />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number *</label>
                          <input type="tel" id="phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+91 98402 XXXXX" required />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="businessType">Business Type</label>
                          <select id="businessType" value={formData.businessType} onChange={e => setFormData({...formData, businessType: e.target.value})}>
                            <option value="">Select business type</option>
                            <option value="manufacturer">Manufacturer</option>
                            <option value="exporter">Exporter</option>
                            <option value="warehouse">Warehouse / Logistics</option>
                            <option value="automotive">Automotive</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="product">Product Interest</label>
                      <select id="product" value={formData.product} onChange={e => setFormData({...formData, product: e.target.value})}>
                        <option value="">Select a product</option>
                        <option value="wooden-pallets">Wooden Pallets</option>
                        <option value="pinewood-pallets">Pinewood Pallets</option>
                        <option value="wooden-boxes">Wooden Boxes</option>
                        <option value="wooden-crates">Wooden Crates</option>
                        <option value="racking-systems">Racking Systems</option>
                        <option value="custom">Custom Order</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message / Requirements *</label>
                      <textarea id="message" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Describe your requirements — dimensions, quantity, delivery location, timeline..." required />
                    </div>
                    <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                      <FaPaperPlane /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Panel */}
            <div className="col-lg-5 reveal reveal-delay-2">
              <div className="contact-info-panel">
                <h2>Get In Touch</h2>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><FaMapMarkerAlt /></div>
                  <div className="contact-info-text">
                    <h4>Our Location</h4>
                    <p>No.75, Appur Road, Panakottur,<br />Maraimalai Nagar, Chengalpattu<br />District - 603 209, Tamil Nadu</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><FaPhone /></div>
                  <div className="contact-info-text">
                    <h4>Phone</h4>
                    <p><a href="tel:+919042988267">+91 9042988267</a><br /><a href="tel:+919840226732">+91 9840226732</a></p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><FaEnvelope /></div>
                  <div className="contact-info-text">
                    <h4>Email</h4>
                    <p><a href="mailto:elshaddaipacking@gmail.com">elshaddaipacking@gmail.com</a></p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><FaClock /></div>
                  <div className="contact-info-text">
                    <h4>Working Hours</h4>
                    <p>Mon – Sat: 9:00 AM – 8:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/919042988267?text=Hi%2C%20I%27m%20interested%20in%20your%20wood%20packing%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
                >
                  <FaWhatsapp /> Chat on WhatsApp
                </a>

                {/* Google Maps */}
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1945.3424277130948!2d79.9968142!3d12.7989566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f100210a3813%3A0x1b8da866c1d52d84!2sElshaddai%20Wood%20Packing!5e0!3m2!1sen!2sin!4v1714652200000!5m2!1sen!2sin"
                    title="El Shaddai Wood Packing Location"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
