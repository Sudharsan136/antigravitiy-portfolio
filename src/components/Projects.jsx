import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack MERN e-commerce app with product listing, cart management, and user authentication. Deployed on Vercel with a clean, responsive UI.",
        category: "Full Stack",
        techStack: ["MongoDB", "Express", "React", "Node.js"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
        links: { github: "https://github.com/Sudharsan136/Ecom", live: "https://vercel.com/sudharsans-projects-9498e43a/ecom/3ALUXMs2oLfEQ9cKrDKAj3qGY1Dx" }
    },
    {
        id: 2,
        title: "Greenden",
        description: "A stylish plant e-commerce landing page built with Tailwind CSS. Features a responsive design with product cards, smooth navigation, and a modern green aesthetic.",
        category: "Frontend",
        techStack: ["HTML", "Tailwind CSS", "JavaScript"],
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800",
        links: { github: "https://github.com/Sudharsan136/Greenden-tailwindcss", live: "https://sudharsan136.github.io/Greenden-tailwindcss/" }
    },
    {
        id: 3,
        title: "TMDB Movie App",
        description: "A React application that fetches and displays real-time movie data using the TMDB API via Axios. Browse popular movies, view details, and explore by genre.",
        category: "React & API",
        techStack: ["React", "Axios", "TMDB API", "CSS"],
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800",
        links: { github: "https://github.com/Sudharsan136/MovieTMDB", live: "https://movie-tmdb-one.vercel.app/" }
    },
    {
        id: 4,
        title: "Nostra",
        description: "A pixel-perfect clone of the Nostra e-commerce website, showcasing strong HTML & CSS fundamentals with a focus on layout, typography, and dark-themed aesthetics.",
        category: "Frontend",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800",
        links: { github: "https://github.com/Sudharsan136/nostra-clone", live: "#" }
    },
    {
        id: 5,
        title: "Apple Clone",
        description: "A responsive clone of the Apple product page with a minimalist design, smooth animations, and an attention to detail that reflects Apple's premium branding.",
        category: "Frontend",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
        links: { github: "https://github.com/Sudharsan136/Applesimpleclone", live: "https://vercel.com/sudharsans-projects-9498e43a/applesimpleclone/GAfSzGFE8QV2ph6wC6SKX3ASptyC" }
    },
    {
        id: 6,
        title: "Udemy Clone",
        description: "A front-end clone of the Udemy learning platform, built to replicate its course browsing experience with category filters, course cards, and a responsive navbar.",
        category: "Frontend",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
        links: { github: "https://github.com/Sudharsan136/udemyclonegit", live: "https://sudharsan136.github.io/udemyclonegit/" }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="section-header">
                <h2 className="section-title">Selected Work</h2>
                <div className="title-underline"></div>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub Repository">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-info">
                            <span className="project-category">{project.category}</span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-tech">
                                {project.techStack.map((tech, index) => (
                                    <span key={index} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
