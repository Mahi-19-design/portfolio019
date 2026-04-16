import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../styles/projects.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
     {
      id: 1,
      title: 'CropSphere',
      description: 'CropSphere is an innovative agricultural platform designed to empower farmers with AI-driven insights and sustainable farming solutions. The application provides personalized crop recommendations, soil health analysis, and smart irrigation guidance to help farmers maximize yields while minimizing resource usage.',
      details: 'Built during a 48-hour hackathon, CropSphere uses machine learning models to analyze soil data and predict crop suitability. Features include a dynamic dashboard, real-time weather integration, and a community forum.',
      technologies: ["React" , "Node.js" , "Express" , "MongoDB" , "Gemini API"],
      github: 'https://github.com/Mahi-19-design/CropSphere',
    },
    {
      id: 2,
      title: 'AI Resume Optimizer',
      description: 'An AI-powered tool that helps job seekers optimize their resumes for ATS systems and specific job descriptions. Uses LLMs to suggest improvements and score resume quality.',
      details: 'This project leverages the Gemini API to provide intelligent feedback on resume content. It analyzes keywords, structure, and impact, providing actionable suggestions to increase interview chances.',
      technologies: ["React" ,"Node.js" , "Express" , "MongoDB" , "Gemini API"],
      github: 'https://github.com/Mahi-19-design/IISC',
    },
    {
      id: 3,
      title: 'Heart-Up My Sleeve - UI Clone',
      description: 'A frontend clone inspired by the “Heart Up My Sleeve” interface, focusing on layout structure, styling, and responsive design.',
      details: 'A pixel-perfect recreation of a popular fashion marketplace UI. Focused on mastering CSS Grid, Flexbox, and responsive design patterns across various device sizes.',
      technologies: ['HTML', 'CSS'],
      github: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/heart-up-my-sleeve',
      live: 'https://mahi-heartupmysleeveclone.netlify.app/'
    },
    {
      id: 4,
      title: 'Polkadot - UI Clone',
      description: 'A frontend UI clone inspired by the Polkadot website, focusing on layout structure, animations, and responsive design.',
      details: 'Designed to practice complex layout structures and micro-interactions. The goal was to replicate the brand identity and motion-heavy user experience of the Polkadot ecosystem.',
      technologies: ['HTML', 'CSS'],
      github: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/Polkadot',
      live: 'https://mahi-polkadotclone.netlify.app/'
    },
    {
      id: 5,
      title: 'React-Routing & API Project',
      description: 'A web application demonstrating API integration and client-side routing. Fetches and displays data from external sources.',
      details: 'Explores the fundamentals of Single Page Application (SPA) architecture, using React Router for navigation and the Fetch API to retrieve real-time data from public sources.',
      technologies: ['CSS' , 'React'],
      github: 'https://mahi-react-routing.netlify.app/',
      live: 'https://mahi-react-routing.netlify.app/'
    },
    {
      id: 6,
      title: 'Movie API',
      description: 'A movie discovery platform that allows users to search movies in real time and view detailed info.',
      details: 'Integrates with public movie databases to provide search results, ratings, and detailed descriptions. Features a responsive grid layout and smooth image loading.',
      technologies: ['API Integration', 'HTML', 'CSS' , 'JavaScript'],
      github: 'https://github.com/Mahi-19-design/Movie-API-Project',
      live: 'https://app.netlify.com/projects/m019/overview'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card card"
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && <span className="tech-tag">+{project.technologies.length - 3}</span>}
              </div>
              <button className="view-details-btn">View Details</button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <motion.div 
              className="project-modal card"
              layoutId={`card-${selectedProject.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setSelectedProject(null)}>&times;</button>
              
              <div className="modal-content">
                <h2>{selectedProject.title}</h2>
                <div className="modal-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <p className="modal-description">{selectedProject.details || selectedProject.description}</p>
                
                <div className="modal-links">
                  <Link to={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn">
                    View Code
                  </Link>
                  {selectedProject.live && (
                    <Link to={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      Live Preview
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects

