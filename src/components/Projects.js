
import React, { useState } from 'react';
import './Projects.css'; 
import project1Image from './project1.jpeg';
import project2Image from './project2.jpeg';

function Projects() {
   
        const [hoveredIndex, setHoveredIndex] = useState(null);
    
  const projects = [
    {
      id: 1,
      title: 'Uni-Dialect.AI',
      description: 'An Artifical Intelligence powered web-app that tells you details of your invoice,not in just one language, but in multiple.',
      link: 'https://project1.com',
      image: project1Image,
    
      
    },
    {
      id: 2,
      title: 'GIF IT UP !!',
      description: 'A simple GIF posting app that is made using reactJS which allows user to upload any GIF with custom texts on it.',
      link: 'https://csb-phhgg3.netlify.app',
      image: project2Image,
      
    },
    {
        id: 1,
        title: 'Uni-Dialect.AI',
        description: 'An Artifical Intelligence powered web-app that tells you details of your invoice,not in just one language, but in multiple.',
        link: 'https://project1.com'
        
      },

      {
        id: 1,
        title: 'Uni-Dialect.AI',
        description: 'An Artifical Intelligence powered web-app that tells you details of your invoice,not in just one language, but in multiple.',
        link: 'https://project1.com',
      },


      

  ];

  return (
    <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-container">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`project-tile ${hoveredIndex === index ? 'hovered' : ''}`}
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
            ))}
        </div>
    </section>
);
}

export default Projects;
