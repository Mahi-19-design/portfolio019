import '../styles/projects.css'

const Projects = () => {
  const projects = [
    {
      id: 6,
      title: 'Movie API',
      description: 'A movie discovery platform that allows users to search movies in real time using a public movie API and view detailed information including plot, rating, release year, and posters.',
      technologies: ['API Integration', 'HTML', 'CSS' , 'JavaScript'],
      github: 'https://github.com/Mahi-19-design/Movie-API-Project',
      live: 'https://app.netlify.com/projects/m019/overview'
    },
    {
      id: 5,
      title: 'React-Routing & API Project',
      description: 'A basic web application demonstrating API integration and client-side routing. The project fetches data from an external API and uses routing to navigate between multiple pages without reloading, showcasing core concepts of modern single-page applications.',
      technologies: ['CSS' , 'React'],
      github: 'https://mahi-react-routing.netlify.app/',
      live: 'https://mahi-react-routing.netlify.app/'
    },
    {
      id: 3,
      title: 'Heart-Up My Sleeve - UI Clone',
      description: 'A frontend clone inspired by the “Heart Up My Sleeve” interface, focusing on layout structure, styling, and responsive design. The project recreates the visual appearance and user flow to practice component-based UI development.',
      technologies: ['HTML', 'CSS'],
      github: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/heart-up-my-sleeve',
      live: 'https://mahi-heartupmysleeveclone.netlify.app/'
    },
    {
      id: 4,
      title: 'Polkadot - UI Clone',
      description: 'A frontend UI clone inspired by the Polkadot website, focusing on layout structure, animations, and responsive design. This project was built to practice modern UI development and improve styling and component organization skills.This is just a static website that i built with HTML and CSS.',
      technologies: ['HTML', 'CSS'],
      github: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/Polkadot',
      live: 'https://mahi-polkadotclone.netlify.app/'
    },
     {
      id: 2,
      title: 'AI Resume Optimizer',
      description: 'Our Hackathon project inspired to build an AI resume optizimer through which the user can upload their resume and get it optimized by the AI.This helps the job seeker in building a good resume.It reduces the time taken to build a resume.  ',
      technologies: ["React" ,"Node.js" , "Express" , "MongoDB" , "Gemini API"],
      github: 'https://github.com/Mahi-19-design/IISC',
    },
     {
      id: 1,
      title: 'CropSphere',
      description: 'CropSphere is an innovative agricultural platform designed to empower farmers with AI-driven insights and sustainable farming solutions. The application provides personalized crop recommendations, soil health analysis, and smart irrigation guidance to help farmers maximize yields while minimizing resource usage.',
      technologies: ["React" , "Node.js" , "Express" , "MongoDB" , "Gemini API"],
      github: 'https://github.com/Mahi-19-design/CropSphere',
     
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link">
                  <span className="link-icon">{"</>"}</span>
                  Code
                </a>
                <a href={project.live} className="project-link">
                  <span className="link-icon">🚀</span>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
