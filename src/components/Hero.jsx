import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../styles/hero.css'

const Hero = ({ onResumeClick }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="title-part title-intro">Hi, </span>
            <span className="title-part title-name highlight">Mahi Patel</span>
          </motion.h1>

          <div className="hero-subtitle-container">
            <TypeAnimation
                sequence={[
                    'Computer Engineering Student',
                    2000,
                    'Aspiring AI Developer',
                    2000,
                    'Full Stack Developer',
                    2000,
                    'UI/UX Enthusiast',
                    2000,
                ]}
                wrapper="h2"
                cursor={true}
                repeat={Infinity}
                className="hero-subtitle"
            />
          </div>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Passionate about building intelligent systems and creating innovative 
            solutions through machine learning, computer vision, and modern web technologies.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/projects" className="btn">
              View Projects
            </Link>
            <button onClick={onResumeClick} className="btn btn-outline resume-btn">
              View Resume
            </button>
          </motion.div>



        </motion.div>

        <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        >
          <div className="image-container">
            <div className="image-placeholder">
              <img 
                src="https://res.cloudinary.com/dq7hb3fah/image/upload/v1770271507/Screenshot_2026-02-05_113444_tzdbof.png" 
                alt="Mahi Patel" 
                className="profile-image" 
              />
            </div>
            <div className="image-frame"></div>
            <div className="image-glow"></div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
