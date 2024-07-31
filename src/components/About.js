import React, { useRef } from 'react';
import './About.css'; // Import your CSS file

// Import the profile photo
import profilePhoto from './photo.jpg';

function About() {
    // Create a reference to the About section
    const aboutRef = useRef(null);

    // Function to handle mouse movement over the About section
    const handleMouseMove = (e) => {
        const aboutElement = aboutRef.current;

        if (aboutElement) {
            // Create a new sparkle element
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');

            // Calculate the sparkle position
            const x = e.clientX - aboutElement.getBoundingClientRect().left;
            const y = e.clientY - aboutElement.getBoundingClientRect().top;

            // Set the sparkle position
            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;

            // Add the sparkle to the About section
            aboutElement.appendChild(sparkle);

            // Remove the sparkle after a short duration (you can adjust the time)
            setTimeout(() => {
                aboutElement.removeChild(sparkle);
            }, 800);
        }
    };

    return (
        <section
            ref={aboutRef}
            id="about"
            className="about"
            onMouseMove={handleMouseMove} // Attach mouse movement event handler
        >
            <div className="about-container">
                {/* Profile photo */}
                <div className="profile-photo-container">
                    <img src={profilePhoto} alt="Your Name" className="profile-photo" />
                </div>

                {/* About text */}
                <div className="about-text">
                    <h2>About Me</h2>
                    <h3>Inquisitive </h3>



                    <p>
                    Organized and self-motivated software engineer graduate with 2+ years combined internship and professional experience. Fluent in .Net C#, SQL, Python, JavaScript, and CSS programming languages. Possess practical working knowledge of relational databases using PostgreSQL, SQL Server, Cloud Development, and Agile Development. Constantly updating personal and professional technical skills with complementary collegiate courses and online bootcamps. Reliable and responsible team player.
                    </p>
                    <p>Add more details here to give visitors a better understanding of your skills, interests, and expertise.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
