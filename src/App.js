import React from 'react';
import Navbar from './Components/navbar';
import Sidebar from './Components/sidebar';
import Home from './Components/home';
import Skills from './Components/skills';
import About from './Components/about';
import Portfolio from './Components/portfolio';
import Contact from './Components/contact';
import Footer from './Components/footer';
import './index.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <Home />
      <Skills />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
