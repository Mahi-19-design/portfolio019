import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../styles/hackathons.css'

const hackathonsData = [
  {
    id: 1,
    title: 'ArtPart CodeForge Hackathon',
    organizer: 'IISC Bangalore',
    date: 'March 2026',
    location: 'Bangalore, India',
    achievement: 'Participant',
    description: 'A prestigious 48-hour national level hackathon focused on building innovative solutions using AI and emerging technologies. Collaborated in a cross-functional team to develop a proof-of-concept application within strict time constraints.',
    project: 'AI Resume Optimizer',
    projectDesc: 'An intelligent platform that analyzes resumes against job descriptions to provide real-time optimization suggestions.',
    tags: ['React', 'Gemini API', 'Node.js', 'Prototyping' , 'Express' , 'MongoDB' ],
    icon: '🚀',
    github: 'https://github.com/Mahi-19-design/IISC',
    image: 'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto,f_auto,w_800/v1775722902/Screenshot_2026-04-09_134957_pt9zle.png',
    gallery: [
      'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto,f_auto,w_800/v1775721803/WhatsApp_Image_2026-04-08_at_1.55.52_PM_b52jlv.jpg',
      'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto,f_auto,w_800/v1775735349/quiz_yr77xo.jpg'
    ]
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
    image: 'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto,f_auto,w_800/v1775722921/Screenshot_2026-04-09_135047_it2wyn.png',
    gallery: [
      'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto,f_auto,w_600/v1776361708/Screenshot_2026-04-16_231806_molr6q.png',
      'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto,f_auto,w_600/v1776361709/733f9e94-3a86-47fa-8c32-659152762981_l5uaou.jpg',
      'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto,f_auto,w_600/v1776361709/f163bfd7-d1c8-4687-aafd-18dbbaf4adf6_fd76c4.jpg',
      'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto,f_auto,w_600/v1776361709/d6e4bbad-e19a-40ae-9110-6a3168b243c7_kstgm5.jpg',
      'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto,f_auto,w_600/v1776361708/Screenshot_2026-04-16_231752_i1uvjg.png',
      'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto,f_auto,w_600/v1776361708/Screenshot_2026-04-16_231800_todnog.png'
    ]
  },
  {
    id: 3,
    title: 'IT-Project Competition',
    organizer: 'Ganpath University',
    date: 'April 2026',
    location: 'Ahmedabad, India',
    achievement: '2nd Rank [Category Best]',
    description: 'Competed with over 20 teams to design a sustainable technology solution for agricultural challenges in semi-arid regions. Focused on UI/UX and data visualization.',
    project: 'CropSphere',
    projectDesc: 'Agricultural platform powered by AI to help farmers monitor crop health and soil quality.',
    tags: ['UI/UX', 'Figma', 'React', 'Agri-Tech' , 'Node.js' , 'MongoDB' , 'Express' , 'Gemini API'],
    icon: '💡',
    github: 'https://github.com/Mahi-19-design/CropSphere',
    image: 'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto,f_auto,w_800/v1775722921/Screenshot_2026-04-09_135047_it2wyn.png',
    gallery: [
      'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto,f_auto,w_600/v1776362005/a6c0dd04-bb3b-4e65-a7af-2643aecb80c3_neukug.jpg',
      'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto,f_auto,w_600/v1776362005/3a6a145d-6d3e-4b58-8df1-f14019b56ac6_u1hhg5.jpg',
      'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto,f_auto,w_600/v1776362005/31deb417-b57a-4e15-bc33-c34b94e1083f_cwtzbc.jpg'
    ]
  }
]

const Hackathons = () => {
  const [selectedHack, setSelectedHack] = useState(null)

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
              onClick={() => setSelectedHack(hack)}
              style={{ cursor: 'pointer' }}
            >
              <div className="hack-image-container">
                <img src={hack.image} alt={hack.title} className="hack-image" loading="lazy" />
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

                <p className="hack-description line-clamp-3">{hack.description}</p>
                
                <div className="hack-actions-preview">
                  <span className="view-details-txt">View Case Study & Gallery →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedHack && (
          <div className="modal-overlay" onClick={() => setSelectedHack(null)}>
            <motion.div 
              className="hack-modal card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setSelectedHack(null)} aria-label="Close modal">&times;</button>
              
              <div className="modal-scroll-node">
                <div className="hack-modal-banner">
                  <img src={selectedHack.image} alt={selectedHack.title} />
                  <div className="hack-modal-badge">{selectedHack.achievement}</div>
                </div>

                <div className="hack-modal-content">
                  <div className="hack-modal-header">
                    <div className="hack-icon-large">{selectedHack.icon}</div>
                    <div className="hack-title-block">
                      <h2>{selectedHack.title}</h2>
                      <p className="hack-organizer">{selectedHack.organizer} • {selectedHack.date}</p>
                    </div>
                  </div>

                  <div className="hack-modal-body">
                    <div className="hack-section-block">
                      <h4>Experience Summary</h4>
                      <p>{selectedHack.description}</p>
                    </div>

                    <div className="hack-section-block project-highlight">
                      <h4><span>🛠️</span> Featured Build: {selectedHack.project}</h4>
                      <p>{selectedHack.projectDesc}</p>
                      <div className="hack-tags">
                        {selectedHack.tags.map((tag, i) => (
                          <span key={i} className="hack-tag">{tag}</span>
                        ))}
                      </div>
                    </div>

                    {selectedHack.gallery && (
                      <div className="hack-section-block gallery-block">
                        <h4><span>📸</span> Competition Gallery</h4>
                        <div className="hack-modal-gallery">
                          {selectedHack.gallery.map((photo, i) => (
                            <div key={i} className="gallery-img-wrapper" onClick={() => window.open(photo, '_blank')} role="button" aria-label="View full image">
                              <img src={photo} alt="Event moment" loading="lazy" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="hack-modal-footer">
                    <Link to={selectedHack.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      View Project Repository
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hackathons
