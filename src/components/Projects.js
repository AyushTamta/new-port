import React, { useState, useEffect } from 'react';
import './Projects.css';
import project1Image from './astro.png';
import project2Image from './astro2.png';
import project3Image from './astro3.png';
import project4Image from './astro4.png';



function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    const projects = [
        {
            id: 1,
            title: 'Uni-Dialect.AI',
            description: 'An Artificial Intelligence powered web-app that tells you details of your invoice, not in just one language, but in multiple.',
            link: 'https://project1.com',
            image: project1Image,
        },
        {
            id: 2,
            title: 'GIF IT UP !!',
            description: 'A simple GIF posting app that is made using ReactJS which allows users to upload any GIF with custom texts on it.',
            link: 'https://csb-phhgg3.netlify.app',
            image: project2Image,
        },
        {
            id: 3,
            title: 'test1',
            description: 'An Artificial Intelligence powered web-app that tells you details of your invoice, not in just one language, but in multiple.',
            link: 'https://project1.com',
            image: project3Image,
        },
        {
            id: 4,
            title: 'test4',
            description: 'A simple GIF posting app that is made using ReactJS which allows users to upload any GIF with custom texts on it.',
            link: 'https://csb-phhgg3.netlify.app',
            image: project4Image,
        },
    ];

    const usedPositions = [];

    const getRandomPosition = () => {
        let position;
        const maxAttempts = 100;
        let attempts = 0;
        const minDistance = 250; // Minimum distance to prevent overlap

        do {
            const x = Math.random() * (window.innerWidth - 250); // Width of project tile
            const y = Math.random() * (window.innerHeight - 300); // Height of project tile
            position = { x, y };
            attempts++;
        } while (usedPositions.some(pos => Math.hypot(pos.x - position.x, pos.y - position.y) < minDistance) && attempts < maxAttempts);

        usedPositions.push(position);
        return position;
    };

    useEffect(() => {
        if (hoveredIndex !== null) {
            setIsPaused(true);
        } else {
            setIsPaused(false);
        }
    }, [hoveredIndex]);

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className={`projects-container ${isPaused ? 'paused' : 'rotate'}`}>
                <div className="circle"></div>
                {projects.map((project, index) => {
                    const { x, y } = getRandomPosition();
                    return (
                        <div
                            key={index}
                            className={`project-tile ${hoveredIndex === index ? 'hovered' : ''}`}
                            style={hoveredIndex === index ? 
                                { transform: `translate(-50%, -50%) scale(2)`, left: '50%', top: '50%' } : 
                                { transform: `translate(${x}px, ${y}px)` }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-details">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;
