import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-name">The Jin Lab</span>
          <span className="footer-affil">New York Botanical Garden</span>
        </div>
        <nav className="footer-nav">
          <Link to="/about">About</Link>
          <Link to="/research">Research</Link>
          <Link to="/people">People</Link>
          <Link to="/publications">Publications</Link>
          <Link to="/software">Software</Link>
          <Link to="/join">Join the Lab</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p className="footer-copy">© {year} The Jin Lab. All rights reserved.</p>
      </div>
    </footer>
  )
}
