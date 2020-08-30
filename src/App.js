import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'boxicons';
import './Hamburgers.css';
import './App.css';
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import Samples from './components/Samples.js';

const App = () => {
  return (
    <div className="App">
      <div id="top">
        <Nav />
      </div>
      <div className="main-content">
        <Hero />
        <Samples
          id="samples"
          title="Samples"
          number="01"
        />
      </div>
    </div>
  );
}

export default App;
