import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../styles/youtube.css'

const MotionLink = motion(Link);

const videos = [
  {
    id: 1,
    title: 'Polkadot UI Clone',
    description: 'A frontend UI clone inspired by the Polkadot website, focusing on layout structure, animations, and responsive design.',
    thumbnail: 'https://img.youtube.com/vi/MQOqYDDhzBI/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=MQOqYDDhzBI',
    sourceCode: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/Polkadot',
    tags: ['HTML', 'CSS Animations']
  },
  {
    id: 2,
    title: 'Heart-Up My Sleeve - UI Clone',
    description: 'A frontend clone inspired by the “Heart Up My Sleeve” interface, focusing on layout structure, styling, and responsive design.',
    thumbnail: 'https://img.youtube.com/vi/COBVn3FIX68/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=COBVn3FIX68',
    sourceCode: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/heart-up-my-sleeve',
    tags: ['CSS', 'HTML']
  },
  {
    id: 3,
    title: 'CNN Official News Website',
    description: 'A frontend clone inspired by the “CNN Official News Website” interface, focusing on layout structure and responsive design.',
    thumbnail: 'https://img.youtube.com/vi/-FeaNi8HMeM/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=-FeaNi8HMeM',
    sourceCode: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/CNN',
    tags: ['CSS', 'HTML']
  },
  {
    id: 4,
    title: 'Zomato Official Website Clone',
    description: 'A frontend clone inspired by the Zomato Official Website interface, focusing on layout and component development.',
    thumbnail: 'https://img.youtube.com/vi/tLf43mv7XkU/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=tLf43mv7XkU',
    sourceCode: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/zomato',
    tags: ['CSS', 'HTML']
  },
  {
    id: 5,
    title: 'OpenAI Official Website Clone',
    description: 'A frontend clone inspired by the OpenAI Official Website interface, practicing component-based development.',
    thumbnail: 'https://img.youtube.com/vi/9BrVADK8DDg/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=9BrVADK8DDg',
    sourceCode: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/OpenAI',
    tags: ['CSS', 'HTML']
  },
  {
    id: 6,
    title: 'Modern Web Architecture',
    description: 'Discussions on modern application architectures and building scalable web products with industry standards.',
    thumbnail: 'https://img.youtube.com/vi/H_LgC5iS8E0/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=H_LgC5iS8E0',
    sourceCode: 'https://github.com/Mahi-19-design',
    tags: ['Architecture', 'Web Design']
  }
]
const getEmbedId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const YouTube = () => {
  return (
    <section id="youtube" className="youtube">
      <div className="section-glow-aura"></div>
      
      <div className="container compact-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="youtube-header"
        >
          <motion.h2 
            className="section-title"
            initial={{ letterSpacing: "10px", opacity: 0 }}
            whileInView={{ letterSpacing: "1px", opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            YouTube Channel
          </motion.h2>
          <div className="youtube-intro">
            <p>Sharing my learning journey and technical tutorials</p>
          </div>
        </motion.div>
        
        <div className="video-grid">
          {videos.map((video, index) => (
            <motion.div 
              key={video.id} 
              className="video-card card"
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8, type: "spring", stiffness: 50 }}
              whileHover={{ 
                y: -15, 
                rotateX: -5,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="video-thumbnail-container">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${getEmbedId(video.videoUrl)}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="video-iframe"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <p className="video-description">{video.description}</p>
                <div className="video-links">
                  <MotionLink 
                    to={video.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="video-link-btn icon-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                     📺 Watch
                  </MotionLink>
                  <MotionLink 
                    to={video.sourceCode} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="source-link-btn icon-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                     {"</>"} Code
                  </MotionLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="youtube-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <MotionLink 
            to="https://www.youtube.com/@MahiPatel-x3u" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-youtube"
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(0, 242, 254, 0.5)" }}
          >
             Visit My Channel
          </MotionLink>
        </motion.div>
      </div>
    </section>
  )
}


export default YouTube
