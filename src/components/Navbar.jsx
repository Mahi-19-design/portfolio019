import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = ({ activeSection, onResumeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navItems = [
    { id: 'hero', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'achievements', label: 'Achievements', path: '/achievements' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'youtube', label: 'YouTube', path: '/youtube' },
    { id: 'figma', label: 'Figma', path: '/figma' },
    { id: 'certifications', label: 'Certifications', path: '/certifications' },
    { id: 'hackathons', label: 'Hackathons', path: '/hackathons' },
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
    
    if (item.path !== '/leetcode') {
      const sectionId = item.id === 'hero' ? 'hero' : item.id
      const element = document.getElementById(sectionId)
      
      if (element) {
        e.preventDefault()
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
          <span className="logo-text">MP</span>
        </Link>
        
        <div className="nav-actions">
          <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
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
          <li key="resume" className="nav-item">
            <button 
              onClick={(e) => {
                setIsMenuOpen(false);
                onResumeClick(e);
              }} 
              className="nav-link resume-link"
            >
              Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
