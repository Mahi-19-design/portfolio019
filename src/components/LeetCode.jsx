
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/leetcode.css'

const LeetCode = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [stats, setStats] = useState({
        totalSolved: 0,
        easySolved: 0,
        mediumSolved: 0,
        hardSolved: 0,
        totalQuestions: 3000,
        easyTotal: 800,
        mediumTotal: 1600,
        hardTotal: 600,
        ranking: 0,
        contributionPoints: 0
    });

    const username = "mahipatel019";

    const fetchStats = async () => {
        setLoading(true);
        setError(false);
        try {
            const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
            const data = await response.json();
            if (data.status === "success") {
                setStats(data);
                setError(false);
            } else {
                setError(true);
            }
        } catch (error) {
            console.error("Error fetching LeetCode stats:", error);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStats();
    }, [username]);

    const easyProgress = stats.easyTotal ? (stats.easySolved / stats.easyTotal) * 100 : 0;
    const mediumProgress = stats.mediumTotal ? (stats.mediumSolved / stats.mediumTotal) * 100 : 0;
    const hardProgress = stats.hardTotal ? (stats.hardSolved / stats.hardTotal) * 100 : 0;
    const totalProgress = stats.totalQuestions ? (stats.totalSolved / stats.totalQuestions) * 100 : 0;

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
                                <h3>LeetCode Data</h3>
                            </div>
                            <div className="lc-user-badge">@{username}</div>
                        </div>

                        {loading ? (
                            <div className="lc-loading">
                                <div className="lc-spinner"></div>
                                <p>Syncing real-time data...</p>
                            </div>
                        ) : error ? (
                            <div className="lc-error">
                                <p>Failed to sync real-time data.</p>
                                <button onClick={fetchStats} className="lc-refresh-btn">Try Again</button>
                            </div>
                        ) : (
                            <div className="leetcode-stats-wrapper">
                                <div className="leetcode-stats-grid">
                                    <div className="lc-progress-circle">
                                        <svg width="220" height="220" viewBox="0 0 200 200">
                                            <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                                            <motion.circle 
                                                cx="100" cy="100" r="90" 
                                                fill="none" 
                                                stroke="var(--accent-primary)" 
                                                strokeWidth="10" 
                                                strokeDasharray="565.48"
                                                initial={{ strokeDashoffset: 565.48 }}
                                                animate={{ strokeDashoffset: 565.48 * (1 - totalProgress / 100) }}
                                                transition={{ duration: 2.5, ease: "circOut" }}
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="lc-progress-info">
                                            <span className="lc-solved-count">{stats.totalSolved}</span>
                                            <span className="lc-total-label">/{stats.totalQuestions}</span>
                                            <span className="lc-tag">Solved</span>
                                        </div>
                                    </div>

                                    <div className="lc-category-stats">
                                        {[
                                            { name: 'Easy', solved: stats.easySolved, total: stats.easyTotal, color: '#00b8a3', progress: easyProgress },
                                            { name: 'Medium', solved: stats.mediumSolved, total: stats.mediumTotal, color: '#ffc01e', progress: mediumProgress },
                                            { name: 'Hard', solved: stats.hardSolved, total: stats.hardTotal, color: '#ef4743', progress: hardProgress }
                                        ].map((cat, i) => (
                                            <div className="category-row" key={i}>
                                                <div className="category-info">
                                                    <span className={`category-name ${cat.name.toLowerCase()}`}>{cat.name}</span>
                                                    <span className="category-count">
                                                        <strong>{cat.solved}</strong> <span className="slash">/</span> {cat.total}
                                                    </span>
                                                </div>
                                                <div className="progress-bar-bg">
                                                    <motion.div 
                                                        className="progress-bar-fill" 
                                                        style={{ backgroundColor: cat.color }}
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${cat.progress}%` }}
                                                        transition={{ duration: 1.5, delay: 0.3 + (i * 0.2) }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="lc-extra-stats">
                                    <div className="extra-stat-item">
                                        <span className="label">Ranking</span>
                                        <span className="value">#{stats.ranking.toLocaleString()}</span>
                                    </div>
                                    <div className="extra-stat-separator"></div>
                                    <div className="extra-stat-item">
                                        <span className="label">Points</span>
                                        <span className="value">{stats.contributionPoints}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="lc-footer">
                            <Link to={`https://leetcode.com/${username}`} target="_blank" rel="noopener noreferrer" className="lc-btn">
                                🚀 View Live Profile
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LeetCode;
