import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaRecycle, FaTree } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useAnimations';
import '../styles/manufacturing.css';

const steps = [
  { title: 'Raw Material Sourcing', text: 'We source high-quality hardwood and pinewood from certified suppliers, ensuring sustainability and consistency in every batch.', img: '/images/manufacture/country.jpg' },
  { title: 'Wood Cutting & Sizing', text: 'Precision cutting using advanced CNC machinery to achieve exact dimensions as per client specifications.', img: '/images/about/wood-cutting.jpg' },
  { title: 'Planing & Treatment', text: 'Wood is planed smooth and treated (heat treatment / fumigation) to meet ISPM-15 and export compliance standards.', img: '/images/about/wood-planing.jpg' },
  { title: 'Assembly & Construction', text: 'Skilled workers assemble pallets, crates, and boxes using pneumatic nail guns and industrial-grade fasteners.', img: '/images/about/manufacturing.jpg' },
  { title: 'Quality Control', text: 'Every product undergoes multi-point quality inspection — checking structural integrity, dimensions, and finish quality.', img: '/images/about/stacking.jpg' },
  { title: 'Packing & Delivery', text: 'Finished products are stacked, packed, and dispatched on schedule to clients across India via our logistics network.', img: '/images/about/pallets.jpg' },
];

const materials = [
  { name: 'KD Pine Wood', desc: 'Pine trees can live for 100–1,000 years, and some can live even longer. The Great Basin bristlecone pine is the longest-lived pine tree, with one specimen called "Methuselah" that is around 4,800 years old. Pine has a closed grain that can vary in figuring between species. The grain is usually straight, but can be irregular. The texture is usually medium and uneven.', img: '/images/manufacture/kdpine.jpg' },
  { name: 'Normal pine wood (pallet & box)', desc: 'Normal pine wood, often used in pallets and boxes, typically refers to lumber made from pine trees. Pine is a softwood that is widely available and relatively inexpensive compared to hardwoods. It is commonly used in various applications, including the construction of pallets and boxes for shipping and storage.', img: '/images/manufacture/normalwood.jpg' },
  { name: 'Ply wood (pallet & box)', desc: 'Plywood is another material commonly used in the construction of pallets and boxes, offering different characteristics compared to solid wood. Plywood is made by bonding together several layers, or plies, of wood veneer with the grain direction of each layer perpendicular to the adjacent layers. This construction method enhances the strength and stability of the material.', img: '/images/manufacture/woodbox.jpg' },
  { name: 'Compressed Wood', desc: 'Compressed wood, also known as particle board or chipboard, is a type of engineered wood product that is made from wood particles or fibers bonded together with an adhesive under heat and pressure. The resulting panel has a uniform density and is often used in various applications, including furniture, cabinetry, and sometimes in the construction of pallets and boxes.', img: '/images/manufacture/compressed.jpg' },
  { name: 'Scrab pine wood', desc: 'Scrap pine wood refers to discarded or leftover pieces of pine wood that have been cut or used in various projects. This wood may come from construction sites, woodworking shops, or other activities involving pine. In some cases, scrap wood, including pine, may be used as fuel for heating or as a source of energy. However, be cautious to ensure that the wood is not treated with chemicals or finishes that could release harmful fumes when burned.', img: '/images/manufacture/scrab.jpg' },
  { name: 'Country wood', desc: "Country wood is a type of wood with a slightly distressed look. It's not well covered in paint or varnished. Country wood can add an original and timeless touch to refined modern settings. It's made of high-grade wood, 50mm wide, 2.5 mm thick, with a moisture content of 9-12%. Country wood is renewable. It's generally considered to have a life of roughly 15 - 20 years. Country wood is easily affected by moisture. Wood is an organic material that's a natural composite of cellulose fibers and lignin. Cellulose is the primary strengthening material in wood.", img: '/images/manufacture/country.jpg' },
];

export default function ManufacturingPage() {
  const revealRef = useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div ref={revealRef}>
      <div className="page-banner">
        <div className="page-banner-content">
          <h1>Manufacturing</h1>
          <div className="page-banner-breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Manufacturing</span>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <section className="mfg-process">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Process</span>
            <h2 className="section-title">Manufacturing Workflow</h2>
            <p className="section-subtitle">From raw material to finished product — every step ensures premium quality.</p>
          </div>
          <div className="process-steps">
            {steps.map((s, i) => (
              <div key={i} className={`process-step reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="process-step-number">{i + 1}</div>
                <div className="process-step-content">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <div className="process-step-img">
                  <img src={s.img} alt={s.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="materials-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Raw Materials</span>
            <h2 className="section-title">Materials We Work With</h2>
            <p className="section-subtitle">We use the finest wood materials sourced responsibly from certified suppliers.</p>
          </div>
          <div className="row g-4">
            {materials.map((m, i) => (
              <div key={i} className={`col-md-6 col-lg-4 reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="material-card">
                  <img src={m.img} alt={m.name} />
                  <div className="material-card-body">
                    <h3>{m.name}</h3>
                    <p>{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="sustainability-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Eco-Friendly</span>
            <h2 className="section-title">Our Sustainability Commitment</h2>
          </div>
          <div className="eco-grid reveal">
            <div className="eco-item">
              <div className="eco-icon"><FaTree /></div>
              <h4>Responsibly Sourced</h4>
              <p>All our wood is sourced from certified and sustainable forestry suppliers.</p>
            </div>
            <div className="eco-item">
              <div className="eco-icon"><FaRecycle /></div>
              <h4>Waste Recycling</h4>
              <p>Wood scraps and offcuts are recycled into compressed wood products.</p>
            </div>
            <div className="eco-item">
              <div className="eco-icon"><FaLeaf /></div>
              <h4>ISPM-15 Compliance</h4>
              <p>Heat-treated wood that eliminates pests without harmful chemicals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
