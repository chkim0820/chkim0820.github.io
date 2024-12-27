import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';
import linkedinLogo from '../assets/linkedin-logo.png';
import githubLogo from '../assets/github-logo.png';


function ContactForm() {
  const [state, handleSubmit] = useForm('mpwaanqo');

  if (state.succeeded) {
    alert("Form submitted successfully!");
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        required
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email" 
        name="email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

function Contact() {
  return (
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
        <br />
        <h1>Feel free to leave me a message here!</h1>
        <div className="container">
          <h2>Contact Me</h2>
          <ContactForm />
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
  );
}

export default Contact;
