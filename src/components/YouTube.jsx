import '../styles/youtube.css'

const YouTube = () => {
  const videos = [
    {
      id: 1,
      title: 'Polkadot UI Clone',
      description: 'A frontend UI clone inspired by the Polkadot website, focusing on layout structure, animations, and responsive design. This project was built to practice modern UI development and improve styling and component organization skills.',
      thumbnail: 'https://img.youtube.com/vi/MQOqYDDhzBI/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=MQOqYDDhzBI',
      sourceCode: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/Polkadot',
      tags: ['HTML', 'CSS Animations']
    },
    {
      id: 2,
      title: 'Heart-Up My Sleeve - UI Clone',
      description: 'A frontend clone inspired by the “Heart Up My Sleeve” interface, focusing on layout structure, styling, and responsive design. The project recreates the visual appearance and user flow to practice component-based UI development.',
      thumbnail: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
      sourceCode: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/heart-up-my-sleeve',
      tags: ['CSS', 'HTML']
    },
     {
      id: 3,
      title: 'CNN Official News Website',
      description: 'A frontend clone inspired by the “CNN Official News Website” interface, focusing on layout structure, styling, and responsive design. The project recreates the visual appearance and user flow to practice component-based UI development.',
      thumbnail: 'https://img.youtube.com/vi/-FeaNi8HMeM/maxresdefault.jpg', // Placeholder
      videoUrl: 'https://www.youtube.com/watch?v=-FeaNi8HMeM', // Placeholder
      sourceCode: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/CNN',
      tags: ['CSS', 'HTML']
    },
     {
      id: 4,
      title: 'Zomato Official Website Clone',
      description: 'A frontend clone inspired by the Zomato Official Website interface, focusing on layout structure, styling, and responsive design. The project recreates the visual appearance and user flow to practice component-based UI development.',
      thumbnail: 'https://img.youtube.com/vi/tLf43mv7XkU/maxresdefault.jpg', // Placeholder
      videoUrl: 'https://www.youtube.com/watch?v=tLf43mv7XkU', // Placeholder
      sourceCode: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/zomato',
      tags: ['CSS', 'HTML']
    },
     {
      id: 5,
      title: 'OpenAI Official Website Clone',
      description: 'A frontend clone inspired by the OpenAI Official Website interface, focusing on layout structure, styling, and responsive design. The project recreates the visual appearance and user flow to practice component-based UI development.',
      thumbnail: 'https://img.youtube.com/vi/9BrVADK8DDg/maxresdefault.jpg', // Placeholder
      videoUrl: 'https://www.youtube.com/watch?v=9BrVADK8DDg', // Placeholder
      sourceCode: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/OpenAI',
      tags: ['CSS', 'HTML']
    },
    {
      id: 6,
      title: 'Bitcoin Official Website Clone',
      description: 'A frontend clone inspired by the Bitcoin Official Website interface, focusing on layout structure, styling, and responsive design. The project recreates the visual appearance and user flow to practice component-based UI development.',
      thumbnail: 'https://img.youtube.com/vi/MQOqYDDhzBI/maxresdefault.jpg', // Placeholder
      videoUrl: 'https://www.youtube.com/watch?v=MQOqYDDhzBI', // Placeholder
      sourceCode: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/Bitcoin-magzine',
      tags: ['CSS', 'HTML']
    }
    
  ]

  return (
    <section id="youtube" className="youtube">
      <div className="container">
        <h2 className="section-title">YouTube Channel</h2>
        <div className="youtube-intro">
          <p>Sharing my learning journey and technical tutorials</p>
        </div>
        
        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card card">
              <div className="video-thumbnail-container">
                <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="play-button">
                  <span className="play-icon">▶</span>
                </a>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <p className="video-description">{video.description}</p>
                <div className="video-tags">
                  {video.tags.map((tag, index) => (
                    <span key={index} className="video-tag">#{tag}</span>
                  ))}
                </div>
                <div className="video-links">
                  <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="video-link-btn">
                    <span className="icon">📺</span> Watch Video
                  </a>
                  <a href={video.sourceCode} target="_blank" rel="noopener noreferrer" className="source-link-btn">
                    <span className="icon">{"</>"}</span> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="youtube-footer">
          <a href="https://www.youtube.com/@MahiPatel-x3u" target="_blank" rel="noopener noreferrer" className="btn btn-youtube">
             Visit My Channel
          </a>
        </div>
      </div>
    </section>
  )
}

export default YouTube
