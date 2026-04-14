import { Link } from 'react-router-dom'
import './Home.css'

const featureCards = [
  {
    icon: '🔬',
    title: 'Research',
    body: 'Explore our work in 3D floral phenomics, photogrammetry, Gaussian splatting, and neural radiance fields.',
    link: '/research',
    label: 'View Research →',
  },
  {
    icon: '⚙️',
    title: 'Software',
    body: 'Open-source pipelines and tools for botanical 3D reconstruction and phenotypic analysis.',
    link: '/software',
    label: 'Browse Software →',
  },
  {
    icon: '🌿',
    title: 'Join the Lab',
    body: 'We are recruiting graduate students, postdocs, and research interns passionate about computational biology.',
    link: '/join',
    label: 'Opportunities →',
  },
]

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="hero-eyebrow">New York Botanical Garden</p>
          <h1 className="hero-title">The Jin Lab</h1>
          <p className="hero-tagline">
            Computational Floral Phenomics &amp; 3D Plant Morphology
          </p>
          <div className="hero-actions">
            <Link to="/research" className="btn btn-primary">Our Research</Link>
            <Link to="/people" className="btn btn-outline hero-btn-outline">Meet the Team</Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container overview-grid">
          <div className="overview-text">
            <h2>About the Lab</h2>
            <div className="section-divider" style={{ margin: '0.75rem 0 1.25rem' }} />
            <p>
              We develop computational methods and imaging pipelines to study the three-dimensional
              architecture of flowering plant organs at scale. By integrating photogrammetry,
              neural rendering, and machine learning, we aim to unlock the full morphological
              diversity of angiosperms and connect shape to function, ecology, and evolution.
            </p>
            <p>
              Our lab is based at the <strong>New York Botanical Garden (NYBG)</strong>, one of the
              world's premier botanical research institutions, giving us unparalleled access to
              living collections and herbarium specimens.
            </p>
            <Link to="/about" className="btn btn-outline" style={{ marginTop: '0.5rem' }}>
              Read More →
            </Link>
          </div>
          <div className="overview-image">
            <div className="overview-gif-frame">
              <div className="overview-gif-placeholder">
                <span className="overview-gif-icon">🌺</span>
                <p>3D Floral Phenomics</p>
                <span className="overview-gif-note">
                  Place a demo GIF at <code>public/demo.gif</code>
                </span>
              </div>
              {/* Uncomment once demo.gif is available:
              <img src="/demo.gif" alt="3D floral reconstruction demo" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Featured 3D section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">3D Floral Reconstruction</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            We reconstruct flowers in three dimensions using photogrammetry, Gaussian splatting, and NeRF —
            enabling precise morphometric analysis at the organ and cellular scale.
          </p>
          <div className="method-badges">
            {['Agisoft MetaShape', '3D Gaussian Splatting', 'NeRF'].map((m) => (
              <span key={m} className="method-badge">{m}</span>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <Link to="/research" className="btn btn-primary">Explore Methods →</Link>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Explore the Lab</h2>
          <div className="section-divider" />
          <div className="cards-grid">
            {featureCards.map(({ icon, title, body, link, label }) => (
              <div key={title} className="card">
                <div className="card-icon">{icon}</div>
                <h3 className="card-title">{title}</h3>
                <p className="card-body">{body}</p>
                <Link to={link} className="card-link">{label}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
