import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShieldAlt, FaHandshake, FaBolt, FaStar, FaAward, FaGlobeAsia } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useAnimations';
import '../styles/about.css';

const timeline = [
  { year: '2013', title: 'Company Founded', text: 'El Shaddai Wood Packing was established as a small-unit wood packing manufacturer in Chennai, Tamil Nadu.' },
  { year: '2017', title: 'Wholesale Expansion', text: 'Scaled operations to become a full-scale wholesale wooden packing manufacturer, serving major industrial clients.' },
  { year: '2020', title: 'Facility Expansion', text: 'Expanded manufacturing facility at Maraimalai Nagar with advanced machinery and increased production capacity.' },
  { year: '2024', title: 'Industry Leader', text: 'Became one of the leading wooden packaging manufacturers in South India, serving 500+ clients across automotive and industrial sectors.' },
];

const values = [
  { icon: <FaShieldAlt />, title: 'Quality First', text: 'Every product undergoes rigorous quality checks before delivery.' },
  { icon: <FaHandshake />, title: 'Reliability', text: 'Consistent quality and on-time delivery you can always count on.' },
  { icon: <FaBolt />, title: 'Speed', text: 'Fast turnaround times without compromising on quality standards.' },
  { icon: <FaStar />, title: 'Excellence', text: 'Striving for excellence in every pallet, crate, and box we manufacture.' },
  { icon: <FaAward />, title: 'Certified Quality', text: 'ISO certified and ISPM-15 compliant products for domestic and export needs.' },
  { icon: <FaGlobeAsia />, title: 'Pan-India Service', text: 'Serving clients across Tamil Nadu, Karnataka, Andhra Pradesh, and all of India.' },
];

export default function AboutPage() {
  const revealRef = useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div ref={revealRef}>
      {/* Banner */}
      <div className="page-banner">
        <div className="page-banner-content">
          <h1>About Us</h1>
          <div className="page-banner-breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="about-story">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 reveal">
              <div className="about-image-grid">
                <img src="/images/about/founder.jpg" alt="G. Prabhu - Founder" />
                <img src="/images/about/manufacturing.jpg" alt="Manufacturing" />
                <img src="/images/about/stacking.jpg" alt="Stacking Process" />
              </div>
            </div>
            <div className="col-lg-6 reveal reveal-delay-2">
              <span className="section-label" style={{ textAlign: 'left' }}>Our Story</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Crafting Quality Since 2013
                <span style={{ display: 'block', width: 60, height: 3, background: 'linear-gradient(135deg, #C9933A, #F0C060)', marginTop: 16, borderRadius: 2 }}></span>
              </h2>
              <p className="about-story-text">
                El Shaddai Wood Packing is a leading Manufacturer, Wholesaler and Trader of the supreme 
                quality spectrum of Wooden Pallets, Pallet Boxes, Wooden Crates, and Racking Systems.
              </p>
              <p className="about-story-text">
                From 2013 to 2017, we manufactured wood packing products as a small unit. Since 2017, 
                we have scaled into a full wholesale operation. Our company is a Proprietorship entity 
                headquartered in Chennai, Tamil Nadu, from where all business activities are managed 
                by skilled professionals.
              </p>
              <p className="about-story-text">
                Our customers are the most essential element for our growth. We cater to every 
                requirement with utmost diligence, preserving a client-centric approach that has 
                earned us a reliable position in the market.
              </p>
              <Link to="/contact" className="btn-gold" style={{ marginTop: 8 }}>
                Get In Touch <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Company Timeline</h2>
            <p className="section-subtitle">From humble beginnings to industry leadership — our growth story.</p>
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className={`timeline-item reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
          </div>
          <div className="row g-4">
            {values.map((v, i) => (
              <div key={i} className={`col-md-6 col-lg-4 reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="value-card">
                  <div className="value-icon">{v.icon}</div>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-text">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 reveal">
              <span className="section-label">Why Us</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Why Choose El Shaddai?</h2>
              <div style={{ marginTop: '2rem' }}>
                {[
                  { n: '01', t: 'Strategic Location', d: 'Based in Maraimalai Nagar, near Oragadam industrial hub — ideal for automotive & logistics clients.' },
                  { n: '02', t: 'Custom Solutions', d: 'Tailored wooden packaging to match your exact dimensions, load capacity, and compliance needs.' },
                  { n: '03', t: 'Competitive Pricing', d: 'Wholesale pricing with volume discounts — best value in Tamil Nadu.' },
                  { n: '04', t: 'Quality Assurance', d: 'ISO certified manufacturing with strict quality control at every stage.' },
                ].map((w, i) => (
                  <div key={i} className="why-item">
                    <div className="why-number">{w.n}</div>
                    <div className="why-content">
                      <h4>{w.t}</h4>
                      <p>{w.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 reveal reveal-delay-2">
              <img src="/images/about/heavy-duty-pallets.jpg" alt="Heavy Duty Pallets" style={{ width: '100%', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
