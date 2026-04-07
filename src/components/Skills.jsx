import { motion } from 'framer-motion'
import '../styles/skills.css'

const skillRows = [
  [
    { name: 'HTML', color: '#E34F26', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', color: '#1572B6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
  ],
  [
    { name: 'JavaScript', color: '#F7DF1E', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
  ],
  [
    { name: 'React', color: '#61DAFB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Python', color: '#3776AB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
  ],
  [
    { name: 'Node.js', color: '#339933', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', color: '#ffffff', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', color: '#47A248', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
  ],
  [
    { name: 'C', color: '#A8B9CC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', color: '#00599C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' }
  ],
  [
    { name: 'Git', color: '#F05032', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', color: '#ffffff', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Figma', color: '#F24E1E', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
    { name: 'UI-UX', color: '#FF7043', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
    { name: 'Postman', color: '#FF6C37', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' }
  ]
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const nodeVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="skills-header"
        >
            <h2 className="section-title">Technical Expertise</h2>
            <div className="skills-intro">
                <p>A hierarchical look at my technology stack and domain knowledge</p>
            </div>
        </motion.div>
        
        <motion.div 
          className="skills-tree-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
            <svg className="tree-lines-svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path 
                    d="M 50 0 L 50 100" 
                    stroke="var(--accent-primary)" 
                    strokeWidth="0.1" 
                    strokeDasharray="1 1" 
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.2 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
            </svg>

          {skillRows.map((row, rowIndex) => (
            <div key={rowIndex} className="tree-row">
              {row.map((skill, skillIndex) => (
                <motion.div 
                  key={skillIndex} 
                  className="skill-node"
                  variants={nodeVariants}
                >
                  <div 
                    className="skill-icon-wrapper" 
                    style={{ '--skill-color': skill.color }}
                  >
                    <div className="glow-effect"></div>
                    <motion.img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="skill-img"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                    />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
