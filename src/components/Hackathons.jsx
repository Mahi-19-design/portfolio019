import { motion } from 'framer-motion'
import '../styles/hackathons.css'

const hackathonsData = [
  {
    id: 1,
    title: 'ArtPart CodeForge Hackathon',
    organizer: 'IISC Bangalore',
    date: 'March 2026',
    location: 'Bangalore, India',
    achievement: 'Participant',
    description: 'A prestigious 24-hour national level hackathon focused on building innovative solutions using AI and emerging technologies. Collaborated in a cross-functional team to develop a proof-of-concept application within strict time constraints.',
    project: 'AI Resume Optimizer',
    projectDesc: 'An intelligent platform that analyzes resumes against job descriptions to provide real-time optimization suggestions.',
    tags: ['React', 'Gemini API', 'Node.js', 'Prototyping' , 'Express' , 'MongoDB' ],
    icon: '🚀',
    github: 'https://github.com/Mahi-19-design/IISC',
    image: 'https://images.unsplash.com/photo-1664575185263-45229279743a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'SU Hackathon',
    organizer: 'Sangam University',
    date: 'March 2026',
    location: 'Rajsthan, India',
    achievement: '3rd Rank',
    description: 'Competed with over 50 teams to design a sustainable technology solution for agricultural challenges in semi-arid regions. Focused on UI/UX and data visualization.',
    project: 'CropSphere',
    projectDesc: 'Agricultural platform powered by AI to help farmers monitor crop health and soil quality.',
    tags: ['UI/UX', 'Figma', 'React', 'Agri-Tech' , 'Node.js' , 'MongoDB' , 'Express' , 'Gemini API'],
    icon: '💡',
    github: 'https://github.com/Mahi-19-design/CropSphere',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=800'
  }
]

const Hackathons = () => {
  return (
    <section id="hackathons" className="hackathons">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Hackathon Experiences</h2>
          <p className="section-subtitle">Pushing boundaries and building fast in competitive environments</p>
        </motion.div>

        <div className="hackathons-grid">
          {hackathonsData.map((hack, index) => (
            <motion.div 
              key={hack.id} 
              className="hack-card-premium"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
            >
              <div className="hack-image-container">
                <img src={hack.image} alt={hack.title} className="hack-image" />
                <div className="hack-overlay"></div>
                <div className="hack-badge">{hack.achievement}</div>
              </div>
              
              <div className="hack-content">
              <div className="hack-header">
                <div className="hack-icon-glow">
                  {hack.icon}
                </div>
                <div className="hack-info">
                  <h3>{hack.title}</h3>
                  <div className="hack-issuer">{hack.organizer}</div>
                </div>
              </div>

              <div className="hack-meta">
                <div className="hack-meta-item">
                  <span>📅</span> {hack.date}
                </div>
                <div className="hack-meta-item">
                  <span>📍</span> {hack.location}
                </div>
              </div>

              <p className="hack-description">{hack.description}</p>

              <div className="hack-project-preview">
                <h4><span>🛠️</span> Featured Build: {hack.project}</h4>
                <p className="hack-description">{hack.projectDesc}</p>
                <div className="hack-tags">
                  {hack.tags.map((tag, i) => (
                    <span key={i} className="hack-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="hack-actions">
                <a href={hack.github} target="_blank" rel="noopener noreferrer" className="hack-btn hack-btn-primary">
                   View Code
                </a>
              </div>
            </div>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hackathons
