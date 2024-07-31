import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5,
    faCss3Alt,
    faJs,
    faReact,
    faNodeJs,
    faFigma,
    faGit,
    faPython,
    faJava,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills-section">
            <h3 className="section-title">Skills</h3>
            <div className="skills-grid">
                <div className="skill-card">
                    <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
                    <div className="skill-name">HTML5</div>
                </div>
                <div className="skill-card">
                    <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
                    <div className="skill-name">CSS3</div>
                </div>
                <div className="skill-card">
                    <FontAwesomeIcon icon={faJs} className="skill-icon" />
                    <div className="skill-name">JavaScript</div>
                </div>
                <div className="skill-card">
                    <FontAwesomeIcon icon={faReact} className="skill-icon" />
                    <div className="skill-name">React</div>
                </div>
                <div className="skill-card">
                    <FontAwesomeIcon icon={faNodeJs} className="skill-icon" />
                    <div classname="skill-name">Node.js</div>
                </div>
                <div className="skill-card">
                    <FontAwesomeIcon icon={faJava} className="skill-icon" />
                    <div classname="skill-name">Java</div>
                </div>
                <div className="skill-card">
                    <FontAwesomeIcon icon={faFigma} className="skill-icon" />
                    <div classname="skill-name">Figma</div>
                </div>
                <div className="skill-card">
                    <FontAwesomeIcon icon={faGit} className="skill-icon" />
                    <div classname="skill-name">Git</div>
                </div>
                <div className="skill-card">
                    <FontAwesomeIcon icon={faPython} className="skill-icon" />
                    <div classname="skill-name">Python</div>
                </div>
                <div className="skill-card">
                    <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                    <div className="skill-name">MySQL</div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
