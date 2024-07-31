import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Change import to free-solid-svg-icons
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Keep import as free-brands-svg-icons
import contactImage from '../components/contact2.jpeg'; // Import the image

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <br></br>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                        <a href="mailto:Ayush.tamta8@gmail.com" className="contact-link">ayush.tamta8@gmail.com</a>
                    </div>

                    <br></br>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                        <a href="tel:+919990833893" className="contact-link">+91 (999) 083-3893</a>
                    </div>
                    <br></br>

                    <div className="contact-item">
                        <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
                        <a href="https://www.linkedin.com/in/your-linkedin-profile" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                    </div>
                    <br></br>

                    <div className="contact-item">
                        <FontAwesomeIcon icon={faGithub} className="contact-icon" />
                        <a href="https://github.com/your-github-profile" className="contact-link" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                    </div>
                </div>
                <div className="profile-picture">
                    <img src={contactImage} alt="Your Name" className="profile-image" /> {/* Use the imported image */}
                </div>
            </div>
        </section>
    );
}

export default Contact;
