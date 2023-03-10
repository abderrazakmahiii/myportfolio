import React, { useEffect, useState } from 'react';
import Navbar from './Components/navbar';
import Sidebar from './Components/sidebar';
import Home from './Components/home';
import Skills from './Components/skills';
import About from './Components/about';
import Contact from './Components/contact';
import Footer from './Components/footer';
import './index.css';

function App() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));

  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <Home />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
