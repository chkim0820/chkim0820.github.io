import React from 'react';
import { Link } from 'react-router-dom';
import linkedinLogo from './assets/linkedin-logo.png';
import githubLogo from './assets/github-logo.png';
import './styles/App.css';

function App() {
  return (
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
        <h1 className='text-highlight' style={{ fontSize: '3em' }}>Welcome!👋</h1> 
        <h3 className="typing-animation" style={{ fontSize: '1.3em' }}>I am Chae, a CS and Music student, and a technology enthusiast.</h3> 
        <h4 style={{fontStyle: 'italic'}}>I am currently on the job market! I am seeking a full-time position starting in August 2025.
        </h4>
        <p>
          <text style={{color: '#7276ba', fontWeight: 'bold'}}>I am passionate about designing safe, reliable software and AI systems with positive societal impact.</text>
          <br /> In the past, I have explored this interest by engaging in fascinating research projects, 
          working on topics such as climate change, learning equality, and accessible UIs.
        </p>

        <br />
        <h2>Briefly about Myself...</h2>
        <ul>
            <li><strong>Programming Languages</strong>: I particularly enjoy coding in <b>Python, Java</b>, and functional program languages like <b>Haskell</b>. I am also proficient in other languages.</li>
            <li><strong>Data Science/Machine Learning</strong>: I can utilize frameworks like Pandas, NumPy, and Scikit-Learn.</li>
            <li><strong>Technical Skills</strong>: Over the years, I picked up skills like leveraging APIs, Databases, Linux, Git, etc... </li>
            <li><strong>Problem-Solving</strong>: I enjoy tackling complex problems and finding efficient solutions with technology!</li>
        </ul>
        <h4>Find the full list in the <Link to="/resume">Resume</Link> tab!</h4>

        <br />
        <h2>Looking Forward</h2>
        <p>I'm always excited to apply my skills in dynamic and challenging environments and contribute to buliding innovative technological solutions, furthering my growth as a computer scientist.</p>

        <h4 style={{ fontSize: '1.1em' }}><br></br><em>Connect with me on
            &nbsp;<a href="https://www.linkedin.com/in/chkim0820/" target="_blank" rel="noopener noreferrer">LinkedIn</a>&nbsp;
            to keep in touch! :)</em></h4>
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

export default App;
