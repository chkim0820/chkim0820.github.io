import React from 'react';
import { Link } from 'react-router-dom';
import linkedinLogo from '../assets/linkedin-logo.jpg';

function Contact() {
  return (
    <div>
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
        <div className="container">
          <h2>Contact Us</h2>
          <form action="/submit-form" method="post">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <div style={{ overflow: 'hidden' }}>
              <input type="submit" value="Submit" />
            </div>
          </form>
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

export default Contact;
