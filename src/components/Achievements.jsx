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
                <div className="achievement-icon">{achievement.icon}</div>
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
