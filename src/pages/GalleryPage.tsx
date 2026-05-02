import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useAnimations';
import '../styles/gallery.css';

interface GalleryImage { src: string; title: string; }

const images: GalleryImage[] = [
  { src: '/images/gallery/factory.jpg', title: 'Manufacturing front gate, Chennai' },
  { src: '/images/gallery/packaging.jpg', title: 'Industrial Packaging Line' },
  { src: '/images/gallery/crate-manufacturing.jpg', title: 'Inside office' },
  { src: '/images/gallery/crate-process.jpg', title: 'Office' },
  { src: '/images/gallery/crates-export.jpg', title: 'Export-Ready Crates' },
  { src: '/images/gallery/pallets-export.jpg', title: 'Inside office' },
  { src: '/images/gallery/stacked-pallets.jpg', title: 'Front Gate' },
  { src: '/images/gallery/heavy-machinery.jpg', title: 'Heavy Machinery Crating' },
  { src: '/images/gallery/gallery-1.jpg', title: 'Packaging Solution' },
  { src: '/images/gallery/gallery-2.jpg', title: 'Packaging Solution' },
  { src: '/images/gallery/wood-table.jpg', title: 'Handcrafted Wood Table' },
  { src: '/images/gallery/wooden-chair.jpg', title: 'Solid Wooden Chair' },
  { src: '/images/gallery/bed-frame.jpg', title: 'Front Gate' },
  { src: '/images/gallery/cabinet.jpg', title: 'Custom Pallet Design' },
  { src: '/images/gallery/wood-door.jpg', title: 'Office Entrance' },
  { src: '/images/gallery/wood-shelves.jpg', title: 'Office' },
  { src: '/images/gallery/wood-bench.jpg', title: 'Office' },
  { src: '/images/gallery/coffee-table.jpg', title: 'Loading' },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const revealRef = useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox(prev => prev !== null ? (prev - 1 + images.length) % images.length : null);
  const nextImage = () => setLightbox(prev => prev !== null ? (prev + 1) % images.length : null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  return (
    <div ref={revealRef}>
      <div className="page-banner">
        <div className="page-banner-content">
          <h1>Gallery</h1>
          <div className="page-banner-breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Gallery</span>
          </div>
        </div>
      </div>

      <section className="gallery-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Work</span>
            <h2 className="section-title">Project Gallery</h2>
            <p className="section-subtitle">Explore our manufacturing front gate, products, and completed projects.</p>
          </div>

          <div className="gallery-grid">
            {images.map((img, i) => (
              <div key={i} className="gallery-item" onClick={() => openLightbox(i)}>
                <img src={img.src} alt={img.title} />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-title">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}><FaTimes /></button>
          <button className="lightbox-nav prev" onClick={e => { e.stopPropagation(); prevImage(); }}><FaChevronLeft /></button>
          <img src={images[lightbox].src} alt={images[lightbox].title} className="lightbox-content" onClick={e => e.stopPropagation()} />
          <button className="lightbox-nav next" onClick={e => { e.stopPropagation(); nextImage(); }}><FaChevronRight /></button>
          <div className="lightbox-caption">{images[lightbox].title}</div>
        </div>
      )}
    </div>
  );
}
