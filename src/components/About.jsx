import '../styles/about.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              <div className="profile-placeholder">
                <span className="profile-icon">👨‍💻</span>
              </div>
              <div className="image-glow"></div>
            </div>
          </div>
          <div className="about-text">
            <h3>Computer Engineering Student & AI Enthusiast</h3>
            <p>
              I'm a passionate Computer Engineering student specializing in Artificial Intelligence 
              and Machine Learning. Currently pursuing my degree with a focus on creating intelligent 
              systems that solve real-world problems.
            </p>
            <p>
              My journey in AI started with simple machine learning models and has evolved into 
              working with deep learning, computer vision, and natural language processing. I believe 
              in the power of AI to transform industries and improve lives.
            </p>
            <p>
              I'm constantly learning and exploring new technologies, with a particular interest in 
              generative AI, computer vision, and ethical AI development.
            </p>
            <div className="education">
              <h4>Education</h4>
              <div className="education-item">
                <div className="education-icon">🎓</div>
                <div>
                  <h5>B.E. Computer Engineering</h5>
                  <p>Swaminarayan University • Expected 2029</p>
                  <p className="education-desc">Artifical Intelligence Enthusiast</p>
                </div>
                
              </div>
              
              
            </div>

 <div className="education">
              <h4>Education </h4>
              <div className="education-item">
                <div className="education-icon">🎓</div>
                <div>
                  <h5>Higher Secondary Education</h5>
                  <p>Vidhya Mandir Trust </p>
                  <p className="education-desc">Percentage in 12th boards : 80% </p>
                </div>
                
              </div>
              
              
            </div>
 <div className="education">
              <h4>Education</h4>
              <div className="education-item">
                <div className="education-icon">🎓</div>
                <div>
                  <h5>Secondary Education</h5>
                  <p>Navjivan English Medium School</p>
                  <p className="education-desc">Percentage in 10th boards : 94.5%</p>
                </div>
                
              </div>
              
              
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default About
