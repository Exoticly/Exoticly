import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CustomCursor from './components/CustomCursor';
import ParticleUniverse from './components/ParticleUniverse';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Games from './components/Games';
import Elyx from './components/Elyx';
import Products from './components/Products';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Home() {
  useEffect(() => {
    document.body.classList.add('grain');
    return () => document.body.classList.remove('grain');
  }, []);

  return (
    <div className="relative min-h-screen text-[var(--ink-100)]">
      <CustomCursor />
      <ParticleUniverse />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Games />
        <Elyx />
        <Products />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
