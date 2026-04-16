import { motion } from 'framer-motion'
import '../styles/figma.css'

const designs = [
  {
    id: 1,
    title: 'CropSphere Agricultural Dashboard',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770271507/Screenshot_2026-02-05_113444_tzdbof.png',
    link: 'https://www.figma.com/design/your-figma-link-1',
    description: 'A comprehensive dashboard design for farmers to monitor soil health and crop progress.'
  },
  {
    id: 2,
    title: 'Portfolio Modern UI Concept',
    image: 'https://res.cloudinary.com/dy5jgthmt/image/upload/v1775721803/WhatsApp_Image_2026-04-08_at_1.55.52_PM_b52jlv.jpg',
    link: 'https://www.figma.com/design/your-figma-link-2',
    description: 'Sleek, dark-themed portfolio design with glassmorphism elements.'
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
