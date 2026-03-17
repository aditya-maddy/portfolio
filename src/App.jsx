import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import About from './frontend/about/About';
import Home from './frontend/home/Home';
import Projects from './frontend/project/Projects';
import Contact from './frontend/contact/Contact';

function App() {
  return (

    <div className='container-fluid app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

  )
}

export default App
