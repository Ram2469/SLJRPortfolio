import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Define skills as nodes in a constellation
  const skills = [
    { id: 'react', name: 'React.js', category: 'frontend', x: 20, y: 30, size: 8, tooltip: 'My primary weapon ⚔️' },
    { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', x: 35, y: 15, size: 6, tooltip: 'Styling at the speed of thought 🎨' },
    { id: 'html', name: 'HTML5', category: 'frontend', x: 10, y: 50, size: 5, tooltip: 'The skeleton 💀' },
    { id: 'css', name: 'CSS3', category: 'frontend', x: 30, y: 55, size: 5, tooltip: 'Making things pretty ✨' },
    { id: 'js', name: 'JavaScript', category: 'frontend', x: 45, y: 40, size: 7, tooltip: 'The brain of the operation 🧠' },
    
    { id: 'node', name: 'Node.js', category: 'backend', x: 70, y: 30, size: 7, tooltip: 'Server-side magic 🪄' },
    { id: 'express', name: 'Express.js', category: 'backend', x: 85, y: 20, size: 6, tooltip: 'Routing made easy 🛤️' },
    { id: 'mongo', name: 'MongoDB', category: 'backend', x: 75, y: 55, size: 7, tooltip: 'NoSQL powerhouse 🗄️' },
    { id: 'java', name: 'Java', category: 'backend', x: 90, y: 45, size: 6, tooltip: 'DSA and Object-Oriented goodness ☕' },
    { id: 'sql', name: 'SQL', category: 'backend', x: 60, y: 70, size: 5, tooltip: 'Relational data master 📊' },
    
    { id: 'git', name: 'Git', category: 'tools', x: 50, y: 80, size: 6, tooltip: 'Time travel for code ⏰' },
    { id: 'aws', name: 'AWS', category: 'tools', x: 50, y: 15, size: 5, tooltip: 'Cloud computing ☁️' },
  ];

  // Define connections (lines) between skills
  const connections = [
    ['react', 'tailwind'], ['react', 'js'], ['js', 'html'], ['js', 'css'], ['html', 'css'],
    ['node', 'express'], ['node', 'mongo'], ['node', 'js'], ['java', 'sql'], ['mongo', 'sql'],
    ['git', 'js'], ['git', 'node'], ['aws', 'node'], ['aws', 'react']
  ];

  return (
    <section className="py-24 relative" id="skills" ref={ref}>
      <div className="font-mono text-sm text-gray-500 tracking-wider mb-12">
        &gt; STAGE_03 // LOADING SKILL MODULES...
      </div>

      <div className="glass-card p-4 md:p-8 rounded-2xl border-white/5 relative overflow-hidden">
        {/* Constellation Map */}
        <div className="relative w-full h-[400px] md:h-[500px] bg-[#050505] rounded-xl overflow-hidden mb-12 border border-white/5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Draw Connections */}
            {connections.map(([sourceId, targetId], index) => {
              const source = skills.find(s => s.id === sourceId);
              const target = skills.find(s => s.id === targetId);
              
              if (!source || !target) return null;
              
              const isHoveredLine = hoveredSkill === sourceId || hoveredSkill === targetId;
              
              return (
                <motion.line
                  key={`line-${index}`}
                  x1={`${source.x}%`} y1={`${source.y}%`}
                  x2={`${target.x}%`} y2={`${target.y}%`}
                  stroke={isHoveredLine ? '#00F5FF' : 'rgba(255, 255, 255, 0.1)'}
                  strokeWidth={isHoveredLine ? '0.5' : '0.2'}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.5 + (index * 0.05) }}
                />
              );
            })}
            
            {/* Draw Stars (Skills) */}
            {skills.map((skill, index) => {
              const isHovered = hoveredSkill === skill.id;
              const color = skill.category === 'frontend' ? '#00F5FF' : 
                            skill.category === 'backend' ? '#7B2FBE' : '#39FF14';
                            
              return (
                <g key={`node-${index}`} 
                   onMouseEnter={() => setHoveredSkill(skill.id)}
                   onMouseLeave={() => setHoveredSkill(null)}
                   className="cursor-pointer"
                >
                  {/* Outer Glow */}
                  <motion.circle
                    cx={`${skill.x}%`} cy={`${skill.y}%`} r={skill.size * 0.8}
                    fill={color}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: isHovered ? 2 : 1, 
                      opacity: isHovered ? 0.3 : 0.1 
                    }}
                    transition={{ duration: 0.3 }}
                    className="blur-md"
                  />
                  
                  {/* Inner Star */}
                  <motion.circle
                    cx={`${skill.x}%`} cy={`${skill.y}%`} r={skill.size * 0.3}
                    fill="#fff"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ type: 'spring', delay: index * 0.1 }}
                  />
                  
                  {/* Label */}
                  <text 
                    x={`${skill.x}%`} y={`${skill.y + (skill.size * 0.6)}%`} 
                    fill={isHovered ? '#fff' : 'rgba(255,255,255,0.5)'}
                    fontSize="2.5"
                    fontFamily="monospace"
                    textAnchor="middle"
                    className="pointer-events-none transition-colors duration-300"
                  >
                    {skill.name}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Tooltip */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center h-8 pointer-events-none">
            {hoveredSkill && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#121212] px-4 py-1 rounded-full border border-cyan-500/50 text-cyan-400 font-mono text-xs"
              >
                {skills.find(s => s.id === hoveredSkill)?.tooltip}
              </motion.div>
            )}
          </div>
        </div>

        {/* Skill Chips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="FRONTEND" skills={skills.filter(s => s.category === 'frontend')} color="cyan" inView={inView} />
          <SkillCategory title="BACKEND" skills={skills.filter(s => s.category === 'backend')} color="violet" inView={inView} delay={0.2} />
          <SkillCategory title="TOOLS & CLOUD" skills={skills.filter(s => s.category === 'tools')} color="neon-green" inView={inView} delay={0.4} />
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills, color, inView, delay = 0 }) => {
  const colorMap = {
    'cyan': 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5',
    'violet': 'text-violet-400 border-violet-500/30 bg-violet-500/5',
    'neon-green': 'text-neon-green border-neon-green/30 bg-neon-green/5'
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="space-y-4"
    >
      <h3 className="font-mono text-sm text-gray-400 border-b border-white/10 pb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <div 
            key={idx} 
            className={`px-3 py-1 rounded-full border text-xs font-mono interactive transition-all duration-300 hover:scale-105 cursor-default ${colorMap[color]}`}
            title={skill.tooltip}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
