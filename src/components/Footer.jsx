import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/" className="navbar-logo">
              <span className="logo-accent">&lt;</span>
              Mahi Patel
              <span className="logo-accent">/&gt;</span>
            </Link>
            <p>Building the future with AI and innovation</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Quick Links</h4>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/youtube">YouTube</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="link-group">
              <h4>Connect</h4>
              <Link to="https://github.com/Mahi-19-design" target="_blank" rel="noopener noreferrer">GitHub</Link>
              <Link to="https://www.linkedin.com/in/mahi-patel-1663b8367/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
              <Link to="https://x.com/MahiPatel019" target="_blank" rel="noopener noreferrer">Twitter</Link>
              <Link to="https://www.youtube.com/@MahiPatel-x3u" target="_blank" rel="noopener noreferrer">Youtube</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Mahi. All rights reserved.</p>
          <p>Made with React & ❤️</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
