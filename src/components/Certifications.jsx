import '../styles/certifications.css'

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'AI Tools and ChatGPT Workshop',
      issuer: 'be10x',
      date: 'December 28th, 2025',
      description: 'Successfully completed the comprehensive workshop on AI tools, including creating presentations, analyzing data, and coding and debugging using AI in record time.',
      image: 'https://res.cloudinary.com/dy5jgthmt/image/upload/v1775125932/Screenshot_2026-03-10_140105_vwsius.png',
    },
    {
      id: 2,
      title: 'Data Science & Analytics',
      issuer: 'HP LIFE Foundation',
      date: 'January 19th, 2026', 
      description: 'Learned leading data science and analytics practices, methodologies, and tools. Examined benefits and challenges of a data-driven approach for businesses.',
      image: 'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto/f_auto/v1775125987/Screenshot_2026-03-09_145730_rx62b8.png',
    },
    {
      id: 3,
      title: 'IISC ArtForge Hackathon',
      issuer: 'IISC Bangalore',
      date: 'March 2026',
      description: 'Learned leading data science and analytics practices, methodologies, and tools. Examined benefits and challenges of a data-driven approach for businesses.',
      image: 'https://res.cloudinary.com/dy5jgthmt/image/upload/v1775721803/WhatsApp_Image_2026-04-08_at_1.55.52_PM_b52jlv.jpg',
    },
    {
      id: 4,
      title: 'AI Mastermind Quiz',
      issuer: 'Vishanu Institute of Technology',
      date: 'March 2026',
      description: 'Learned leading data science and analytics practices, methodologies, and tools. Examined benefits and challenges of a data-driven approach for businesses.',
      image: 'https://res.cloudinary.com/dy5jgthmt/image/upload/q_auto/f_auto/v1775735349/quiz_yr77xo.jpg ',
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">My Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card card">
              <div className="cert-image-container">
                <img src={cert.image} alt={`${cert.title} Certificate`} className="cert-image" />
              </div>
              <div className="cert-content">
                <div className="cert-header">
                  <h3>{cert.title}</h3>
                </div>
                <div className="cert-issuer">{cert.issuer}</div>
                <div className="cert-date">Issued: {cert.date}</div>
                <p className="cert-description">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
