import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../../styles/footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            {/* Brand Column */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-logo-section">
                <div className="footer-logo-wrapper">
                  <img src="/images/home/logo.svg" alt="El Shaddai" className="footer-logo" />
                  <div className="footer-brand">
                    <span className="footer-brand-name">El Shaddai</span>
                    <span className="footer-brand-tag">Wood Packing</span>
                  </div>
                </div>
                <p className="footer-description">
                  El Shaddai Wood Packing is a leading Manufacturer, Wholesaler and Trader of 
                  supreme quality Wooden Pallets, Pallet Boxes, Racking Systems and Custom Wood Products. 
                  Based in Chennai, Tamil Nadu — serving all of India since 2013.
                </p>
                <div className="footer-social">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
                <li><Link to="/products" onClick={scrollToTop}>Products</Link></li>
                <li><Link to="/manufacturing" onClick={scrollToTop}>Manufacturing</Link></li>
                <li><Link to="/gallery" onClick={scrollToTop}>Gallery</Link></li>
                <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div className="col-lg-2 col-md-6">
              <h4 className="footer-heading">Products</h4>
              <ul className="footer-links">
                <li><Link to="/products" onClick={scrollToTop}>Wooden Pallets</Link></li>
                <li><Link to="/products" onClick={scrollToTop}>Wooden Box</Link></li>
                <li><Link to="/products" onClick={scrollToTop}>Pinewood Pallets</Link></li>
                <li><Link to="/products" onClick={scrollToTop}>Wooden Crates</Link></li>
                <li><Link to="/products" onClick={scrollToTop}>Racking Systems</Link></li>
                <li><Link to="/products" onClick={scrollToTop}>Wood Furniture</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-4 col-md-6">
              <h4 className="footer-heading">Contact Us</h4>
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><FaMapMarkerAlt /></div>
                <div className="footer-contact-text">
                  No.75, Appur Road, Panakottur, Maraimalai Nagar, Chengalpattu District - 603 209, Tamil Nadu
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><FaPhone /></div>
                <div className="footer-contact-text">
                  <a href="tel:+919042988267">+91 9042988267</a><br />
                  <a href="tel:+919840226732">+91 9840226732</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><FaEnvelope /></div>
                <div className="footer-contact-text">
                  <a href="mailto:elshaddaipacking@gmail.com">elshaddaipacking@gmail.com</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><FaClock /></div>
                <div className="footer-contact-text">
                  Mon - Sat: 9:00 AM - 8:00 PM<br />
                  Sunday: Closed
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} El Shaddai Wood Packing. All Rights Reserved. Designed by El Shaddai
          </p>
        </div>
      </div>
    </footer>
  );
}
