import { motion } from 'framer-motion'
import '../styles/figma.css'

const designs = [
  {
    id: 1,
    title: 'Streaming Platform UI Design',
    image: 'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto/f_auto/v1776362956/Screenshot_2026-04-16_233828_xl9hme.png',
    link: 'https://www.figma.com/design/0DOsKlgOM9gjZfjJigScIo/Untitled?node-id=409-427&t=0yP3hCCBpIZvtU0z-1',
    description: 'A modern OTT-style interface inspired by platforms like Netflix, focused on seamless browsing, engaging visuals, and intuitive user experience.'
  },
  {
    id: 2,
    title: 'Portfolio Modern UI Concept',
    image: 'https://res.cloudinary.com/dy5jgthmt/image/upload/v1776363166/Screenshot_2026-04-16_234229_xbkf4a.png',
    link: 'https://www.figma.com/design/0DOsKlgOM9gjZfjJigScIo/Untitled?node-id=411-428&t=0yP3hCCBpIZvtU0z-1',
    description: 'https://res.cloudinary.com/dy5jgthmt/image/upload/v1776363166/Screenshot_2026-04-16_234229_xbkf4a.png'
  }
]

const FigmaDesigns = () => {
  return (
    <section id="figma" className="figma-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Figma Designs</h2>
          
          <div className="figma-grid">
            {designs.map((design, index) => (
              <motion.div 
                key={design.id}
                className="figma-card card"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="figma-img-wrapper">
                  <img src={design.image} alt={design.title} />
                  <div className="figma-overlay">
                    <a href={design.link} target="_blank" rel="noopener noreferrer" className="btn btn-small">View Design</a>
                  </div>
                </div>
                <div className="figma-info">
                  <h3>{design.title}</h3>
                  <p>{design.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FigmaDesigns
