import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;