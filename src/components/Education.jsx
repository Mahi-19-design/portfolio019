import { motion } from 'framer-motion'
import '../styles/education.css'

const educationData = [
  {
    degree: 'B.E. Computer Engineering',
    school: 'Swaminarayan University',
    duration: '2025 - 2029 (Expected)',
    desc: 'Artificial Intelligence Enthusiast',
    icon: '🎓',
    color: '#00f2fe'
  },
  {
    degree: 'Higher Secondary Education',
    school: 'Vidhya Mandir Trust',
    duration: '12th Boards',
    desc: 'Percentage: 80%',
    icon: '🏫',
    color: '#4facfe'
  },
  {
    degree: 'Secondary Education',
    school: 'Navjivan English Medium School',
    duration: '10th Boards',
    desc: 'Percentage: 94.5%',
    icon: '📖',
    color: '#a1c4fd'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 }
  }
}

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
}

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="section-glow-aura bottom-left"></div>
      
      <div className="container compact-container">
        <motion.div 
            className="education-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="section-title">Educational Journey</h2>
        </motion.div>
        
        <div className="timeline-full-width">
            <motion.div 
                className="timeline-main-rail"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>

            <motion.div 
              className="timeline-content-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {educationData.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="timeline-block"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="timeline-ring" 
                    style={{ borderColor: edu.color, boxShadow: `0 0 15px ${edu.color}` }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3, type: "spring" }}
                  ></motion.div>
                  
                  <div className="edu-glass-card">
                    <div className="edu-icon-circle" style={{ '--accent': edu.color }}>
                      {edu.icon}
                    </div>
                    <div className="edu-info-simple">
                      <h5>{edu.degree}</h5>
                      <p className="school-v">{edu.school}</p>
                      <span className="time-v">{edu.duration}</span>
                      <p className="desc-v">{edu.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
