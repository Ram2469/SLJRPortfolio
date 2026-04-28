import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitCommit, GitMerge, GitBranch } from 'lucide-react';

const Timeline = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const commits = [
    { 
      hash: '9b2e1a', 
      year: '2020', 
      message: 'init: enrolled at Aditya Polytechnic, Computer Engineering',
      type: 'init',
      icon: <GitCommit size={16} />
    },
    { 
      hash: '3c7f4d', 
      year: '2022', 
      message: 'feat: started Web Dev Internship @ Aditya College',
      type: 'feat',
      icon: <GitBranch size={16} />
    },
    { 
      hash: '8a1b3e', 
      year: '2023', 
      message: 'chore: graduated Diploma with CGPA 9.6 🏅',
      type: 'chore',
      icon: <GitMerge size={16} />
    },
    { 
      hash: '2d9c7f', 
      year: '2023', 
      message: 'feat: upgraded to B.Tech IT @ JNTU-GV',
      type: 'feat',
      icon: <GitCommit size={16} />
    },
    { 
      hash: '5e3a1b', 
      year: '2024', 
      message: 'build: launched Skill Exchange Platform (MERN)',
      type: 'build',
      icon: <GitCommit size={16} />
    },
    { 
      hash: '7f2d9c', 
      year: '2024', 
      message: 'feat: deployed Service Scout UI (React + Tailwind)',
      type: 'feat',
      icon: <GitCommit size={16} />
    },
    { 
      hash: '1a8b4e', 
      year: '2025', 
      message: 'chore: solved 140+ LeetCode problems in Java ⚡',
      type: 'chore',
      icon: <GitCommit size={16} />
    },
    { 
      hash: 'HEAD→', 
      year: 'NOW', 
      message: 'ready: open to full-stack opportunities 🚀',
      type: 'ready',
      icon: <GitMerge size={16} />,
      isHead: true
    }
  ];

  return (
    <section className="py-24 relative" id="journey" ref={ref}>
      <div className="font-mono text-sm text-gray-500 tracking-wider mb-12">
        &gt; STAGE_04 // GIT LOG --all
      </div>

      <div className="relative max-w-3xl mx-auto glass-card p-6 md:p-10 rounded-xl">
        {/* Timeline Line */}
        <div className="absolute left-[39px] md:left-[49px] top-10 bottom-10 w-[2px] bg-white/10" />
        
        {/* Animated Line Fill */}
        <motion.div 
          className="absolute left-[39px] md:left-[49px] top-10 w-[2px] bg-gradient-to-b from-cyan-500 via-violet-500 to-neon-green"
          initial={{ height: 0 }}
          animate={inView ? { height: '85%' } : {}}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        <div className="space-y-12">
          {commits.map((commit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-start group"
            >
              {/* Commit Dot / Icon */}
              <div className={`relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 bg-[#121212] transition-colors duration-300
                ${commit.isHead ? 'border-neon-green text-neon-green shadow-[0_0_10px_rgba(57,255,20,0.5)]' : 'border-white/20 text-gray-400 group-hover:border-cyan-500 group-hover:text-cyan-400'}
              `}>
                {commit.icon}
              </div>

              {/* Commit Content */}
              <div className="ml-6 md:ml-8 flex-1 pt-1">
                <div className="flex flex-wrap items-baseline gap-3 mb-1">
                  <span className={`font-mono text-sm px-2 py-0.5 rounded bg-white/5 
                    ${commit.isHead ? 'text-neon-green border border-neon-green/30' : 'text-violet-400 border border-violet-500/20'}`}
                  >
                    [{commit.hash}]
                  </span>
                  <span className="font-mono text-xs text-gray-500">
                    {commit.year}
                  </span>
                </div>
                <div className={`font-mono text-sm md:text-base
                  ${commit.isHead ? 'text-white font-bold' : 'text-gray-300'}
                `}>
                  <span className={
                    commit.type === 'feat' ? 'text-cyan-400' :
                    commit.type === 'chore' ? 'text-gray-400' :
                    commit.type === 'build' ? 'text-yellow-400' :
                    commit.type === 'ready' ? 'text-neon-green' :
                    'text-violet-400'
                  }>
                    {commit.message.split(':')[0]}:
                  </span>
                  {commit.message.split(':')[1]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
