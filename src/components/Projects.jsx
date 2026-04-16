import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../styles/projects.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('All')

  const projects = [
     {
      id: 1,
      category: 'Full Stack',
      icon: '🌐',
      title: 'CropSphere',
      description: 'CropSphere is an innovative agricultural platform designed to empower farmers with AI-driven insights and sustainable farming solutions.',
      details: 'Built during a 48-hour hackathon, CropSphere uses machine learning models to analyze soil data and predict crop suitability. Features include a dynamic dashboard, real-time weather integration, and a community forum.',
      technologies: ["React" , "Node.js" , "Express" , "MongoDB" , "Gemini API"],
      github: 'https://github.com/Mahi-19-design/CropSphere',
      live: 'https://croppilot-su.vercel.app/'
    },
    {
      id: 2,
      category: 'Full Stack',
      icon: '📄',
      title: 'AI Resume Optimizer',
      description: 'An AI-powered tool that helps job seekers optimize their resumes for ATS systems and specific job descriptions.',
      details: 'This project leverages the Gemini API to provide intelligent feedback on resume content. It analyzes keywords, structure, and impact, providing actionable suggestions to increase interview chances.',
      technologies: ["React" ,"Node.js" , "Express" , "MongoDB" , "Gemini API"],
      github: 'https://github.com/Mahi-19-design/IISC',
      live: 'https://iisc-hack.vercel.app/'
    },
    {
      id: 3,
      category: 'Clones',
      icon: '🛍️',
      title: 'Heart-Up My Sleeve',
      description: 'A structural UI clone focusing on layout, styling, and responsive design patterns for the fashion marketplace.',
      details: 'A pixel-perfect recreation of a popular fashion marketplace UI. Focused on mastering CSS Grid, Flexbox, and responsive design patterns across various device sizes.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/heart-up-my-sleeve',
      live: 'https://mahi-heartupmysleeveclone.netlify.app/'
    },
    {
        id: 4,
      category: 'Clones',
      icon: '🧬',
      title: 'Polkadot Clone',
      description: 'A frontend UI clone inspired by the Polkadot website, focusing on complex animations and micro-interactions.',
      details: 'Designed to practice complex layout structures and micro-interactions. The goal was to replicate the brand identity and motion-heavy user experience of the Polkadot ecosystem.',
      technologies: ['HTML', 'CSS', 'Framer Motion'],
      github: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/Polkadot',
      live: 'https://mahi-polkadotclone.netlify.app/'
    },
    {
      id: 5,
      category: 'Frontend',
      icon: '🔗',
      title: 'React API Project',
      description: 'A web application demonstrating API integration and client-side routing with React Router.',
      details: 'Explores the fundamentals of Single Page Application (SPA) architecture, using React Router for navigation and the Fetch API to retrieve real-time data from public sources.',
      technologies: ['React Router' , 'Fetch API', 'CSS'],
      github: 'https://mahi-react-routing.netlify.app/',
      live: 'https://mahi-react-routing.netlify.app/'
    },
    {
      id: 6,
      category: 'Full-Stack',
      icon: '🚛 ',
      title: ' FleetFlow',
      description: 'Modular Fleet & Logistics Management System',
      details: 'FleetFlow is a centralized, rule-based digital fleet management system designed to replace inefficient manual logbooks and optimize the complete lifecycle of a delivery fleet. It provides structured workflow management for vehicles, drivers, dispatching, maintenance, financial tracking, and analytics — all within a modular ERP-style architecture.',
      technologies: ['React Router' , 'Fetch API', 'CSS' , 'Node.js' , 'Express' , 'MongoDB'],
      github: 'https://github.com/maharshijpatelcg-work/fleetflow_hackathon-',
      live: 'https://fleet-flow-coding-gita.netlify.app/'
    }
  ]

  const categories = ['All', 'Full Stack', 'Clones', 'Frontend']
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          className="projects-grid"
          layout
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id} 
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-category-tag">{project.category}</div>
                
                <div className="project-card-icon">{project.icon}</div>
                
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
                
                <button className="view-details-btn">
                  View Case Study
                  <span className="btn-arrow">→</span>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <motion.div 
              className="project-modal card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setSelectedProject(null)}>&times;</button>
              
              <div className="modal-content">
                <div className="modal-header-info">
                  <span className="modal-category">{selectedProject.category}</span>
                  <h2>{selectedProject.title}</h2>
                </div>

                <div className="modal-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <p className="modal-description">{selectedProject.details || selectedProject.description}</p>
                
                <div className="modal-cta-group">
                  <div className="modal-links">
                    <Link to={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      GitHub Repository
                    </Link>
                    {selectedProject.live && (
                      <Link to={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        Live Preview
                      </Link>
                    )}
                  </div>
                  
                  <div className="modal-secondary-actions">
                     {selectedProject.demo && (
                      <Link to={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="action-link-youtube">
                         Watch Demo Video
                      </Link>
                    )}
                    {selectedProject.postman && (
                      <Link to={selectedProject.postman} target="_blank" rel="noopener noreferrer" className="action-link-docs">
                         Postman API Documentation
                      </Link>
                    )}
                    {selectedProject.figma && (
                      <Link to={selectedProject.figma} target="_blank" rel="noopener noreferrer" className="action-link-figma">
                         Figma UI Design
                      </Link>
                    )}
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

export default Projects
