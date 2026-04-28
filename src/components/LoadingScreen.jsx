import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const messages = [
    { threshold: 10, text: "Initializing core systems..." },
    { threshold: 30, text: "Loading 9+ years of curiosity..." },
    { threshold: 50, text: "Injecting 140+ solved algorithms..." },
    { threshold: 70, text: "Compiling MERN stack experience..." },
    { threshold: 90, text: "Calibrating creativity modules..." },
    { threshold: 100, text: "SAKA LOKA JANAKI RAMAYYA — Online 🚀" }
  ];

  useEffect(() => {
    const duration = 2500; // 2.5 seconds total loading time
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      const nextMessageIndex = messages.findIndex(m => m.threshold >= currentProgress);
      if (nextMessageIndex !== -1) {
        setMessageIndex(nextMessageIndex);
      }

      if (currentProgress === 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 800); // Wait for exit animation
        }, 800);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const renderProgressBar = () => {
    const totalBlocks = 20;
    const filledBlocks = Math.floor((progress / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;
    return `[${'▓'.repeat(filledBlocks)}${'░'.repeat(emptyBlocks)}] ${progress}%`;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-true-black text-cyan-500 font-mono scanlines"
        >
          <div className="w-full max-w-2xl px-8 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-gray-500"
            >
              &gt; STAGE_00 // SYSTEM_BOOT
            </motion.div>
            
            <div className="text-xl md:text-2xl font-bold tracking-widest text-violet-400">
              {renderProgressBar()}
            </div>
            
            <div className="h-8 text-lg text-neon-green">
              <motion.span
                key={messageIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                &gt; {messages[messageIndex].text}
              </motion.span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
