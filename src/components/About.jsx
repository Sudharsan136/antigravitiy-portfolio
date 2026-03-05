import React from 'react';
import { Code2, Globe } from 'lucide-react';

const skills = [
    { icon: <Code2 size={24} />, title: "Frontend Development", desc: "React, Next.js, Vue, TypeScript" },
    { icon: <Globe size={24} />, title: "Backend Architecture", desc: "Node.js, Python, PostgreSQL, Redis" }
];

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="section-header">
                <h2 className="section-title">About Me</h2>
                <div className="title-underline"></div>
            </div>

            <div className="about-content">
                <div className="about-text">
                    <p>
                        I am <strong>Sudharsan</strong>, a graduate in <strong>B.E. Mechanical Engineering</strong> from Paavai Engineering College. Along with my academic studies, I developed a strong interest in software development and gained solid knowledge in <strong>MERN Stack Development</strong> (MongoDB, Express.js, React.js, and Node.js).
                    </p>
                    <p>
                        I am passionate about building modern, responsive, and user-friendly web applications. Through learning and working on projects, I have gained practical experience in frontend and backend development, API integration, and creating full-stack web applications.
                    </p>
                    <p>
                        I am eager to start my career as a <strong>Full Stack Developer</strong>, where I can apply my technical skills, continue learning new technologies, and contribute to building efficient and scalable web solutions. My goal is to grow as a developer and work on impactful projects in the software industry.
                    </p>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card glass">
                            <div className="skill-icon">{skill.icon}</div>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
