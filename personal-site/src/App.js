import React from 'react';
import { Link } from 'react-router-dom';
import linkedinLogo from './assets/linkedin-logo.png';
import githubLogo from './assets/github-logo.png';
import personalLogo from './assets/personal-logo.png';
import './styles/App.css';

function App() {
  return (
    <router basename="chkim0820.github.io">
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
          <h1 className='text-highlight' style={{ fontSize: '3em' }}>Welcome!</h1>
          <h3 className="typing-animation" style={{ fontSize: '1.5em' }}>I am Chaehyeon Kim, an aspiring computer scientist :)</h3> 
          <p style={{ fontSize: '1.1em' }}>I created this website to share my journey and experiences with you. 
              Here, you'll find a collection of my projects and achievements. Feel free to explore, and if you have any questions or simply want to say hello, please don't hesitate to reach out. Thank you for visiting!</p>        
          <div>
              <iframe src="https://giphy.com/embed/Wj7lNjMNDxSmc" width="350" height="349" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
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
    </router>
    
    
  );
}

export default App;
