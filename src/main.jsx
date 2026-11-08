
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <div className="portfolio">
      <nav>
        <h2>Chamod<span>.</span></h2>
        <a href="#contact">Contact Me</a>
      </nav>

      <section className="hero">
        <p className="tag">WELCOME TO MY PORTFOLIO</p>
        <h1>Hi, I'm <span>Chamod Arunodya</span></h1>
        <h2>IT Graduate | Aspiring Software Engineer</h2>
        <p>
          I am passionate about Information Technology,
          software development and learning new technologies.
          I enjoy solving problems and building creative solutions.
        </p>
        <a className="btn" href="#projects">Explore My Work</a>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I have completed my IT Diploma at ICBT.
          I am interested in IT Support, Web Development
          and Software Engineering.
        </p>
      </section>

      <section id="skills">
        <h2>My Skills</h2>
        <div className="skills">
          {['HTML', 'CSS', 'JavaScript', 'Python',
            'Java', 'React', 'MS Office', 'Networking'].map(skill =>
            <div className="skill" key={skill}>{skill}</div>
          )}
        </div>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <div className="project">
          <h3>Personal Portfolio Website</h3>
          <p>A responsive personal portfolio built using React and CSS.</p>
        </div>
        <div className="project">
          <h3>IT Practice Projects</h3>
          <p>Learning and developing practical IT skills.</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: Add your email address here</p>
        <p>GitHub: Chamod704</p>
      </section>

      <footer>
        © 2026 Chamod Arunodya. All Rights Reserved.
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
