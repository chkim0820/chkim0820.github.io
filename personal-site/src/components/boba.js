import React from 'react';
import { Link } from 'react-router-dom';
import linkedinLogo from '../assets/linkedin-logo.png';
import githubLogo from '../assets/github-logo.png';
import personalLogo from '../assets/personal-logo.png';


function Boba() {
  return (
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
        <h1>Still under construction...</h1>
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
  );
}

export default Boba;