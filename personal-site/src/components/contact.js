import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';
import linkedinLogo from '../assets/linkedin-logo.jpg';

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
          <ContactForm />
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
