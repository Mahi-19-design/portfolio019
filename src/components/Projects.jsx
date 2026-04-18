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
      image: 'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto,f_auto,w_800/v1775722921/Screenshot_2026-04-09_135047_it2wyn.png',
      icon: 'code',
      title: 'CropSphere',
      type: 'Agri-Tech Platform',
      date: 'March 2026',
      location: 'India',
      description: 'CropSphere is an innovative agricultural platform designed to empower farmers with AI-driven insights and sustainable farming solutions.',
      details: 'Built during a 48-hour hackathon, CropSphere uses machine learning models to analyze soil data and predict crop suitability. Features include a dynamic dashboard, real-time weather integration, and a community forum.',
      technologies: ["React" , "Node.js" , "Express" , "MongoDB" , "Gemini API"],
      github: 'https://github.com/Mahi-19-design/CropSphere',
      live: 'https://croppilot-su.vercel.app/'
    },
    {
      id: 2,
      category: 'Full Stack',
      image: 'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto,f_auto,w_800/v1775722902/Screenshot_2026-04-09_134957_pt9zle.png',
      icon: 'code',
      title: 'AI Resume Optimizer',
      type: 'AI Tool',
      date: 'March 2026',
      location: 'India',
      description: 'An AI-powered tool that helps job seekers optimize their resumes for ATS systems and specific job descriptions.',
      details: 'This project leverages the Gemini API to provide intelligent feedback on resume content. It analyzes keywords, structure, and impact, providing actionable suggestions to increase interview chances.',
      technologies: ["React" ,"Node.js" , "Express" , "MongoDB" , "Gemini API"],
      github: 'https://github.com/Mahi-19-design/IISC',
      live: 'https://iisc-hack.vercel.app/'
    },
    {
      id: 3,
      category: 'Clones',
      image: 'https://res.cloudinary.com/dy5jgthmt/image/upload/v1776427120/Screenshot_2026-04-17_172513_kjbfvb.png',
      icon: 'code',
      title: 'Heart-Up My Sleeve',
      type: 'E-commerce Clone',
      date: 'February 2026',
      location: 'Remote',
      description: 'A structural UI clone focusing on layout, styling, and responsive design patterns for the fashion marketplace.',
      details: 'A pixel-perfect recreation of a popular fashion marketplace UI. Focused on mastering CSS Grid, Flexbox, and responsive design patterns across various device sizes.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/heart-up-my-sleeve',
      live: 'https://mahi-heartupmysleeveclone.netlify.app/'
    },
    {
        id: 4,
      category: 'Clones',
      image: 'https://res.cloudinary.com/dy5jgthmt/image/upload/v1776427122/Screenshot_2026-04-17_172532_kmsumz.png',
      icon: 'code',
      title: 'Polkadot Clone',
      type: 'Web3 UI Clone',
      date: 'January 2026',
      location: 'Remote',
      description: 'A frontend UI clone inspired by the Polkadot website, focusing on complex animations and micro-interactions.',
      details: 'Designed to practice complex layout structures and micro-interactions. The goal was to replicate the brand identity and motion-heavy user experience of the Polkadot ecosystem.',
      technologies: ['HTML', 'CSS', 'Framer Motion'],
      github: 'https://github.com/Mahi-19-design/Cloned-projects/tree/main/Polkadot',
      live: 'https://mahi-polkadotclone.netlify.app/'
    },
    {
      id: 5,
      category: 'Frontend',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop',
      icon: 'code',
      title: 'React API Project',
      type: 'API Integration',
      date: 'December 2025',
      location: 'Remote',
      description: 'A web application demonstrating API integration and client-side routing with React Router.',
      details: 'Explores the fundamentals of Single Page Application (SPA) architecture, using React Router for navigation and the Fetch API to retrieve real-time data from public sources.',
      technologies: ['React Router' , 'Fetch API', 'CSS'],
      github: 'https://mahi-react-routing.netlify.app/',
      live: 'https://mahi-react-routing.netlify.app/'
    },
    {
      id: 6,
      category: 'Full Stack',
      image: 'https://res.cloudinary.com/dy5jgthmt/image/upload/v1776427119/Screenshot_2026-04-17_172551_ohu8ga.png',
      icon: 'code',
      title: ' FleetFlow',
      type: 'Logistics ERP',
      date: 'April 2026',
      location: 'India',
      description: 'Modular Fleet & Logistics Management System',
      details: 'FleetFlow is a centralized, rule-based digital fleet management system designed to replace inefficient manual logbooks and optimize the complete lifecycle of a delivery fleet.',
      technologies: ['React Router' , 'Fetch API', 'CSS' , 'Node.js' , 'Express' , 'MongoDB'],
      github: 'https://github.com/maharshijpatelcg-work/fleetflow_hackathon-',
      live: 'https://fleet-flow-coding-gita.netlify.app/'
    }
  ]

  const categories = ['All', 'Full Stack', 'Clones', 'Frontend']
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter || (filter === 'Full Stack' && p.category === 'Full-Stack'))

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
                className="project-card-premium"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                    <div className="project-overlay"></div>
                    <div className="project-badge">{project.category}</div>
                </div>

                <div className="project-content">
                    <div className="project-card-header">
                        <div className="project-icon-glow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <div className="project-type">{project.type}</div>
                        </div>
                    </div>

                    <div className="project-meta">
                        <div className="project-meta-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                            {project.date}
                        </div>
                        <div className="project-meta-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                            {project.location}
                        </div>
                    </div>
                    
                    <p className="project-description line-clamp-2">{project.description}</p>
                    
                    <div className="project-actions-preview">
                        <span className="view-details-txt">View Case Study & Links →</span>
                    </div>
                </div>
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
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setSelectedProject(null)} aria-label="Close modal">&times;</button>
              
              <div className="modal-scroll-node">
                <div className="project-modal-banner">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                  <div className="project-modal-badge">{selectedProject.category}</div>
                </div>

                <div className="modal-content">
                  <div className="modal-header-info">
                    <div className="modal-icon-title">
                        <div className="modal-icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                        </div>
                        <div>
                            <span className="modal-category">{selectedProject.category}</span>
                            <h2>{selectedProject.title}</h2>
                            <p className="modal-date-loc">{selectedProject.type} • {selectedProject.date}</p>
                        </div>
                    </div>
                  </div>

                  <div className="modal-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="modal-body-section">
                    <h4>Overview</h4>
                    <p className="modal-description">{selectedProject.details || selectedProject.description}</p>
                  </div>
                  
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
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                           Watch Demo Video
                        </Link>
                      )}
                      {selectedProject.postman && (
                        <Link to={selectedProject.postman} target="_blank" rel="noopener noreferrer" className="action-link-docs">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                           Postman API Documentation
                        </Link>
                      )}
                      {selectedProject.figma && (
                        <Link to={selectedProject.figma} target="_blank" rel="noopener noreferrer" className="action-link-figma">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 20 20"/></svg>
                           Figma UI Design
                        </Link>
                      )}
                    </div>
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
