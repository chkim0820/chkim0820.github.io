import React from 'react';
import { Link } from 'react-router-dom';
import linkedinLogo from '../assets/linkedin-logo.jpg';

function About() {
  return (
    <>
        <div className="App">
            <header className="navbar">
                <nav class="navbar">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Me</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/boba">Boba Website!</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
            <div className="about-container">
                <h2>About Me</h2>
                <p> I am an aspiring software engineer, computer scientist, and an technology enthusiast.
                    Currently, I am a senior at Case Western Reserve University, where I major in Computer Science and Music (with a minor in Mathematics).
                    I am passionate about coding, research, and learning across disciplines.
                    <br /> As an undergrad researcher,
                    I have been involved in several interdisciplinary projects, delving into topics ranging from climate change to learning analytics.
                </p>

                <h3>My Journey</h3>
                <p>My journey in computer science and technology began with a fascination for problem-solving and logical thinking.
                Over the years, I've honed my skills in multiple programming languages and frameworks.
                </p>

                <h3>Projects and Interests</h3>
                <p>I enjoy working on projects that challenge me to think critically and creatively. Some of my notable projects include:</p>
                <ul>
                    <li><strong>Boba Website</strong>: I implemented a website dedicated to boba tea enthusiasts, featuring information about different boba tea flavors, recipes, and a community forum.</li>
                    <li><strong>2D Platform Adventure Game</strong>: I designed and developed a game where players navigate obstacles and battle a final boss.</li>
                    <li><strong>Real-Time Carbon Intensity Forecasting</strong>: I optimized a neural network model to achieve a 94.03% accuracy rate in forecasting carbon intensity across 27 regions.</li>
                </ul>

                <h3>Skills and Expertise</h3>
                <ul>
                    <li><strong>Programming Languages</strong>: Proficient in JavaScript, Python, Scheme, and Haskell.</li>
                    <li><strong>Web Development</strong>: Experienced with HTML, CSS, and JavaScript for front-end development and Node.js for back-end development.</li>
                    <li><strong>Data Science and Machine Learning</strong>: Skilled in using tools like Pandas, NumPy, and Scikit-Learn for data analysis and machine learning projects.</li>
                    <li><strong>Problem-Solving</strong>: Enjoy tackling complex problems and finding efficient solutions through logical and functional programming paradigms.</li>
                </ul>

                <h3>Personal Interests</h3>
                <p>Beyond coding, I have a passion for music. I play the flute and love learning random music history facts!</p>

                <h3>Looking Forward</h3>
                <p>I'm always looking for opportunities to apply my skills in new and challenging environments.
                    Whether it's through internships, collaborative projects, or research, I'm eager to contribute to innovative tech solutions and continue growing as a developer.</p>

                <h4><em>Connect with me on
                    &nbsp;<a href="https://www.linkedin.com/in/chkim0820/" target="_blank" rel="noopener noreferrer">LinkedIn</a>&nbsp;
                    to keep in touch! :)</em></h4>
                </div>
            </main>
            <footer>
                <p>© 2024 Chaehyeon Kim</p>
                <a href="https://www.linkedin.com/in/chkim0820/" target="_blank" rel="noopener noreferrer">
                    <div className="linkedin-button">
                        <img src={linkedinLogo} alt="LinkedIn Icon" />
                    </div>
                </a>
            </footer>
        </div>
    </>
  );
}

export default About;