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
      <title>Home</title>
      <meta name="description" content="Home" />
    </Helmet>
      <Hero onResumeClick={onResumeClick} />
      <About />
      <Skills />
      <Achievements />
      <Projects />
      <YouTube />
      <FigmaDesigns />
      <Certifications />
      <Hackathons />
      <Contact />
    </>
  )
}

export default Home
