import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'boxicons';
import './Hamburgers.css';
import './App.css';
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import Samples from './components/Samples.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import History from './components/History.js';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div className="main-content">
        <Hero />
        <Samples
          id="samples"
          title="Work"
          number="01"
        />
        <About
          id="about"
          title="About"
          number="02"
        />
        <Skills
          id="skills"
          title="What I do"
          number="03"
        />
        <History />
      </div>
    </div>
  );
}

export default App;
