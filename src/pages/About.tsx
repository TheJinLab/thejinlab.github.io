import PageHero from '../components/PageHero'
import './About.css'

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="The Jin Lab"
        title="About"
        subtitle="Computational Floral Phenomics at the New York Botanical Garden"
      />

      <section className="section">
        <div className="container about-grid">
          <div className="about-text">
            <h2>Our Mission</h2>
            <div className="section-divider" style={{ margin: '0.75rem 0 1.25rem' }} />
            <p>
              The Jin Lab develops computational frameworks for characterizing the three-dimensional
              architecture of flowering plant organs — with a focus on floral morphology, structural
              diversity, and phenotypic evolution across the angiosperms.
            </p>
            <p>
              We combine high-throughput 3D imaging (photogrammetry, Gaussian splatting, NeRF) with
              machine learning to enable quantitative, large-scale studies of floral form. Our work
              bridges botany, computer vision, and evolutionary biology to address questions about
              pollinator adaptation, species boundaries, and the developmental control of shape.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem' }}>Location</h3>
            <p>
              We are part of the <strong>Science Division</strong> at the{' '}
              <a href="https://www.nybg.org" target="_blank" rel="noreferrer">
                New York Botanical Garden (NYBG)
              </a>
              , Bronx, NY. NYBG maintains one of the world's largest and most diverse living plant
              collections and a world-class herbarium of 7.8 million specimens, providing
              unparalleled resources for botanical research.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem' }}>Approach</h3>
            <ul className="about-list">
              <li>3D multi-view imaging in controlled lab and field settings</li>
              <li>Photogrammetric reconstruction (SfM/MVS) via Agisoft MetaShape</li>
              <li>Neural rendering: 3D Gaussian Splatting and NeRF</li>
              <li>Automated landmark detection and mesh segmentation via deep learning</li>
              <li>Comparative morphometrics and phylogenetic comparative methods</li>
            </ul>
          </div>

          <div className="about-sidebar">
            <div className="about-card">
              <h4>Principal Investigator</h4>
              <p><strong>Dr. Jian Jin</strong></p>
              <p>New York Botanical Garden</p>
              <a href="mailto:jjin@nybg.org">jjin@nybg.org</a>
            </div>

            <div className="about-card">
              <h4>Affiliations</h4>
              <ul className="about-affil-list">
                <li>New York Botanical Garden</li>
                <li>CUNY Graduate Center</li>
              </ul>
            </div>

            <div className="about-card">
              <h4>Funding</h4>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                Funding acknowledgements will be listed here as grants are secured.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
