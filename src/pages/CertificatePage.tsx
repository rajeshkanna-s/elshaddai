import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaChevronLeft, FaChevronRight, FaShieldAlt, FaGlobeAsia, FaCheckCircle, FaCertificate, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useAnimations';
import '../styles/pages.css';

const certificates = [
  { name: 'Udyam MSME Registration', desc: 'Ministry of MSME registration certifying El Shaddai as a recognized Micro, Small & Medium Enterprise.', file: '/assets/certificates/udyam-msmd-registration-certificate.pdf', icon: '🏛️' },
  { name: 'ISO Certification', desc: 'ISO quality management certification validating our adherence to international quality standards in manufacturing.', file: '/assets/certificates/iso-certification.pdf', icon: '🏅' },
  { name: 'GST Certificate (Plant II)', desc: 'Goods & Services Tax registration certifying El Shaddai as a legitimate business entity under Indian tax law.', file: '/assets/certificates/gst-new-certificate-for-plant-II.pdf', icon: '📋' },
  { name: 'GST Form', desc: 'Official GST registration form filed with the Government of India for El Shaddai Wood Packing.', file: '/assets/certificates/gst-form-for-elshaddai-wood-packing.pdf', icon: '📄' },
  { name: 'PAN Card', desc: 'Permanent Account Number registration with the Income Tax Department, Government of India.', file: '/assets/certificates/pancard.pdf', icon: '🪪' },
];

export default function CertificatePage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const revealRef = useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft') setLightbox(p => p !== null ? (p - 1 + certificates.length) % certificates.length : null);
      if (e.key === 'ArrowRight') setLightbox(p => p !== null ? (p + 1) % certificates.length : null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  const handleCertClick = (index: number) => {
    // On mobile, open PDF directly in new tab since iframe won't render
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      window.open(certificates[index].file, '_blank');
    } else {
      setLightbox(index);
    }
  };

  return (
    <div ref={revealRef}>
      <div className="page-banner">
        <div className="page-banner-content">
          <h1>Certificates</h1>
          <div className="page-banner-breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Certificates</span>
          </div>
        </div>
      </div>

      <section className="cert-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Trust & Compliance</span>
            <h2 className="section-title">Our Certifications</h2>
            <p className="section-subtitle">Verified certifications that validate our commitment to quality, compliance, and customer trust.</p>
          </div>
          <div className="cert-grid">
            {certificates.map((cert, i) => (
              <div key={i} className={`cert-card reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="cert-card-thumb" onClick={() => handleCertClick(i)}>
                  <div className="cert-card-thumb-bg">
                    <div className="cert-card-icon">{cert.icon}</div>
                    <FaCertificate className="cert-card-watermark" />
                  </div>
                  <div className="cert-card-thumb-label">
                    <FaFileAlt /> <span>PDF Document</span>
                  </div>
                  <div className="cert-card-thumb-action">
                    <FaExternalLinkAlt /> View Certificate
                  </div>
                </div>
                <div className="cert-card-body">
                  <h3>{cert.name}</h3>
                  <p>{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="cert-why">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Why It Matters</span>
            <h2 className="section-title">Certified Quality Assurance</h2>
          </div>
          <div className="row g-4">
            {[
              { icon: <FaShieldAlt />, title: 'Verified Standards', text: 'All products meet stringent quality benchmarks verified by certification bodies.' },
              { icon: <FaGlobeAsia />, title: 'Export Compliance', text: 'ISPM-15 and ISO standards ensure our products are accepted worldwide.' },
              { icon: <FaCheckCircle />, title: 'Customer Confidence', text: 'Certifications give buyers assurance of reliable, consistent product quality.' },
            ].map((item, i) => (
              <div key={i} className={`col-md-4 reveal reveal-delay-${i + 1}`}>
                <div className="cert-why-card">
                  <div className="cert-why-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox — Desktop only, opens PDF in iframe */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}><FaTimes /></button>
          <button className="lightbox-nav prev" onClick={e => { e.stopPropagation(); setLightbox(p => p !== null ? (p - 1 + certificates.length) % certificates.length : null); }}><FaChevronLeft /></button>
          <iframe src={certificates[lightbox].file} title={certificates[lightbox].name} className="lightbox-content" style={{ backgroundColor: 'white', width: '80vw', height: '80vh', border: 'none', borderRadius: '8px' }} onClick={e => e.stopPropagation()} />
          <button className="lightbox-nav next" onClick={e => { e.stopPropagation(); setLightbox(p => p !== null ? (p + 1) % certificates.length : null); }}><FaChevronRight /></button>
          <div className="lightbox-caption">{certificates[lightbox].name}</div>
        </div>
      )}
    </div>
  );
}
