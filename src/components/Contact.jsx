import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/contact.css'

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    if (window.emailjs) {
        window.emailjs.init("rFl_bLi102uICnCaE");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSending) return;
    setIsSending(true);

    const serviceId = 'service_5tboeqi';
    const templateId = 'template_li3wc7q';
    const publicKey = 'rFl_bLi102uICnCaE';

    window.emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
      }, (error) => {
          console.error('EmailJS Error:', error);
          alert('Failed to send message. Please try again.');
      })
      .finally(() => {
          setIsSending(false);
      });
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
                  <span className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </span>
                  <span>mahipatelmp019@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span>Unjha , Gujarat</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  </span>
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
            <form ref={formRef} onSubmit={handleSubmit} className="card">
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
              <button 
                type="submit" 
                className="btn btn-full"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
