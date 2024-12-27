import React from 'react';
import { Link } from 'react-router-dom';
import linkedinLogo from '../assets/linkedin-logo.png';
import githubLogo from '../assets/github-logo.png';
import artifactImage from '../assets/project/artifact.png'
import interpreterImage from '../assets/project/interpreter.png'
import maritimeImage from '../assets/project/maritime.png'
import websiteImage from '../assets/project/website.png'


function Projects() {
  return (
    <>
        <div className="App">
            <header class="header">
               <div>
                    <a href="/" class="logo">
                        <text>Chaehyeon Kim </text> 👩🏻‍💻
                    </a>
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
            <h1>Projects</h1>
            <div class="grid-container">
                <div class="grid-item project1">
                    <h3 class="project-name">chkim0820.github.io</h3>
                    <p class="description">This website</p>
                    <a href="https://github.com/chkim0820/chkim0820.github.io/tree/main/personal-site" class="project-link" target="_blank">Source</a>
                </div>
                <div class="grid-item project2">
                    <h3 class="project-name">Language Interpreter</h3>
                    <p class="description">Racket interpreter for a Java/C-like language</p>
                    <a href="https://github.com/chkim0820/Programming_Language_Concepts/tree/main/Interpreters" class="project-link" target="_blank">Source</a>
                </div>
                <div class="grid-item project3">
                    <h3 class="project-name">Maritime AIS Predictor</h3>
                    <p class="description">ML clustering algorithm analysis to predict movement</p>
                    <a href="https://github.com/chkim0820/Intro_to_ML/tree/main/Case_Study_2" class="project-link" target="_blank">Source</a>
                </div>
                <div class="grid-item project4">
                    <h3 class="project-name">Artifacts of the Past</h3>
                    <p class="description">2D platform game to navigate obstacles toward victory</p>
                    <a href="https://ecse-csds290.itch.io/artifacts-of-the-past-2023-team-7" class="project-link" target="_blank">Demo</a>
                </div>
                {/* <div class="grid-item">
                    <h3 class="project-name">AI Agent Hostility Simulator</h3>
                    <p class="description">Multi-agent simulation to violence depending on resource availability</p>
                    <a href="https://example.com/project1" class="project-link" target="_blank">Source</a>
                </div> */}
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

export default Projects;