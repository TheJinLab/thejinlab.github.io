import PageHero from '../components/PageHero'
import { softwareTools } from '../data/software'
import './Software.css'

export default function Software() {
  return (
    <div>
      <PageHero
        eyebrow="Software"
        title="Software & Tools"
        subtitle="Open-source pipelines and libraries for 3D botanical reconstruction and phenomics"
      />

      <section className="section">
        <div className="container">
          <div className="software-list">
            {softwareTools.map((tool) => (
              <div key={tool.name} className="software-card">
                <div className="software-header">
                  <h3 className="software-name">{tool.name}</h3>
                  <span className={`status-badge status-${tool.status}`}>{tool.status}</span>
                  {tool.language && <span className="tag">{tool.language}</span>}
                </div>
                <p className="software-desc">{tool.description}</p>
                {tool.tags && (
                  <div className="software-tags">
                    {tool.tags.map((t) => (
                      <span key={t} className="tag tag-primary">{t}</span>
                    ))}
                  </div>
                )}
                <div className="software-links">
                  {tool.repo && (
                    <a href={tool.repo} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                      GitHub →
                    </a>
                  )}
                  {tool.docs && (
                    <a href={tool.docs} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                      Docs →
                    </a>
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
