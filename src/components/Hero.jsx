import '../styles/hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-part title-intro">Hi, I'm  </span>
            <span className="title-part title-name highlight"> Mahi Patel</span>
          </h1>
          <h2 className="hero-subtitle">
            Computer Engineering Student & Aspiring AI Developer.
          </h2>
          <p className="hero-description">
            Passionate about building intelligent systems and creating innovative 
            solutions through machine learning, computer vision, and modern web technologies.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            {/* Add your image here */}
            <div className="image-placeholder">
              <img src="https://res.cloudinary.com/dq7hb3fah/image/upload/v1770271507/Screenshot_2026-02-05_113444_tzdbof.png" alt="Mahi Patel" className="profile-image" />
            </div>
            <div className="image-frame"></div>
            <div className="image-glow"></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>

  )
}

export default Hero
