import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useAnimations';
import '../styles/products.css';

type Category = 'All' | 'Cover' | 'Boxes' | 'Wood Pallet';

interface Product {
  name: string;
  category: Category;
  img: string;
  desc: string;
  badge?: string;
}

const products: Product[] = [
  // Cover / Packaging
  { name: 'VCI Cover', category: 'Cover', img: '/images/products/VCI Cover.png', desc: 'High-quality VCI cover for rust and corrosion prevention.' },
  { name: 'VCI Film Cover', category: 'Cover', img: '/images/products/VCI Flim Cover.png', desc: 'Protective VCI film covers for machinery and metal parts.' },
  { name: 'Poly cover for pallets', category: 'Cover', img: '/images/products/Poly cover for pallets.png', desc: 'Weather-resistant poly covers for palletized goods.' },
  { name: 'Poly cover for pallets', category: 'Cover', img: '/images/products/Poly cover for pallets (2).png', desc: 'Clear poly covers to protect pallets from dust and moisture.' },
  { name: 'Pp strap Rolls', category: 'Cover', img: '/images/products/Pp strap Rolls.png', desc: 'High-tensile PP strapping rolls for secure packaging.' },

  // Boxes
  { name: 'Thermocol packaging Box', category: 'Boxes', img: '/images/products/Thermocol packaging Box.png', desc: 'Durable thermocol packaging boxes for safe transit.' },
  { name: 'Thermocol packaging Box', category: 'Boxes', img: '/images/products/Thermocol packaging Box (2).png', desc: 'Custom size thermocol boxes for various products.' },
  { name: 'Corrugated Box', category: 'Boxes', img: '/images/products/Corrugated Box.png', desc: 'Strong corrugated boxes for industrial shipping.' },
  { name: 'Corrugated Box', category: 'Boxes', img: '/images/products/Corrugated Box (2).png', desc: 'Multi-layer corrugated boxes for heavy items.' },
  { name: 'Corrugated Box', category: 'Boxes', img: '/images/products/Corrugated Box (3).png', desc: 'Reliable corrugated packaging boxes for general use.' },
  { name: 'Carton Box', category: 'Boxes', img: '/images/products/carton Box 1.png', desc: 'Standard carton box for general packaging.' },
  { name: 'Carton Box', category: 'Boxes', img: '/images/products/carton Box 2.png', desc: 'High-strength carton box for secure transport.' },
  { name: 'Carton Box Accessories', category: 'Boxes', img: '/images/products/carton box accessories.png', desc: 'Essential accessories for carton box packaging.' },
  { name: 'Wooden collar Box', category: 'Boxes', img: '/images/products/Wooden collar Box.png', desc: 'Flexible and reusable wooden collar boxes.' },
  { name: 'Wooden collar Box', category: 'Boxes', img: '/images/products/Wooden collar Box (2).png', desc: 'Sturdy wooden collar box systems for pallets.' },
  { name: 'Wooden Box', category: 'Boxes', img: '/images/products/Wooden Box.jpg', desc: 'Fully enclosed wooden box for maximum protection.' },
  { name: 'Wood Pallet Box', category: 'Boxes', img: '/images/products/Wood Pallet Box.jpg', desc: 'Integrated wooden pallet box for secure transportation.' },

  // Wood Pallet
  { name: 'Wood Pallet', category: 'Wood Pallet', img: '/images/products/Wood Pallet.jpg', desc: 'Standard wooden pallet for versatile load handling.' },
  { name: '4X4 Wood Pallet', category: 'Wood Pallet', img: '/images/products/4X4 Wood Pallet (2).jpg', desc: 'Square 4x4 wooden pallet for specific load dimensions.' },
  { name: 'Pine Wood Pallet', category: 'Wood Pallet', img: '/images/products/Pine Wood Pallet.jpg', desc: 'Lightweight and sturdy pine wood pallet.' },
  { name: 'Normal Wood Pallet', category: 'Wood Pallet', img: '/images/products/Normal Wood Pallet.jpg', desc: 'Cost-effective normal wood pallet for general use.' },
];

const categories: Category[] = ['All', 'Cover', 'Boxes', 'Wood Pallet'];

export default function ProductsPage() {
  const [filter, setFilter] = useState<Category>('All');
  const revealRef = useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = filter === 'All' ? products : products.filter(p => p.category === filter);

  return (
    <div ref={revealRef}>
      <div className="page-banner">
        <div className="page-banner-content">
          <h1>Our Products</h1>
          <div className="page-banner-breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Products</span>
          </div>
        </div>
      </div>

      <section className="products-page">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Product Range</span>
            <h2 className="section-title">Premium Wood Packaging Solutions</h2>
            <p className="section-subtitle">Browse our complete range of wooden pallets, boxes, and custom packaging solutions.</p>
          </div>

          <div className="product-filters reveal">
            {categories.map(cat => (
              <button key={cat} className={`product-filter-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>{cat}</button>
            ))}
          </div>

          <div className="products-page-grid">
            {filtered.map((p, i) => (
              <div key={i} className="product-detail-card">
                <div className="product-detail-img">
                  <img src={p.img} alt={p.name} />
                  {p.badge && <span className="product-badge">{p.badge}</span>}
                </div>
                <div className="product-detail-body">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="product-detail-footer">
                  <a href={`https://wa.me/919042988267?text=${encodeURIComponent(`Hi, I want enquiry for *${p.name}*. Please share the details and pricing.`)}`} className="btn-gold" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp /> Quote
                  </a>
                  <a href="tel:+919042988267" className="btn-outline-gold"><FaPhoneAlt /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
