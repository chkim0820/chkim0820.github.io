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
            <div class="about-me">
                <h1 class="section-title">About Me</h1>
                <h3>I am an aspiring computer scientist and a technology enthusiast!</h3>
                <p>
                    I study Computer Science and Music (with a minor in Mathematics) at Case Western Reserve University.
                    <br /> As an undergraduate researcher, I have engaged in fascinating interdisciplinary projects, exploring topics such as climate change, learning analytics, and human-computer interaction (HCI).
                </p>
                <p><em><b>Currently, I am working as a summer research intern at Carnegie Mellon University's Human-Computer Interaction Institute. Cool stuff!</b></em></p>
            </div>
                
                <br />
                <h1 class="section-title">Experience</h1>
                <h2>Research Projects</h2>
                <div class="work-experience">
                    <div class="job">
                        <h4>Carnegie Mellon University <span class="dates"> | May 2024 – Present</span></h4>
                        <ul>
                            <li>Developing ML models for evaluating user interfaces (UI) and providing improvement suggestions.</li>
                            <li>Exploring generative AI technologies and integrating them into a demo application.</li>
                            <li>Utilizing front-end development skills and UI toolkits.</li>
                        </ul>
                    </div>
                    <div class="job">
                        <h4>Case Western Reserve University <span class="dates"> | Sep 2023 – Present</span></h4>
                        <ul>
                            <li>Creating a machine learning model to predict student performance and mental workload using clickstream and physiological data.</li>
                            <li>Utilizing TensorFlow and Scikit-Learn for data analysis.</li>
                            <li>Compiled a comprehensive report with visualized findings.</li>
                        </ul>
                    </div>
                    <div class="job">
                        <h4>University of Massachusetts <span class="dates"> | Jun 2023 – Aug 2023</span></h4>
                        <ul>
                            <li>Optimized a neural network model for real-time carbon intensity forecasts, achieving 94.03% accuracy.</li>
                            <li>Preprocessed time series data using Python's Pandas library.</li>
                            <li>Created visualizations with Matplotlib for equitable energy transition research.</li>
                        </ul>
                    </div>
                </div>
                
                <h2>Software Development</h2>
                <div class="work-experience">
                    <div class="job">
                        <h4>Case Western Reserve University <span class="dates"> | Aug 2022 – Dec 2023</span></h4>
                        <p><em>Junior Developer</em></p>
                        <ul>
                            <li>Collaborated with a team to maintain and enhance the university's website using front-end development tools.</li>
                            <li>Designed and delivered training curricula for Engineering faculty and staff in Drupal and website management.</li>
                        </ul>
                    </div>
                </div>

                <br />
                <h1 class="section-title">Projects and Interests</h1>
                <p>I enjoy working on projects that challenge me to think critically and creatively. Some of my projects include:</p>
                <ul>
                    <li><strong>Boba Website</strong>: Implementing a website for boba tea enthusiasts, featuring information about different flavors, recipes, and a community forum.</li>
                    <li><strong>2D Platform Adventure Game</strong>: Designed and developed a game where players navigate obstacles and battle a final boss. <a href="https://ecse-csds290.itch.io/artifacts-of-the-past-2023-team-7"><em><b>Check it out!</b></em></a></li>
                    <li><strong>Language Interpreter</strong>: Developed a Scheme interpreter for a Java/C-ish language with features like variables, functions, control flow, exception handling, and object-oriented concepts.</li>
                    <li><strong>Maritime AIS Predictor</strong>: Conducted clustering analysis on AIS data from maritime vessels, optimizing algorithms to predict vessel movements with up to 90.8% accuracy.</li>
                </ul>

                <p>Check out my <a href='https://github.com/chkim0820'><b><em>GitHub page</em></b></a> to see more of my projects!</p>

                <br />
                <h1 class="section-title">Skills and Expertise</h1>
                <ul>
                    <li><strong>Programming Languages</strong>: Python, SQL, Java, JavaScript, C/C++, C#, HTML/CSS, R, Racket, Haskell, Prolog.</li>
                    <li><strong>Web Development</strong>: Experienced with React, Node.js, and Flask for full-stack development.</li>
                    <li><strong>Data Science and Machine Learning</strong>: Skilled in Python's Pandas, NumPy, and Scikit-Learn.</li>
                    <li><strong>Technical Skills</strong>: React, Databases, APIs, Git, Linux/Unix, Unity, Drupal, Object-Oriented Programming.</li>
                    <li><strong>Problem-Solving</strong>: I enjoy tackling complex problems and finding efficient solutions through logical and functional programming paradigms!</li>
                </ul>

                <br />
                <h2>Looking Forward</h2>
                <p>I'm always excited to apply my skills in dynamic and challenging environments!
                    Whether it's through internships, collaborative projects, or research, I look forward to contributing to innovative tech solutions and furthering my growth as a computer scientist.</p>

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