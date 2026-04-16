import {Helmet} from 'react-helmet'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Hackathons from '../components/Hackathons'
import YouTube from '../components/YouTube'
import Contact from '../components/Contact'
import Achievements from '../components/Achievements'
import FigmaDesigns from '../components/FigmaDesigns'

const Home = ({ onResumeClick }) => {
  return (
    <>
    <Helmet>
      <title>Mahi Patel | Full Stack Developer & AI Enthusiast</title>
      <meta name="description" content="Explore the portfolio of Mahi Patel, a passionate Full Stack Developer and AI Enthusiast. Discover projects in Web Development, Machine Learning, and UI/UX design." />
      <meta name="keywords" content="Mahi Patel, Portfolio, Full Stack Developer, AI Enthusiast, React Developer, Node.js, Computer Engineering" />
    </Helmet>
      <Hero onResumeClick={onResumeClick} />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Hackathons />
      <Certifications />
      <YouTube />
      <FigmaDesigns />
      <Contact />
    </>
  )
}

export default Home
