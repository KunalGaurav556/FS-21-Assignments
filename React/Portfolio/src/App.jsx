import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer/>

    </>
  )
}

export default App;