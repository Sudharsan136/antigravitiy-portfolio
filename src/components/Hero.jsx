import React from 'react';
import { ChevronRight } from 'lucide-react';
import profileImg from '../assets/pic.png';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <div className="badge">Web Developer</div>
                <h1 className="hero-title">
                    Hi, I'm <span className="text-gradient">Sudharsan</span>
                </h1>
                <p className="hero-subtitle">
                    I craft premium web applications focusing on exceptional design, performance, and user experience.
                </p>
                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">
                        View My Work <ChevronRight size={18} />
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Let's Talk
                    </a>
                </div>
            </div>

            <div className="hero-graphics">
                <div className="glow-orb primary"></div>
                <div className="glow-orb secondary"></div>
                <div className="hero-image-container">
                    <img src={profileImg} alt="Sudharsan" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
