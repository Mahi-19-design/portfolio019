import { motion } from 'framer-motion'
import '../styles/about.css'

const educationData = [
  {
    degree: 'B.E. Computer Engineering',
    school: 'Swaminarayan University',
    duration: '2025 - 2029 (Expected)',
    desc: 'Artificial Intelligence Enthusiast',
    color: '#00f2fe'
  },
  {
    degree: 'Higher Secondary Education',
    school: 'Vidhya Mandir Trust',
    duration: '12th Boards',
    desc: 'Percentage: 80%',
    color: '#4facfe'
  },
  {
    degree: 'Secondary Education',
    school: 'Navjivan English Medium School',
    duration: '10th Boards',
    desc: 'Percentage: 94.5%',
    color: '#a1c4fd'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 15 }
  }
}

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
            className="about-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <h2 className="section-title">About Me</h2>
            
            <div className="about-bio-integrated">
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
            </div>
            
            <div className="about-education-integrated">
              <h4 className="edu-stack-title">Educational Journey</h4>
              
              <div className="timeline-v2-premium">
                <motion.div 
                    className="timeline-rail-v2"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                ></motion.div>

                <motion.div 
                  className="timeline-items-v2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {educationData.map((edu, index) => (
                    <motion.div 
                      key={index} 
                      className="timeline-item-v2"
                      variants={itemVariants}
                    >
                      <motion.div 
                        className="timeline-node-v2" 
                        style={{ backgroundColor: edu.color, color: edu.color }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.3, type: "spring" }}
                      ></motion.div>
                      
                      <div className="edu-card-premium" style={{ '--accent-edu': edu.color }}>
                        <div className="edu-icon-shell-premium" style={{ borderColor: `${edu.color}44` }}>
                          <span className="edu-icon-inner-glow" style={{ backgroundColor: edu.color, opacity: 0.2 }}></span>
                          <div style={{ color: edu.color }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                            </svg>
                          </div>
                        </div>
                        <div className="edu-content-premium">
                          <h5>{edu.degree}</h5>
                          <p className="school-name-premium">{edu.school}</p>
                          <span className="duration-tag-premium">{edu.duration}</span>
                          <p className="desc-text-premium">{edu.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
