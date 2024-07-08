import React from 'react';
import { Link } from 'react-router-dom';
import linkedinLogo from '../assets/linkedin-logo.png';
import personalLogo from '../assets/personal-logo.png';


function Boba() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div className="logo">
            <a href="/">
              <img src={personalLogo} alt="Logo" />
            </a>
          </div>
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
          <div className="linkedin-button">
            <img src={linkedinLogo} alt="LinkedIn Icon" />
          </div>
        </a>
      </footer>
    </div>
  );
}

export default Boba;
