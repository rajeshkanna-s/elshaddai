import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCogs, FaUsers, FaHeadset, FaTruck, FaPhoneAlt } from 'react-icons/fa';
import { useScrollReveal, useCountUp } from '../hooks/useAnimations';
import '../styles/home.css';

const heroSlides = [
  '/images/home/hero-banner1.jpg',
  '/images/home/hero-banner2.jpg',
  '/images/home/hero-banner3.jpg',
  '/images/home/hero-banner4.jpg',
];

const products = [
  { name: 'Wooden Pallets', desc: 'Heavy-duty industrial pallets for warehousing, logistics, and export packaging.', img: '/images/products/Wood Pallet.jpg' },
  { name: 'Pinewood Pallets', desc: 'ISPM-15 compliant pinewood pallets for international shipping and exports.', img: '/images/products/Pine Wood Pallet.jpg' },
  { name: 'Wooden Crates', desc: 'Custom wooden crates for heavy machinery, equipment, and fragile goods.', img: '/images/products/Wooden collar Box (2).png' },
  { name: 'Wooden Boxes', desc: 'Sturdy packaging boxes for industrial products, spare parts, and components.', img: '/images/products/Wood Pallet Box.jpg' },
];

const offers = [
  { icon: <FaCogs />, title: 'Advanced Technology', text: 'State-of-the-art machinery and precision equipment for manufacturing premium wooden packaging products.' },
  { icon: <FaUsers />, title: 'Expert Workers', text: 'A skilled team of craftsmen with decades of experience in creating high-quality wood products.' },
  { icon: <FaHeadset />, title: 'Customer Support', text: 'Dedicated support team available Mon-Sat to assist with orders, quotes, and technical requirements.' },
  { icon: <FaTruck />, title: 'On-Time Delivery', text: 'Reliable logistics ensuring your wooden packaging products are delivered exactly when promised.' },
];

const projectImages = [
  { img: '/images/gallery/factory.jpg', title: 'Manufacturing front gate' },
  { img: '/images/gallery/crates-export.jpg', title: 'Export Crates' },
  { img: '/images/gallery/pallets-export.jpg', title: 'Inside Office' },
  { img: '/images/gallery/wooden-chair.jpg', title: 'packing area' },
  { img: '/images/gallery/heavy-machinery.jpg', title: 'Stocks' },
];

const clientLogos = [
  { src: '/images/clients/motherson.png', alt: 'Motherson' },
  { src: '/images/clients/magna.png', alt: 'Magna' },
  { src: '/images/clients/basf.png', alt: 'BASF' },
  { src: '/images/clients/dmw.png', alt: 'DMW' },
  { src: '/images/clients/tvs.png', alt: 'TVS' },
  { src: '/images/clients/nexteer.png', alt: 'Nexteer' },
  { src: '/images/clients/ntn.png', alt: 'NTN' },
];

