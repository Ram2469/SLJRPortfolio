import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ScrollStory from './components/ScrollStory';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import ParticlesBackground from './components/ParticlesBackground';
import ErrorBoundary from './components/ErrorBoundary';

function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // The LoadingScreen component will handle its own timing and then call onComplete
  }, []);

  return (
    <ErrorBoundary>
      <CustomCursor />
      
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="relative w-full bg-true-black min-h-screen text-white font-sans scanlines">
          <ParticlesBackground />
          <ScrollStory />
          
          <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
            <About />
            <Skills />
            <Timeline />
            <Projects />
            <Achievements />
            <Contact />
            
            <footer className="py-8 text-center text-sm font-mono text-gray-400 border-t border-white/10 mt-20">
              <p>&gt; Portfolio compiled with React + Tailwind + ☕ by SLjr_</p>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="mt-4 p-2 rounded-full border border-violet-500 text-cyan-500 hover:text-cyan-400 neon-border transition-all duration-300"
              >
                ↑
              </button>
            </footer>
          </main>
        </div>
      )}
    </ErrorBoundary>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
