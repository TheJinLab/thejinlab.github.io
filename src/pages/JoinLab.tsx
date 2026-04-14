import PageHero from '../components/PageHero'
import './JoinLab.css'

const opportunities = [
  {
    id: 'grad',
    icon: '🎓',
    title: 'Prospective Graduate Students',
    body: `We welcome applications from motivated students interested in computational plant biology, 
    3D imaging, machine learning, or evolutionary morphology. Strong candidates will have a background in 
    at least one of: biology, computer science, mathematics/statistics, or data science.
    
    PhD students are admitted through the CUNY Graduate Center program. Please reach out to Dr. Jin 
    before applying to discuss potential fit and ongoing projects.`,
    cta: 'Email Dr. Jin',
    href: 'mailto:jjin@nybg.org?subject=Graduate Student Inquiry',
  },
  {
    id: 'intern',
    icon: '🔬',
    title: 'Research Interns',
    body: `We offer short- and long-term research internships (typically 3–12 months) for undergraduate 
    and master's students. Interns can contribute to dataset curation, annotation pipelines, 3D 
    reconstruction workflows, or machine learning model development depending on background and interests.
    
    NYBG's internship programs provide access to the living collections and herbarium — an extraordinary 
    environment for botanical research. Both in-person and remote arrangements can be discussed.`,
    cta: 'Apply for Internship',
    href: 'mailto:jjin@nybg.org?subject=Internship Application',
  },
  {
    id: 'collab',
    icon: '🤝',
    title: 'Project-Based Collaborations',
    body: `We actively seek collaborations with researchers in botany, evolutionary biology, computer 
    vision, and related fields. We are particularly interested in:
    
    • Botanists with access to diverse specimen collections
    • Computer vision / graphics researchers interested in real-world plant applications
    • Museum and herbarium informatics teams
    • Engineers or data scientists interested in 3D phenotyping pipelines
    
    If you have a project idea, a dataset, or a methodological question that aligns with our work, 
    we would be happy to explore a collaboration.`,
    cta: 'Reach Out',
    href: 'mailto:jjin@nybg.org?subject=Collaboration Inquiry',
  },
]

export default function JoinLab() {
  return (
    <div>
      <PageHero
        eyebrow="Join the Lab"
        title="Join the Jin Lab"
        subtitle="We are always looking for curious, driven individuals to join our team"
      />

      <section className="section">
        <div className="container">
          <p className="join-intro">
            The Jin Lab is committed to building an inclusive, collaborative, and intellectually
            rigorous environment. We welcome applicants from diverse backgrounds and are dedicated
            to mentoring the next generation of computational biologists.
          </p>

          <div className="opportunities-list">
            {opportunities.map(({ id, icon, title, body, cta, href }) => (
              <div key={id} className="opportunity-card">
                <div className="opportunity-icon">{icon}</div>
                <div className="opportunity-body">
                  <h3 className="opportunity-title">{title}</h3>
                  <div className="opportunity-text">
                    {body.trim().split('\n\n').map((para, i) => (
                      <p key={i}>{para.trim()}</p>
                    ))}
                  </div>
                  <a href={href} className="btn btn-primary opportunity-cta">
                    {cta} →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="join-note">
            <p>
              <strong>Note:</strong> The Jin Lab is an equal opportunity employer. We encourage
              applications from members of historically underrepresented groups in STEM.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
