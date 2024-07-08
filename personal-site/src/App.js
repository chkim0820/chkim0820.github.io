import React from 'react';
import { Link } from 'react-router-dom';
import linkedinLogo from './assets/linkedin-logo.png';
import personalLogo from './assets/personal-logo.png';
import './styles/App.css';

function App() {
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
        <h1>Welcome!</h1>
        <h3>I am Chaehyeon Kim, an aspiring computer scientist.</h3> 
        <p>I created this website to share my journey, experiences, and insights with you. 
            Here, you'll find a collection of my projects and achievements. Feel free to explore and get to know me better. 
            If you have any questions or just want to say hello, don't hesitate to reach out. Thank you for visiting!</p>        
        <div>
            <iframe src="https://giphy.com/embed/Wj7lNjMNDxSmc" width="350" height="349" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
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
    
  );
}

export default App;
