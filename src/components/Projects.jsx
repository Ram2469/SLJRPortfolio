import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      id: "alpha",
      name: "Scalable Skill Exchange Platform",
      status: "DEPLOYED ✅",
      tech: "MERN Stack, JWT, Context API",
      objective: "Build a real-time platform for skill exchange with secure auth.",
      outcome: "Seamless user experience with fast load times.",
      github: "https://github.com/Ram2469/SkillSwap-Lite",
      live: "https://skillswaplite.vercel.app/"
    },
    {
      id: "beta",
      name: "Service Scout — Local Service Discovery UI",
      status: "DEPLOYED ✅",
      tech: "React.js, Tailwind CSS",
      objective: "Responsive frontend for discovering local services with dynamic search, filtering, and mobile-first design.",
      outcome: "Fully responsive, zero accessibility violations.",
      github: "#",
      live: "https://servicescout.netlify.app/"
    }
  ];

  return (
    <section className="py-24 relative" id="projects" ref={ref}>
      <div className="font-mono text-sm text-gray-500 tracking-wider mb-12">
        &gt; STAGE_05 // MISSION_LOGS.classified
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <MissionCard key={index} project={project} index={index} inView={inView} />
        ))}
      </div>
    </section>
  );
};

const MissionCard = ({ project, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative glass-card border border-white/10 rounded-lg overflow-hidden group h-full flex flex-col"
    >
      {/* Classified Stamp Overlay */}
      <motion.div 
        className="absolute inset-0 z-20 flex items-center justify-center bg-[#080808]"
        animate={{ 
          opacity: isHovered ? 0 : 1,
          y: isHovered ? '-100%' : '0%'
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="border-4 border-red-500/80 text-red-500/80 font-mono font-bold text-4xl tracking-widest px-6 py-2 rotate-[-15deg] shadow-[0_0_15px_rgba(239,68,68,0.3)]">
          CLASSIFIED
        </div>
        <div className="absolute bottom-4 left-4 font-mono text-xs text-gray-500">
          MISSION_{project.id.toUpperCase()}
        </div>
      </motion.div>

      <div className="p-6 md:p-8 flex flex-col h-full relative z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/10">
          <div>
            <div className="font-mono text-xs text-cyan-400 mb-1">MISSION:</div>
            <h3 className="text-xl md:text-2xl font-bold font-sans text-white uppercase tracking-wider">{project.name}</h3>
          </div>
          <FolderGit2 className="text-violet-500 opacity-50" size={32} />
        </div>

        {/* Details */}
        <div className="space-y-4 font-mono text-sm flex-grow">
          <div>
            <span className="text-gray-500">STATUS:</span>{' '}
            <span className="text-neon-green bg-neon-green/10 px-2 py-0.5 rounded">{project.status}</span>
          </div>
          
          <div>
            <span className="text-gray-500">TECH_DEPLOYED:</span>{' '}
            <span className="text-cyan-300">{project.tech}</span>
          </div>
          
          <div>
            <span className="text-gray-500">OBJECTIVE:</span>{' '}
            <p className="text-gray-300 mt-1 pl-4 border-l-2 border-white/10">{project.objective}</p>
          </div>
          
          <div>
            <span className="text-gray-500">OUTCOME:</span>{' '}
            <p className="text-violet-300 mt-1 pl-4 border-l-2 border-violet-500/50">{project.outcome}</p>
          </div>
        </div>

        {/* Links */}
        <div className="mt-8 pt-4 border-t border-white/10 flex gap-4">
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline interactive">
            [VIEW MISSION <ExternalLink size={14} />]
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white hover:underline interactive">
            [SOURCE CODE <FiGithub size={14} />]
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
