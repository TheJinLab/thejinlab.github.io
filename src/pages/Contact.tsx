import PageHero from '../components/PageHero'
import './Contact.css'

export default function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        subtitle="Questions, collaborations, or media inquiries — we'd love to hear from you"
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="section-divider" style={{ margin: '0.75rem 0 1.5rem' }} />

            <div className="contact-block">
              <h4>Principal Investigator</h4>
              <p><strong>Dr. Jian Jin</strong></p>
              <p>
                <a href="mailto:jjin@nybg.org">jjin@nybg.org</a>
              </p>
            </div>

            <div className="contact-block">
              <h4>Mailing Address</h4>
              <address>
                The Jin Lab<br />
                New York Botanical Garden<br />
                2900 Southern Blvd<br />
                Bronx, NY 10458<br />
                United States
              </address>
            </div>

            <div className="contact-block">
              <h4>Links</h4>
              <ul className="contact-links">
                <li>
                  <a href="https://www.nybg.org" target="_blank" rel="noreferrer">
                    NYBG Website
                  </a>
                </li>
                <li>
                  <a href="https://github.com/TheJinLab" target="_blank" rel="noreferrer">
                    GitHub Organization
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-map">
            <div className="map-embed">
              <iframe
                title="NYBG Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.6!2d-73.8790!3d40.8628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f3a0be123!2sNew+York+Botanical+Garden!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="340"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="map-caption">
              New York Botanical Garden · 2900 Southern Blvd · Bronx, NY
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
