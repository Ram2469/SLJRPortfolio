import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollStory = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [toastMessage, setToastMessage] = useState('📡 Establishing connection...');
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const sections = [
      { id: 'hero', message: '📡 Establishing connection...' },
      { id: 'about', message: '🎓 Origin story loaded' },
      { id: 'skills', message: '⚡ Core skills compiled' },
      { id: 'journey', message: '📚 Academic & Career history loaded' },
      { id: 'projects', message: '🚀 Missions reviewed' },
      { id: 'achievements', message: '🏆 Achievements unlocked' },
      { id: 'contact', message: '✅ Full profile loaded — Ready to hire?' }
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sections.find(s => s.id === entry.target.id);
          if (section) {
            setToastMessage(section.message);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* Progress Bar */}
      <motion.div
        className="h-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-neon-green origin-left"
        style={{ scaleX }}
      />
      
      {/* Toast Message */}
      <motion.div
        key={toastMessage}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showToast ? 1 : 0, y: showToast ? 0 : -20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="absolute top-4 right-4 bg-[#121212] border border-cyan-500/30 text-cyan-500 px-4 py-2 rounded-md font-mono text-xs neon-border shadow-[0_0_10px_rgba(0,245,255,0.2)]"
      >
        {toastMessage}
      </motion.div>
    </div>
  );
};

export default ScrollStory;
