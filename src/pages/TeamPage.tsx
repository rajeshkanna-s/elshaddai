import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaUserTie, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useAnimations';
import '../styles/pages.css';

const teamMembers = [
  {
    name: 'G. Prabhu',
    role: 'Founder & Director',
    bio: 'Visionary leader who founded El Shaddai Wood Packing in 2013. Over a decade of experience in the wood packaging industry, driving innovation and quality.',
    experience: '12+ Years',
    img: '/images/about/founder.jpg',
  },
  {
    name: 'Production Manager',
    role: 'Head of Manufacturing',
    bio: 'Leads the manufacturing floor with expertise in wood cutting, assembly processes, and quality control. Ensures every product meets our high standards.',
    experience: '10+ Years',
    img: '/images/about/manufacturing.jpg',
  },
  {
    name: 'Quality Control Lead',
    role: 'Quality Assurance',
    bio: 'Oversees multi-point quality inspection across all product lines. Ensures ISPM-15 compliance and structural integrity of every pallet, crate, and box.',
    experience: '8+ Years',
    img: '/images/about/stacking.jpg',
  },
  {
    name: 'Logistics Coordinator',
    role: 'Supply Chain & Delivery',
    bio: 'Manages end-to-end logistics from material sourcing to final delivery. Ensures on-time delivery across Tamil Nadu and India.',
    experience: '6+ Years',
    img: '/images/about/pallets.jpg',
  },
];

const departments = [
  {
    name: 'Accounts',
    members: [
      { name: 'SEETHA R', contact: 'For More Details to Know About Mail to', email: 'elshaddaiwp12acc@gmail.com' }
    ]
  },
  {
    name: 'Sales & Purchase',
    members: [
      { name: 'Gayathri.J', contact: 'For More Details to Know About Mail to', email: 'purchaseewp12@gmail.com' }
    ]
  },
  {
    name: 'Store',
    members: [
      { name: 'Gayathri.J', contact: 'For More Details to Know About Mail to', email: 'storeelshaddai12@gmail.com' }
    ]
  },
  {
    name: 'Production',
    members: [
      { name: 'Bheem' },
      { name: 'Mani maaran' },
      { name: 'Rajesh' }
    ]
  },
  {
    name: 'Supervisor',
    members: [
      { name: 'Vijay', contact: 'For More Details to Know About call to', phone: '+91 7305721529' },
      { name: 'Mani maaran', contact: 'For More Details to Know About Call to', phone: '+91 9042988267' }
    ]
  }
];

export default function TeamPage() {
  const revealRef = useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div ref={revealRef}>
      <div className="page-banner">
        <div className="page-banner-content">
          <h1>Our Team</h1>
          <div className="page-banner-breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Team</span>
          </div>
        </div>
      </div>

      <section className="team-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Meet Our Team</span>
            <h2 className="section-title">The People Behind El Shaddai</h2>
            <p className="section-subtitle">
              Our skilled and dedicated team ensures every product meets the highest quality standards.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <div key={i} className={`team-card reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="team-card-img">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="team-card-body">
                  <h3>{member.name}</h3>
                  <div className="team-card-role">{member.role}</div>
                  <p className="team-card-bio">{member.bio}</p>
                  <span className="team-card-exp">{member.experience} Experience</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Section */}
      <section className="department-section">
        <div className="container" style={{ paddingBottom: '3rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4rem' }}>
            
            {/* Tree 1: Department -> Accounts, Sales, Store */}
            <div className="org-chart">
              <ul>
                <li>
                  <div className="org-node org-root">Department</div>
                  <ul>
                    {departments.slice(0, 3).map((dept, index) => (
                      <li key={index}>
                        <div className="org-node org-dept">{dept.name}</div>
                        <ul>
                          {dept.members.map((member, i) => (
                            <li key={i}>
                              <div className="org-node org-member-card">
                                <h4 className="member-name"><FaUserTie className="member-icon" /> {member.name}</h4>
                                <div className="member-contact-details">
                                  {member.email && (
                                    <div className="contact-line">
                                      <span className="contact-label">Email:</span>
                                      <a href={`mailto:${member.email}`} className="member-contact-link"><FaEnvelope /> {member.email}</a>
                                    </div>
                                  )}
                                  {member.phone && (
                                    <div className="contact-line">
                                      <span className="contact-label">Phone:</span>
                                      <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="member-contact-link"><FaPhone /> {member.phone}</a>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>

            {/* Tree 2: Production -> Members */}
            <div className="org-chart">
              <ul>
                <li>
                  <div className="org-node org-dept">{departments[3].name}</div>
                  <ul>
                    {departments[3].members.map((member, i) => (
                      <li key={i}>
                        <div className="org-node org-member-card">
                          <h4 className="member-name"><FaUserTie className="member-icon" /> {member.name}</h4>
                          <div className="member-contact-details">
                            {member.email && (
                              <div className="contact-line">
                                <span className="contact-label">Email:</span>
                                <a href={`mailto:${member.email}`} className="member-contact-link"><FaEnvelope /> {member.email}</a>
                              </div>
                            )}
                            {member.phone && (
                              <div className="contact-line">
                                <span className="contact-label">Phone:</span>
                                <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="member-contact-link"><FaPhone /> {member.phone}</a>
                              </div>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>

            {/* Tree 3: Supervisor -> Members */}
            <div className="org-chart">
              <ul>
                <li>
                  <div className="org-node org-dept">{departments[4].name}</div>
                  <ul>
                    {departments[4].members.map((member, i) => (
                      <li key={i}>
                        <div className="org-node org-member-card">
                          <h4 className="member-name"><FaUserTie className="member-icon" /> {member.name}</h4>
                          <div className="member-contact-details">
                            {member.email && (
                              <div className="contact-line">
                                <span className="contact-label">Email:</span>
                                <a href={`mailto:${member.email}`} className="member-contact-link"><FaEnvelope /> {member.email}</a>
                              </div>
                            )}
                            {member.phone && (
                              <div className="contact-line">
                                <span className="contact-label">Phone:</span>
                                <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="member-contact-link"><FaPhone /> {member.phone}</a>
                              </div>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="join-section">
        <div className="container reveal">
          <h2>Join Our Team</h2>
          <p>
            We're always looking for skilled woodworkers, machine operators, and logistics professionals.
            If you're passionate about quality craftsmanship, we'd love to hear from you.
          </p>
          <Link to="/contact" className="btn-gold">
            Get In Touch <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
