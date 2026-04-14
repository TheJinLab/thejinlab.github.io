import PageHero from '../components/PageHero'
import GlbViewer from '../components/GlbViewer'
import ViewerPlaceholder from '../components/ViewerPlaceholder'
import { researchAreas, reconstructionMethods, reconstructionDatasets } from '../data/research'
import './Research.css'

export default function Research() {
  return (
    <div>
      <PageHero
        eyebrow="Research"
        title="Our Research"
        subtitle="Integrating 3D imaging, neural rendering, and machine learning for botanical phenomics"
      />

      {/* Research areas */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Research Areas</h2>
          <div className="section-divider" />
          <div className="cards-grid">
            {researchAreas.map((area) => (
              <div key={area.id} className="card">
                <h3 className="card-title">{area.title}</h3>
                <p className="card-body">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Floral Reconstruction */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">3D Floral Reconstruction</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            We apply three complementary reconstruction approaches to botanical specimens,
            each offering different trade-offs between fidelity, computation, and interactivity.
          </p>

          {/* Datasets */}
          <h3 className="subsection-title">Datasets</h3>
          <div className="dataset-grid">
            {reconstructionDatasets.map((ds) => (
              <div key={ds.name} className="dataset-card">
                <div className="dataset-name">{ds.name}</div>
                <p className="dataset-desc">{ds.description}</p>
                {ds.size && <span className="tag">{ds.size}</span>}
                {ds.link && (
                  <a
                    href={ds.link}
                    className="card-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download →
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Methods */}
          <h3 className="subsection-title" style={{ marginTop: '3rem' }}>Reconstruction Methods</h3>
          <div className="methods-list">
            {reconstructionMethods.map((method) => (
              <div key={method.id} className="method-block">
                <div className="method-header">
                  <h4 className="method-name">{method.name}</h4>
                  <span className="tag tag-primary">{method.shortName}</span>
                </div>
                <p className="method-desc">{method.description}</p>

                {/* Viewer */}
                <div className="method-viewer">
                  {method.type === 'photogrammetry' && (
                    <GlbViewer
                      src={method.modelSrc ?? ''}
                      alt={`${method.name} 3D model`}
                    />
                  )}
                  {method.type === 'gaussian' && (
                    <ViewerPlaceholder type="gaussian" />
                  )}
                  {method.type === 'nerf' && (
                    <ViewerPlaceholder type="nerf" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
