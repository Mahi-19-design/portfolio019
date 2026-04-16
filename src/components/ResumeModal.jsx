import { motion, AnimatePresence } from 'framer-motion'
import '../styles/resume-modal.css'

const ResumeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <AnimatePresence>
            <motion.div 
                className="resume-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div 
                    className="resume-modal-content"
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="resume-modal-header">
                        <h3>Mahi Patel - Resume</h3>
                        <button className="close-btn" onClick={onClose} aria-label="Close modal">
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            </svg>
                        </button>
                    </div>
                    
                    <div className="resume-iframe-container">
                        <iframe 
                            src="/Mahi_Patel_Resume.pdf#toolbar=0" 
                            title="Mahi Patel Resume"
                            type="application/pdf"
                            className="resume-iframe"
                        ></iframe>
                    </div>
                    
                    <div className="resume-modal-footer">
                        <p>Use the controls above to zoom or print the resume.</p>
                        <button className="btn btn-small" onClick={onClose}>Close</button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default ResumeModal
