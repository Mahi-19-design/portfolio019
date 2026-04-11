import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/leetcode.css'

const LeetCode = () => {
    // Default placeholder stats while fetching or as fallback
    const [stats, setStats] = useState({
        totalSolved: 150,
        easySolved: 80,
        mediumSolved: 60,
        hardSolved: 10,
        totalQuestions: 3000,
        easyTotal: 800,
        mediumTotal: 1600,
        hardTotal: 600,
        ranking: 500000,
        contributionPoints: 1200
    });

    const username = "mahipatel019"; // USER: Change this to your actual LeetCode username

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
                const data = await response.json();
                if (data.status === "success") {
                    setStats(data);
                }
            } catch (error) {
                console.error("Error fetching LeetCode stats:", error);
            }
        };

        fetchStats();
    }, [username]);

    const easyProgress = (stats.easySolved / stats.easyTotal) * 100;
    const mediumProgress = (stats.mediumSolved / stats.mediumTotal) * 100;
    const hardProgress = (stats.hardSolved / stats.hardTotal) * 100;

    return (
        <section id="leetcode" className="leetcode-section">
            <div className="container">
                <motion.div 
                    className="leetcode-container"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="leetcode-card-premium">
                        <div className="leetcode-header">
                            <div className="lc-brand">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="lc-logo" />
                                <h3>LeetCode</h3>
                            </div>
                            <div className="lc-user-badge">@{username}</div>
                        </div>

                        <div className="leetcode-stats-grid">
                            <div className="lc-progress-circle">
                                <svg width="200" height="200" viewBox="0 0 200 200">
                                    <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                                    <motion.circle 
                                        cx="100" cy="100" r="90" 
                                        fill="none" 
                                        stroke="#ffa116" 
                                        strokeWidth="10" 
                                        strokeDasharray="565.48"
                                        initial={{ strokeDashoffset: 565.48 }}
                                        whileInView={{ strokeDashoffset: 565.48 * (1 - stats.totalSolved / 3000) }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2, ease: "easeOut" }}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="lc-progress-info">
                                    <span className="lc-solved-count">{stats.totalSolved}</span>
                                    <span className="lc-total-label">Solved</span>
                                </div>
                            </div>

                            <div className="lc-category-stats">
                                <div className="category-row">
                                    <div className="category-info">
                                        <span className="category-name easy">Easy</span>
                                        <span className="category-count">{stats.easySolved} / {stats.easyTotal}</span>
                                    </div>
                                    <div className="progress-bar-bg">
                                        <motion.div 
                                            className="progress-bar-fill" 
                                            style={{ backgroundColor: '#00b8a3', width: `${easyProgress}%` }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${easyProgress}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        />
                                    </div>
                                </div>

                                <div className="category-row">
                                    <div className="category-info">
                                        <span className="category-name medium">Medium</span>
                                        <span className="category-count">{stats.mediumSolved} / {stats.mediumTotal}</span>
                                    </div>
                                    <div className="progress-bar-bg">
                                        <motion.div 
                                            className="progress-bar-fill" 
                                            style={{ backgroundColor: '#ffc01e', width: `${mediumProgress}%` }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${mediumProgress}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.7 }}
                                        />
                                    </div>
                                </div>

                                <div className="category-row">
                                    <div className="category-info">
                                        <span className="category-name hard">Hard</span>
                                        <span className="category-count">{stats.hardSolved} / {stats.hardTotal}</span>
                                    </div>
                                    <div className="progress-bar-bg">
                                        <motion.div 
                                            className="progress-bar-fill" 
                                            style={{ backgroundColor: '#ef4743', width: `${hardProgress}%` }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${hardProgress}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.9 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lc-footer">
                            <Link to={`https://leetcode.com/${username}`} target="_blank" rel="noopener noreferrer" className="lc-btn">
                                <span>🚀</span> View Full Profile
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LeetCode;
