import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Starfield from './components/Starfield'
import Footer from './components/Footer'
import Home from './pages/Home'
import LeetCode from './components/LeetCode'
import ResumeModal from './components/ResumeModal'
import './styles/global.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const openResume = (e) => {
    if (e) e.preventDefault()
    setIsResumeOpen(true)
  }

  const closeResume = () => setIsResumeOpen(false)

  useEffect(() => {
    // Scroll management for path-based sections
    const path = location.pathname.replace('/', '')
    
    if (path && path !== 'leetcode') {
      const element = document.getElementById(path)
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          })
        }, 100)
      }
    } else if (location.pathname === '/' && !location.hash) {
      window.scrollTo(0, 0)
    }
    
    // Legacy support for hashes if they still exist
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          })
        }, 100)
      }
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/leetcode') return;

      const sections = ['hero', 'about', 'skills', 'achievements', 'projects', 'youtube', 'figma', 'certifications', 'hackathons', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            
            // Update URL path without adding to history to avoid cluttering back button
            const newPath = section === 'hero' ? '/' : `/${section}`
            if (window.location.pathname !== newPath) {
              window.history.replaceState(null, null, newPath)
            }
            break
          }
        }
      }
    }

    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    
    const handleMouseMove = (e) => {
      if (cursor && cursorDot) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
      }
    };
    
    const handleMouseDown = () => cursor?.classList.add('clicking');
    const handleMouseUp = () => cursor?.classList.remove('clicking');

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [location.pathname])

  return (
    <div className="app theme-cyan mode-dark">
      <div className="custom-cursor"></div>
      <div className="custom-cursor-dot"></div>
      <Starfield theme="cyan" isDarkMode={true} />
      <Navbar activeSection={activeSection} onResumeClick={openResume} />
      <main>
        <Routes>
          <Route path="/" element={<Home onResumeClick={openResume} />} />
          <Route path="/leetcode" element={<LeetCode />} />
          <Route path="/about" element={<Home onResumeClick={openResume} />} />
          <Route path="/skills" element={<Home onResumeClick={openResume} />} />
          <Route path="/projects" element={<Home onResumeClick={openResume} />} />
          <Route path="/certifications" element={<Home onResumeClick={openResume} />} />
          <Route path="/hackathons" element={<Home onResumeClick={openResume} />} />
          <Route path="/youtube" element={<Home onResumeClick={openResume} />} />
          <Route path="/contact" element={<Home onResumeClick={openResume} />} />
        </Routes>
      </main>
      <Footer />
      <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
    </div>
  )
}

export default App


