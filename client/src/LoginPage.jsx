import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from './config';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (error) setError('');
    };

    const validate = () => {
        if (!formData.email) return 'Please enter a valid email or phone number.';
        if (!formData.password) return 'Your password must contain between 4 and 60 characters.';
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validate();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        try {
            const payload = {
                email: formData.email.trim(),
                password: formData.password.trim()
            };
            const response = await axios.post(`${API_URL}/api/login`, payload);
            if (response.status === 200) {
                setTimeout(() => {
                    navigate('/dashboard', { state: { user: response.data.user } });
                }, 500);
            }
        } catch (err) {
            const msg = err.response?.data?.message || 'Something went wrong. Please try again.';
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-overlay">
                <header className="header">
                    <h1 className="logo-text">Netflicx</h1>
                </header>

                <div className="login-container">
                    <h1 className="login-title">Sign In</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                name="email"
                                className="form-control"
                                placeholder=" "
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <label className="floating-label">Email or mobile number</label>
                        </div>

                        <div className="input-group">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder=" "
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <label className="floating-label">Password</label>
                        </div>

                        {error && <div className="error-msg">{error}</div>}

                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>

                        <div className="or-separator">
                            <span className="or-text">OR</span>
                        </div>

                        <button type="button" className="btn-signin-code">Use a sign-in code</button>

                        <a href="#" className="forgot-password">Forgot password?</a>

                        <div className="login-help">
                            <label>
                                <input type="checkbox" defaultChecked /> Remember me
                            </label>
                        </div>
                    </form>

                    <div className="signup-now">
                        New to Netflicx? <span style={{ color: '#fff' }}>Sign up now.</span>
                        <div style={{ fontSize: '13px', marginTop: '10px', color: '#8c8c8c' }}>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.
                            <span style={{ color: '#0071eb', cursor: 'pointer' }}> Learn more.</span>
                        </div>
                    </div>
                </div>

                {/* Disclaimer between form and footer */}
                <p className="disclaimer">
                    Disclaimer: Educational Netflix UI Clone – Demo Only – Does NOT log in to Netflix.
                </p>

                {/* Footer Section - Outside the login container but inside the overlay wrapper */}
                <div className="site-footer-wrapper">
                    <div className="footer-content">
                        <div className="footer-top">Questions? Call 000-800-919-1743 (Toll-Free)</div>
                        <ul className="footer-link-grid">
                            <li><a href="#" className="footer-link">FAQ</a></li>
                            <li><a href="#" className="footer-link">Help Centre</a></li>
                            <li><a href="#" className="footer-link">Terms of Use</a></li>
                            <li><a href="#" className="footer-link">Privacy</a></li>
                            <li><a href="#" className="footer-link">Cookie Preferences</a></li>
                            <li><a href="#" className="footer-link">Corporate Information</a></li>
                        </ul>
                        <div className="lang-selection-container">
                            <select className="lang-select">
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
