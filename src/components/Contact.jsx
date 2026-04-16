import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // To use EmailJS:
    // 1. npm install @emailjs/browser
    // 2. import emailjs from '@emailjs/browser'
    // 3. emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target, 'PUBLIC_KEY')
    
    alert('Thank you for your message! EmailJS integration is ready. Just add your keys!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card card">
              <h3>Let's Connect</h3>
              <p>
                I'm currently looking for internship opportunities and collaborations 
                in AI/ML projects. Feel free to reach out if you want to discuss 
                technology, AI, or potential opportunities!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>mahipatelmp019@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Unjha , Gujarat</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💼</span>
                  <span>Open to Internships</span>
                </div>
              </div>
              <div className="social-links">
                <Link to="https://leetcode.com/mahipatel019" target="_blank" rel="noopener noreferrer" className="social-link">LeetCode</Link>
                <Link to="https://github.com/Mahi-19-design" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</Link>
                <Link to="https://www.linkedin.com/in/mahi-patel-1663b8367/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</Link>
                <Link to="https://x.com/MahiPatel019" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</Link>
                <Link to="https://www.youtube.com/@MahiPatel-x3u" target="_blank" rel="noopener noreferrer" className="social-link">Youtube</Link>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="card">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
