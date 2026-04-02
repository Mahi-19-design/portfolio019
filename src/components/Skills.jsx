import '../styles/skills.css'

const Skills = () => {
  const skills = [
    // Programming Languages
    { name: 'Python', logo: '🐍', category: 'language' },
    { name: 'C', logo: '🔧', category: 'language' },
    { name: 'C++', logo: '⚙️', category: 'language' },
    { name: 'JavaScript', logo: '📜', category: 'language' },
    
    // Web Technologies
    { name: 'HTML', logo: '🌐', category: 'web' },
    { name: 'CSS', logo: '🎨', category: 'web' },
    { name: 'React', logo: '⚛️', category: 'web' },
    { name: 'Node.js', logo: '🟢', category: 'web' },
    
    // Design & Tools
    { name: 'Figma', logo: '🎯', category: 'design' },
    { name: 'UI Design', logo: '✨', category: 'design' },
    { name: 'UX Design', logo: '🧠', category: 'design' },
    { name: 'GitHub', logo: '🐙', category: 'tools' },
    { name: 'Postman', logo: '📮', category: 'tools' },
  ]

  // Group skills by category
  const categorizedSkills = {
    'Programming Languages': skills.filter(skill => skill.category === 'language'),
    'Web Technologies': skills.filter(skill => skill.category === 'web'),
    'Design & Tools': skills.filter(skill => skill.category === 'design' || skill.category === 'tools'),
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-intro">
          <p>A curated selection of technologies and tools I work with</p>
        </div>
        
        <div className="skills-categories">
          {Object.entries(categorizedSkills).map(([category, categorySkills], index) => (
            <div key={index} className="skill-category card">
              <h3 className="category-title">
                <span className="category-icon">{getCategoryIcon(category)}</span>
                {category}
              </h3>
              <div className="skills-grid">
                {categorySkills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-content">
                      <div className="skill-logo">
                        {skill.logo}
                      </div>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

// Helper function to get category icons
const getCategoryIcon = (category) => {
  switch(category) {
    case 'Programming Languages': return '💻'
    case 'Web Technologies': return '🌐'
    case 'Design & Tools': return '🎨'
    default: return '🛠️'
  }
}



export default Skills
