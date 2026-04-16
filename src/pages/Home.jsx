import {Helmet} from 'react-helmet'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Hackathons from '../components/Hackathons'
import YouTube from '../components/YouTube'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Home" />
    </Helmet>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Hackathons />
      <YouTube />
      <Contact />
    </>
  )
}

export default Home
