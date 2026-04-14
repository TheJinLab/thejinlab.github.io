import PageHero from '../components/PageHero'
import { pi, currentTeam, interns, pastMembers } from '../data/people'
import type { Person } from '../data/people'
import './People.css'

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="person-card">
      <div className="person-avatar">
        {person.photo ? (
          <img src={person.photo} alt={person.name} />
        ) : (
          <div className="person-avatar-placeholder">
            {person.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="person-info">
        <h4 className="person-name">{person.name}</h4>
        {person.pronouns && (
          <span className="person-pronouns">{person.pronouns}</span>
        )}
        <p className="person-role">{person.role}</p>
        {person.affiliation && (
          <p className="person-affil">{person.affiliation}</p>
        )}
        {person.bio && <p className="person-bio">{person.bio}</p>}
        <div className="person-links">
          {person.email && (
            <a href={`mailto:${person.email}`} className="person-link">✉ Email</a>
          )}
          {person.website && (
            <a href={person.website} target="_blank" rel="noreferrer" className="person-link">
              🌐 Website
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Section({ title, people }: { title: string; people: Person[] }) {
  if (!people.length) return null
  return (
    <div className="people-section">
      <h3 className="people-section-title">{title}</h3>
      <div className="people-grid">
        {people.map((p) => (
          <PersonCard key={p.name} person={p} />
        ))}
      </div>
    </div>
  )
}

export default function People() {
  return (
    <div>
      <PageHero
        eyebrow="People"
        title="Our Team"
        subtitle="Meet the researchers behind the Jin Lab"
      />

      <section className="section">
        <div className="container">
          {/* PI */}
          <div className="people-section">
            <h3 className="people-section-title">Principal Investigator</h3>
            <div className="people-grid">
              <PersonCard person={pi} />
            </div>
          </div>

          <Section title="Current Team" people={currentTeam} />
          <Section title="Research Interns" people={interns} />
          <Section title="Alumni" people={pastMembers} />
        </div>
      </section>
    </div>
  )
}
