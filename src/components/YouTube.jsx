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
                     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.781 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                     Watch
                  </MotionLink>
                  <MotionLink 
                    to={video.sourceCode} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="source-link-btn icon-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.5 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 4.1 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                     Code
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