function StatCounter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const ref = useCountUp(end);
  return (
    <div className="col-6 col-md-3">
      <div className="stat-item">
        <div className="stat-number"><span ref={ref}>0</span>{suffix}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const revealRef = useScrollReveal();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div ref={revealRef}>
      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-slider">
          {heroSlides.map((slide, i) => (
            <div key={i} className={`hero-slide ${i === currentSlide ? 'active' : ''}`}>
              <img src={slide} alt={`El Shaddai Banner ${i + 1}`} />
            </div>
          ))}
        </div>
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-ewp-badge">
              <span className="ewp-letter" style={{ color: '#4CAF50' }}>E</span>
              <span className="ewp-letter" style={{ color: '#FFC107' }}>W</span>
              <span className="ewp-letter" style={{ color: '#2196F3' }}>P</span>
            </div>
            <div className="hero-since">SINCE 2013</div>
            <h1 className="hero-title" style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <img src="/elshaddailogo.png" alt="EWP Logo" className="hero-logo-img" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
              <span className="hero-brand-name">
                <span style={{ color: '#4CAF50' }}>E</span>
                <span style={{ color: '#FF9800' }}>L</span>
                <span style={{ color: '#F44336' }}>S</span>
                <span style={{ color: '#9C27B0' }}>H</span>
                <span style={{ color: '#2196F3' }}>A</span>
                <span style={{ color: '#FF5722' }}>D</span>
                <span style={{ color: '#009688' }}>D</span>
                <span style={{ color: '#FFC107' }}>A</span>
                <span style={{ color: '#E91E63' }}>I</span>
              </span>{' '}
              <span className="highlight">WOOD PACKING</span>
            </h1>
            <p className="hero-tagline">Wood manufacturing with quality</p>
            <p className="hero-quote">
              ❖ Keep exceeding expectations don't let anybody tell you, you can't or you're not...
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn-gold">
                Our Products <FaArrowRight />
              </Link>
              <a href="tel:+919042988267" className="btn-outline-gold" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
                <FaPhoneAlt /> Get Free Quote
              </a>
            </div>
            <div className="hero-contact-bar">
              <span className="hero-contact-item">
                ✉ elshaddaipacking@gmail.com
              </span>
              <span className="hero-contact-item">
                <FaPhoneAlt /> 90429 88267
              </span>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">10+</div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">500+</div>
                <div className="hero-stat-label">Clients Served</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">50K+</div>
                <div className="hero-stat-label">Pallets Delivered</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-dots">
          {heroSlides.map((_, i) => (
            <button key={i} className={`hero-dot ${i === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 reveal">
              <div className="about-preview-image">
                <img src="/images/about/founder.jpg" alt="G. Prabhu - Founder & Director" />
                <div className="about-preview-badge">
                  <div className="number">10+</div>
                  <div className="text">Years of<br />Excellence</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 reveal reveal-delay-2">
              <div className="about-preview-content">
                <span className="section-label">About Us</span>
                <h2 className="section-title">El Shaddai Wood Packing</h2>
                <p style={{ color: '#6b5b4b', lineHeight: 1.8 }}>
                  Since 2013, El Shaddai Wood Packing has been a trusted name in wooden packaging. Starting as a small-unit
                  wood packing manufacturer, we grew into a full-scale wholesale operation by 2017. Today, we are one of
                  Chennai's leading manufacturers of Wooden Pallets, Boxes, Crates, and Racking Systems.
                </p>
                <p style={{ color: '#6b5b4b', lineHeight: 1.8 }}>
                  Our company is headquartered in Maraimalai Nagar, Chengalpattu District, Tamil Nadu — strategically located
                  to serve automotive, industrial, and export clients across South India.
                </p>
                <Link to="/about" className="btn-gold" style={{ marginTop: '8px' }}>
                  Read More <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="products-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Products</span>
            <h2 className="section-title">Premium Wood Packaging Solutions</h2>
            <p className="section-subtitle">We are a leading manufacturer of Wooden Pallets, Pinewood Pallets, Wooden Crates, Boxes, and Racking Systems.</p>
          </div>
          <div className="products-grid">
            {products.map((p, i) => (
              <div key={i} className={`product-card reveal reveal-delay-${i + 1}`}>
                <div className="product-card-image">
                  <img src={p.img} alt={p.name} />
                  <div className="product-card-overlay">
                    <Link to="/products" className="btn-gold" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>View Details</Link>
                  </div>
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-title">{p.name}</h3>
                  <p className="product-card-desc">{p.desc}</p>
                  <Link to="/products" className="product-card-link">Learn More <FaArrowRight /></Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5 reveal">
            <Link to="/products" className="btn-outline-gold">View All Products <FaArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="offers-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Why Choose El Shaddai</h2>
            <p className="section-subtitle">Client-centric approach with quality products, expert craftsmanship, and reliable delivery.</p>
          </div>
          <div className="row g-4">
            {offers.map((o, i) => (
              <div key={i} className={`col-md-6 col-lg-3 reveal reveal-delay-${i + 1}`}>
                <div className="offer-card">
                  <div className="offer-icon">{o.icon}</div>
                  <h3 className="offer-title">{o.title}</h3>
                  <p className="offer-text">{o.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="row">
            <StatCounter end={10} suffix="+" label="Years Experience" />
            <StatCounter end={500} suffix="+" label="Clients Served" />
            <StatCounter end={50000} suffix="+" label="Products Delivered" />
            <StatCounter end={7} suffix="" label="Major Clients" />
          </div>
        </div>
      </section>

      {/* Manufacture Areas*/}
      <section className="projects-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Work</span>
            <h2 className="section-title">Manufacture Area</h2>
            <p className="section-subtitle">A glimpse of our manufacturing and packaging area.</p>
          </div>
          <div className="projects-grid reveal">
            {projectImages.map((p, i) => (
              <div key={i} className="project-item">
                <img src={p.img} alt={p.title} />
                <div className="project-item-overlay">
                  <span className="project-item-title">{p.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5 reveal">
            <Link to="/gallery" className="btn-outline-gold">View Full Gallery <FaArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="clients-section">
        <div className="container">
          <div className="section-header reveal" style={{ marginBottom: '2rem' }}>
            <span className="section-label">Trusted By</span>
            <h2 className="section-title" style={{ fontSize: 'var(--fs-h3)' }}>Our Valued Clients</h2>
          </div>
          <div className="clients-track reveal">
            {clientLogos.map((c, i) => (
              <img key={i} src={c.src} alt={c.alt} className="client-logo" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content reveal">
            <h2>Ready to Get a Free Quote?</h2>
            <p>Contact us today for custom wooden packaging solutions tailored to your business needs.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-gold">Contact Us <FaArrowRight /></Link>
              <a href="tel:+919042988267" className="btn-outline-gold" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
                <FaPhoneAlt /> +91 9042988267
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
