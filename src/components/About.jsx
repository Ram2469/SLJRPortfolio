import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CustomCountUp from './CustomCountUp';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { label: 'LeetCode Solved', value: 140, suffix: '+' },
    { label: 'Deployed Projects', value: 2, suffix: '' },
    { label: 'Internships', value: 1, suffix: '' },
    { label: 'Certifications', value: 3, suffix: '+' }
  ];

  return (
    <section className="py-24 relative" id="about" ref={ref}>
      <div className="font-mono text-sm text-gray-500 tracking-wider mb-12">
        &gt; STAGE_02 // ORIGIN
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Hexagon Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="md:col-span-4 flex justify-center"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            {/* Hexagon SVG background */}
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full text-cyan-500/20 drop-shadow-[0_0_15px_rgba(0,245,255,0.5)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <polygon
                points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25"
                fill="currentColor"
                stroke="#00F5FF"
                strokeWidth="1"
                className="opacity-50"
              />
            </motion.svg>

            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full text-violet-500/20 drop-shadow-[0_0_15px_rgba(123,47,190,0.5)]"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <polygon
                points="50 5, 89 27, 89 73, 50 95, 11 73, 11 27"
                fill="none"
                stroke="#7B2FBE"
                strokeWidth="2"
                strokeDasharray="10 5"
              />
            </motion.svg>

            <div className="z-10 text-5xl md:text-6xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-violet-500">
              SLJR
            </div>
          </div>
        </motion.div>

        {/* Story Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-8 space-y-8"
        >
          <div className="glass-card p-8 rounded-xl border-l-4 border-l-cyan-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full group-hover:bg-cyan-500/20 transition-all duration-500"></div>
            <p className="text-xl md:text-2xl text-gray-300 font-sans leading-relaxed relative z-10">
              "I didn't start with a laptop. I started with curiosity.
              From a small town in Andhra Pradesh, I taught myself to turn ideas
              into interfaces.I started exploring From Diploma to building full-stack
              platforms — every line of code is a step forward."
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                className="flex flex-col items-center justify-center p-4 glass-card rounded-lg hover:border-violet-500/50 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-bold font-mono text-cyan-400 mb-2">
                  {inView ? <CustomCountUp end={stat.value} duration={2.5} inView={inView} /> : '0'}
                  <span className="text-violet-500">{stat.suffix}</span>
                </div>
                <div className="text-sm text-gray-400 font-mono text-center">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
