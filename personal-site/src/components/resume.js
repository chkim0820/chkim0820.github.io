import React from 'react';
import { Link } from 'react-router-dom';
import linkedinLogo from '../assets/linkedin-logo.png';
import githubLogo from '../assets/github-logo.png';
import resume_file from '../assets/resume.pdf'

function Resume() {
  return (
    <>
        <div className="App">
            <header class="header">
               <div>
                    <a href="/" class="logo"> Chaehyeon Kim 👩🏻‍💻 </a>  
                </div>
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <em>Updated 12/26/2024</em>
                <embed src={resume_file} width="100%" height="600px" type="application/pdf"></embed>
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

export default Resume;