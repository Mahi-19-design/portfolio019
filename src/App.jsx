import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Starfield from './components/Starfield'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Hackathons from './components/Hackathons'
import YouTube from './components/YouTube'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/global.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'hackathons', 'youtube', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    
    const handleMouseMove = (e) => {
      if (cursor && cursorDot) {
        // Fast DOM manipulation to bypass React render cycle
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
  }, [])

  return (
    <div className="app">
      <div className="custom-cursor"></div>
      <div className="custom-cursor-dot"></div>
      <Starfield />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Hackathons />
        <YouTube />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
