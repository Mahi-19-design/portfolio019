import { motion } from 'framer-motion'
import '../styles/achievements.css'

const achievements = [
   {
    id: 1,
    title: '2nd place in IT-Project Competition',
    organization: 'Ganpath University',
    year: '2026',
    icon: '🥈',
    desc: 'Secured 2nd place(Category Best) in the IT-Project Competition, developing an innovative solution for sustainable agriculture.Competed with over 50 teams to design a sustainable technology solution for agricultural challenges in semi-arid regions. Focused on UI/UX and data visualization.'
  },
  {
    id: 2,
    title: '3rd Place in SU-Hackathon',
    organization: 'Sangam University',
    year: '2026',
    icon: '🥉',
    desc: 'Secured 3rd place in the 48-hour hackathon, developing an innovative solution for sustainable agriculture.Competed with over 50 teams to design a sustainable technology solution for agricultural challenges in semi-arid regions. Focused on UI/UX and data visualization.'
  },
  {
    id: 3,
    title: 'IISC Bangalore Hackathon Finalist',
    organization: 'IISC Bangalore',
    year: '2026',
    icon: '🚀',
    desc: 'A prestigious 48-hour national level hackathon focused on building innovative solutions using AI and emerging technologies. Collaborated in a cross-functional team to develop a proof-of-concept application within strict time constraints.'
  }
]

const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">My Achievements</h2>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="achievement-card card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="achievement-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                </div>
                <div className="achievement-info">
                  <h3>{achievement.title}</h3>
                  <div className="achievement-meta">
                    <span className="org">{achievement.organization}</span>
                    <span className="dot"></span>
                    <span className="year">{achievement.year}</span>
                  </div>
                  <p>{achievement.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
