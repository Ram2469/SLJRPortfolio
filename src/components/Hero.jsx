import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Code2, Download } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative pt-20 pb-10" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        {/* LEFT COLUMN: Identity */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center space-y-6 z-10"
        >
          <div className="font-mono text-sm text-gray-500 tracking-wider">
            &gt; STAGE_01 // IDENTITY
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-sans">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500 pb-2">
              Saka Loka<br />Janaki Ramayya
            </span>
          </h1>

          <div className="h-12 text-xl md:text-2xl font-mono text-cyan-300">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'MERN Stack Engineer',
                2000,
                'Problem Solver',
                2000,
                'Available to Hire 🟢',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 text-lg max-w-md font-sans">
            B.Tech IT @ JNTU-GV | Building things that matter.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-cyan-500/10 text-cyan-400 font-mono text-sm uppercase tracking-wider neon-border rounded-none hover:bg-cyan-500/20 transition-all duration-300 flex items-center gap-2 group"
            >
              View My Work
              <motion.span 
                animate={{ y: [0, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="group-hover:text-cyan-300"
              >
                ↓
              </motion.span>
            </button>
            
            <a 
              href="https://drive.google.com/file/d/1CmR6K79PReu2o4oXoQKTn1ICBSn4zeZO/view?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-violet-500/50 text-violet-400 font-mono text-sm uppercase tracking-wider hover:border-violet-400 hover:text-violet-300 transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_15px_rgba(123,47,190,0.4)]"
            >
              Resume <Download size={16} />
            </a>
          </div>

          <div className="flex gap-6 pt-8">
            <SocialIcon icon={<FiGithub size={24} />} link="https://github.com/Ram2469" />
            <SocialIcon icon={<FiLinkedin size={24} />} link="https://linkedin.com/in/sakalokajanakiramayya" />
            <SocialIcon icon={<Code2 size={24} />} link="https://leetcode.com/u/sljramayya/" />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Terminal Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center relative z-10 lg:h-[500px]"
        >
          <div className="w-full max-w-lg glass-card rounded-lg overflow-hidden neon-border shadow-2xl relative">
            {/* Terminal Header */}
            <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-2 text-xs font-mono text-gray-500">sljr@portfolio:~</div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm md:text-base space-y-4">
              <div>
                <span className="text-violet-400">$</span> <span className="text-white">whoami</span>
                <p className="text-cyan-400 mt-1">&gt; saka-loka-janaki-ramayya</p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <span className="text-violet-400">$</span> <span className="text-white">skills --list</span>
                <p className="text-gray-300 mt-1">&gt; React, Node, MongoDB, Express, Java, Tailwind CSS, SQL</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                <span className="text-violet-400">$</span> <span className="text-white">status</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-neon-green">&gt;</span>
                  <div className="flex items-center gap-2 bg-neon-green/10 text-neon-green px-3 py-1 rounded-full border border-neon-green/30 text-xs">
                    <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
                    Open to full-stack opportunities
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
              >
                <span className="text-violet-400">$</span> <span className="animate-pulse text-white">_</span>
              </motion.div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
             {/* We can add floating SVGs here if desired */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ icon, link }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]"
  >
    {icon}
  </a>
);

export default Hero;
