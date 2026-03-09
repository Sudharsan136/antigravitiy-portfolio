import React from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="navbar glass">
            <div className="logo cursor-glow">Sudharsan Portfolio</div>

            {/* Desktop Nav */}
            <nav className="desktop-nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Work</a>
                <a href="#contact">Contact</a>
            </nav>

            {/* Social / Extra Info */}
            <div className="nav-socials">
                <a href="https://github.com/Sudharsan136" target="_blank" rel="noreferrer"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/sudharsan-m-760916290/" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
            </div>

            {/* Mobile Toggle */}
            <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu glass">
                    <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>Work</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
