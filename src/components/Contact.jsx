import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="section-header">
                <h2 className="section-title">Get In Touch</h2>
                <div className="title-underline"></div>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <h3>Let's collaborate!</h3>
                    <p className="contact-desc">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <Mail className="contact-icon" />
                            <span>sudharsanfs13@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <MapPin className="contact-icon" />
                            <span>Kumbakonam,Tamil nadu</span>
                        </div>
                        <div className="contact-item">
                            <Phone className="contact-icon" />
                            <span>+91 8248373770</span>
                        </div>
                    </div>
                </div>

                <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Sudharsan" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="john@example.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="How can I help you?" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn">
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
