import PageHero from '../components/PageHero'
import { publications } from '../data/publications'
import './Publications.css'

export default function Publications() {
  const byYear = publications.reduce<Record<number, typeof publications>>((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = []
    acc[pub.year].push(pub)
    return acc
  }, {})

  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <div>
      <PageHero
        eyebrow="Publications"
        title="Publications"
        subtitle="Peer-reviewed articles, preprints, and conference proceedings"
      />

      <section className="section">
        <div className="container pub-container">
          {years.map((year) => (
            <div key={year} className="pub-year-group">
              <h2 className="pub-year-heading">{year}</h2>
              <div className="pub-list">
                {byYear[year].map((pub, i) => (
                  <div key={i} className="pub-item">
                    <p className="pub-title">
                      {pub.doi ? (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : pub.link ? (
                        <a href={pub.link} target="_blank" rel="noreferrer">
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </p>
                    <p className="pub-authors">{pub.authors}</p>
                    <p className="pub-journal">
                      <em>{pub.journal}</em>
                      {pub.doi && (
                        <> &middot; <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="pub-doi">doi:{pub.doi}</a></>
                      )}
                    </p>
                    {pub.tags && (
                      <div className="pub-tags">
                        {pub.tags.map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
