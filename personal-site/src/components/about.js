import React from 'react';
import { Link } from 'react-router-dom';
import linkedinLogo from '../assets/linkedin-logo.png';
import githubLogo from '../assets/github-logo.png';
import personalLogo from '../assets/personal-logo.png';


function About() {
  return (
    <>
        <div className="App">
            <header class="header">
                <div className="logo">
                    <a href="/">
                        <img src={personalLogo} alt="Logo" />
                    </a>
                </div>
                <nav className="navbar">
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
                <h1>About Me</h1>
                <h3>I am an aspiring computer scientist, software engineer, and a technology enthusiast!</h3>
                <p> I am a senior at Case Western Reserve University, where I study Computer Science and Music (+ minor in Mathematics).
                    <br /> As an undergraduate researcher, I have engaged in fascinating interdisciplinary projects, exploring topics such as climate change, learning analytics, and human-computer interaction (HCI).
                </p>
                <p><em>Currently, I am working as a summer research intern at Carnegie Mellon University's Human-Computer Interaction Institute. Cool stuff!</em></p>
                

                <h2>Projects and Interests</h2>
                <p>I enjoy working on projects that challenge me to think critically and creatively. Some of my notable projects include:</p>
                <ul>
                    <li><strong>Boba Website</strong>: I am implementing a website dedicated to boba tea enthusiasts, featuring information about different boba tea flavors, recipes, and a community forum.</li>
                    <li><strong>2D Platform Adventure Game</strong>: I designed and developed a game where players navigate obstacles and battle a final boss. <a href="https://ecse-csds290.itch.io/artifacts-of-the-past-2023-team-7"><em>Check it out!</em></a></li>
                    <li><strong>Real-Time Carbon Intensity Forecasting</strong>: I optimized a neural network model to achieve a 94.03% accuracy rate in forecasting carbon intensity across 27 regions.</li>
                </ul>
                <p>Check out my <a href='https://github.com/chkim0820'>GitHub page</a> to see more of my projects!</p>

                <h2>Skills and Expertise</h2>
                <ul>
                    <li><strong>Programming Languages</strong>: Proficient in JavaScript, Python, Scheme, and Haskell.</li>
                    <li><strong>Web Development</strong>: Experienced with HTML, CSS, and JavaScript for front-end development and Node.js for back-end development.</li>
                    <li><strong>Data Science and Machine Learning</strong>: Skilled in using tools like Pandas, NumPy, and Scikit-Learn for data analysis and machine learning projects.</li>
                    <li><strong>Problem-Solving</strong>: Enjoy tackling complex problems and finding efficient solutions through logical and functional programming paradigms.</li>
                </ul>

                <h2>Personal Interests</h2>
                <p>Beyond coding, I am a huge music enthusiast! I play the flute and love learning random music history facts.</p>

                <h2>Looking Forward</h2>
                <p>I'm always looking for opportunities to apply my skills in new and challenging environments.
                    Whether it's through internships, collaborative projects, or research, I'm eager to contribute to innovative tech solutions and continue growing as a computer scientist!</p>

                <h4 style={{ fontSize: '1.1em' }}><br></br><em>Connect with me on
                    &nbsp;<a href="https://www.linkedin.com/in/chkim0820/" target="_blank" rel="noopener noreferrer">LinkedIn</a>&nbsp;
                    to keep in touch! :)</em></h4>
                </div>
            </main>
            <footer>
                <p>© 2024 Chaehyeon Kim</p>
                <a href="https://www.linkedin.com/in/chkim0820/" target="_blank" rel="noopener noreferrer">
                    <div className="link-button">
                        <img src={linkedinLogo} alt="LinkedIn Icon" />
                    </div>
                </a>
                <a href="https://github.com/chkim0820" target="_blank" rel="noopener noreferrer">
                    <div className="link-button">
                        <img src={githubLogo} alt="GitHub Icon" />
                    </div>
                </a>
            </footer>
        </div>
    </>
  );
}

export default About;