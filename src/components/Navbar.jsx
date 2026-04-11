import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navItems = [
    { id: 'hero', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'certifications', label: 'Certifications', path: '/certifications' },
    { id: 'hackathons', label: 'Hackathons', path: '/hackathons' },
    { id: 'youtube', label: 'YouTube', path: '/youtube' },
    { id: 'leetcode', label: 'LeetCode', path: '/leetcode' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, item) => {
    setIsMenuOpen(false)
    
    // Smooth scroll for home section paths
    if (item.path !== '/leetcode') {
      const sectionId = item.id === 'hero' ? 'hero' : item.id
      const element = document.getElementById(sectionId)
      
      if (element) {
        e.preventDefault()
        // Update URL path manually to avoid full re-render jump if possible
        window.history.pushState(null, null, item.path)
        
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        })
      }
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsMenuOpen(false)}>
          <span className="logo-accent">&lt;</span>
          MP
          <span className="logo-accent">/&gt;</span>
        </Link>
        
        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link ${activeSection === item.id ? 'active' : ''} ${location.pathname === item.path && item.path !== '/' ? 'active' : ''}`}
                onClick={(e) => handleClick(e, item)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar


