import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleSignOut = () => {
        navigate('/');
    };

    return (
        <div className="login-wrapper">
            <div className="login-overlay">
                <header className="header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="logo" />

                    <div className="landing-header-actions">
                        <div className="lang-selection-container" style={{ marginTop: 0 }}>
                            <select className="lang-select">
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                        </div>
                        <button className="signin-red-btn" onClick={handleSignOut}>Sign Out</button>
                    </div>
                </header>

                <div className="hero-content">
                    <h1 className="hero-title">Unlimited movies, shows, and more</h1>
                    <p className="hero-subtitle">Starts at ₹149. Cancel at any time.</p>
                    <p className="hero-description">Ready to watch? Enter your email to create or restart your membership.</p>

                    <form className="email-signup-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="email-input-container">
                            <input
                                type="email"
                                className="email-input-landing"
                                placeholder=" "
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label className="floating-label">Email address</label>
                        </div>
                        <button type="submit" className="get-started-btn">
                            Get Started
                            <span className="curve-arrow"> &gt; </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
