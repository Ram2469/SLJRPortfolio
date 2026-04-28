import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Globe, Cloud } from 'lucide-react';

const Achievements = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const achievements = [
    {
      icon: <Trophy size={32} />,
      title: "LeetCode Warrior",
      desc: "140+ DSA problems solved primarily in Java. Consistent problem solver.",
      color: "cyan",
      link: "https://leetcode.com/u/sljramayya/"
    },
    {
      icon: <Globe size={32} />,
      title: "IT Specialist",
      desc: "Global Software Engineering Certification demonstrating core competencies.",
      color: "violet",
      link: "https://drive.google.com/file/d/1Y51aY53kSpEe5sSjf7yuNYilu8Q2SK48/view"
    },
    {
      icon: <Cloud size={32} />,
      title: "AWS Cloud Practitioner",
      desc: "In Progress — expanding infrastructure and cloud deployment skills.",
      color: "neon-green"
    }
  ];

  return (
    <section className="py-24 relative" id="achievements" ref={ref}>
      <div className="font-mono text-sm text-gray-500 tracking-wider mb-12">
        &gt; STAGE_06 // ACHIEVEMENTS
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <AchievementCard key={index} item={item} index={index} inView={inView} />
        ))}
      </div>
    </section>
  );
};

const AchievementCard = ({ item, index, inView }) => {
  const colorMap = {
    'cyan': 'text-cyan-400 border-cyan-500/30 group-hover:border-cyan-500 group-hover:shadow-[0_0_20px_rgba(0,245,255,0.2)]',
    'violet': 'text-violet-400 border-violet-500/30 group-hover:border-violet-500 group-hover:shadow-[0_0_20px_rgba(123,47,190,0.2)]',
    'neon-green': 'text-neon-green border-neon-green/30 group-hover:border-neon-green group-hover:shadow-[0_0_20px_rgba(57,255,20,0.2)]'
  };

  const Component = item.link ? motion.a : motion.div;

  return (
    <Component
      href={item.link}
      target={item.link ? "_blank" : undefined}
      rel={item.link ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`glass-card p-8 rounded-xl border transition-all duration-500 group flex flex-col items-center text-center ${colorMap[item.color]} ${item.link ? 'cursor-pointer hover:scale-105' : ''}`}
    >
      <div className={`mb-6 p-4 rounded-full bg-[#121212] border ${colorMap[item.color]}`}>
        {item.icon}
      </div>
      <h3 className="text-xl font-bold font-sans text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
        {item.title}
      </h3>
      <p className="text-gray-400 font-sans text-sm">
        {item.desc}
      </p>
    </Component>
  );
};

export default Achievements;
