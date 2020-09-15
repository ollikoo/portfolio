import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'boxicons';
import './Hamburgers.css';
import './App.css';
import 'aos/dist/aos.css';
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import Samples from './components/Samples.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import History from './components/History.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div className="main-content">
        <Hero />
        <Samples
          id="samples"
          title="Projects"
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
