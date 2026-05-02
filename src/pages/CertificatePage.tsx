import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaGlobeAsia, FaCheckCircle, FaSearchPlus } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useAnimations';
import '../styles/pages.css';

const certificates = [
  { name: 'Udyam MSME Registration', desc: 'Ministry of MSME registration certifying El Shaddai as a recognized Micro, Small & Medium Enterprise.', file: '/assets/certificates/udyam-msmd-registration-certificate.pdf', thumb: '/images/certificates/udyam-msmd.png' },
  { name: 'ISO Certification', desc: 'ISO quality management certification validating our adherence to international quality standards in manufacturing.', file: '/assets/certificates/iso-certification.pdf', thumb: '/images/certificates/ISO Certification.png' },
  { name: 'GST Certificate (Plant II)', desc: 'Goods & Services Tax registration certifying El Shaddai as a legitimate business entity under Indian tax law.', file: '/assets/certificates/gst-new-certificate-for-plant-II.pdf', thumb: '/images/certificates/GST Certificate.png' },
  { name: 'GST Form', desc: 'Official GST registration form filed with the Government of India for El Shaddai Wood Packing.', file: '/assets/certificates/gst-form-for-elshaddai-wood-packing.pdf', thumb: '/images/certificates/GST Form.png' },
  { name: 'PAN Card', desc: 'Permanent Account Number registration with the Income Tax Department, Government of India.', file: '/assets/certificates/pancard.pdf', thumb: '/images/certificates/pancardimage.png' },
];

export default function CertificatePage() {
  const revealRef = useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleCertClick = (index: number) => {
    window.open(certificates[index].file, '_blank');
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
                  <img src={cert.thumb} alt={cert.name} className="cert-card-thumb-img" />
                  <div className="cert-card-thumb-overlay">
                    <FaSearchPlus />
                    <span>View Certificate</span>
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

    </div>
  );
}
