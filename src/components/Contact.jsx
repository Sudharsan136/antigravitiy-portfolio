import React, { useState, useRef } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const BACKEND_URL = '/api/contact';

const Contact = () => {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMsg('');

        try {
            const res = await fetch(BACKEND_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong.');
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error('Contact error:', err);
            setErrorMsg(err.message || 'Failed to send. Please try again.');
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="section-header">
                <h2 className="section-title">Get In Touch</h2>
                <div className="title-underline"></div>
            </div>

            <div className="contact-container">
                {/* ── Left: info panel ── */}
                <div className="contact-info">
                    <h3>Let's collaborate!</h3>
                    <p className="contact-desc">
                        I'm currently looking for new opportunities. Whether you have a question
                        or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-details">
                        <a
                            href="mailto:sudharsanfs13@gmail.com"
                            className="contact-item"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <Mail className="contact-icon" />
                            <span>sudharsanfs13@gmail.com</span>
                        </a>
                        <div className="contact-item">
                            <MapPin className="contact-icon" />
                            <span>Kumbakonam, Tamil Nadu</span>
                        </div>
                        <div className="contact-item">
                            <Phone className="contact-icon" />
                            <span>+91 8248373770</span>
                        </div>
                    </div>
                </div>

                <form ref={formRef} className="contact-form glass" onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="recipient">To</label>
                        <input
                            type="email"
                            id="recipient"
                            value="sudharsanfs13@gmail.com"
                            disabled
                            className="disabled-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="How can I help you?"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* ── Status feedback ── */}
                    {status === 'success' && (
                        <div className="form-feedback form-success">
                            <CheckCircle size={18} />
                            <span>Message sent! I'll get back to you soon. ✌️</span>
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="form-feedback form-error">
                            <AlertCircle size={18} />
                            <span>{errorMsg}</span>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? (
                            <>Sending… <Loader size={18} className="spin" /></>
                        ) : (
                            <>Send Message <Send size={18} /></>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
