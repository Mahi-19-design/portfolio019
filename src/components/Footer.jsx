import '../styles/footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#hero" className="navbar-logo">
              <span className="logo-accent">&lt;</span>
              Portfolio
              <span className="logo-accent">/&gt;</span>
            </a>
            <p>Building the future with AI and innovation</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Quick Links</h4>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#youtube">YouTube</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="link-group">
              <h4>Connect</h4>
              <a href="https://github.com/Mahi-19-design">GitHub</a>
              <a href="https://www.linkedin.com/in/mahi-patel-1663b8367/">LinkedIn</a>
              <a href="https://x.com/MahiPatel019">Twitter</a>
              <a href="https://www.youtube.com/@MahiPatel-x3u">Youtube</a>

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
