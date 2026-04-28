import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Terminal, Loader2, CheckCircle2, XCircle } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Add FormSubmit config
    data._subject = "New Contact from Portfolio!";
    data._template = "table";

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

      const response = await fetch("https://formsubmit.co/ajax/sakalokajanakiramayya@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      const result = await response.json();

      if (response.ok && result.success === "true") {
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        console.error("Form transmission issue:", result);
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Transmission error:", error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-24 relative" id="contact" ref={ref}>
      <div className="font-mono text-sm text-gray-500 tracking-wider mb-12">
        &gt; STAGE_07 // ESTABLISH_CONNECTION()
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Terminal Output */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white">
            Let's build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">something together.</span>
          </h2>

          <div className="glass-card p-6 rounded-lg font-mono text-sm md:text-base border border-white/10">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10 text-gray-400">
              <Terminal size={16} /> connection_details.log
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-violet-400 w-24">EMAIL</span>
                <span className="text-gray-500 hidden sm:inline">→</span>
                <a href="mailto:sakalokajanakiramayya@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors interactive">
                  sakalokajanakiramayya@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-violet-400 w-24">PHONE</span>
                <span className="text-gray-500 hidden sm:inline">→</span>
                <a href="tel:+918919496691" className="text-cyan-400 hover:text-cyan-300 transition-colors interactive">
                  +91 8919496691
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-violet-400 w-24">LOCATION</span>
                <span className="text-gray-500 hidden sm:inline">→</span>
                <span className="text-gray-300">Someswaram, AP</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pt-4">
                <span className="text-violet-400 w-24">STATUS</span>
                <span className="text-gray-500 hidden sm:inline">→</span>
                <span className="flex items-center gap-2 text-neon-green bg-neon-green/10 px-3 py-1 rounded-full border border-neon-green/30 w-max shadow-[0_0_10px_rgba(57,255,20,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
                  AVAILABLE FOR HIRE
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form 
            onSubmit={handleSubmit}
            className="glass-card p-8 rounded-xl border border-white/10 flex flex-col gap-6"
          >
            <div className="space-y-1">
              <label className="font-mono text-xs text-cyan-400">&gt; input --name</label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="Enter your name" 
                className="w-full bg-transparent border-b-2 border-white/20 focus:border-cyan-500 py-2 px-0 text-white font-sans outline-none transition-colors duration-300 placeholder:text-gray-600"
              />
            </div>
            
            <div className="space-y-1">
              <label className="font-mono text-xs text-violet-400">&gt; input --email</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="Enter your email address" 
                className="w-full bg-transparent border-b-2 border-white/20 focus:border-violet-500 py-2 px-0 text-white font-sans outline-none transition-colors duration-300 placeholder:text-gray-600"
              />
            </div>
            
            <div className="space-y-1">
              <label className="font-mono text-xs text-neon-green">&gt; input --message</label>
              <textarea 
                name="message"
                required
                placeholder="How can we work together?" 
                rows="4"
                className="w-full bg-transparent border-b-2 border-white/20 focus:border-neon-green py-2 px-0 text-white font-sans outline-none transition-colors duration-300 resize-none placeholder:text-gray-600"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={formStatus === 'submitting'}
              className="mt-4 py-3 bg-[#121212] border border-cyan-500/50 text-cyan-400 font-mono text-sm uppercase tracking-wider hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === 'submitting' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Transmitting...
                </>
              ) : formStatus === 'success' ? (
                <>
                  <CheckCircle2 size={16} className="text-neon-green" />
                  <span className="text-neon-green">Message Sent</span>
                </>
              ) : formStatus === 'error' ? (
                <>
                  <XCircle size={16} className="text-red-500" />
                  <span className="text-red-500">Transmission Failed</span>
                </>
              ) : (
                <>
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  Transmit Message
                </>
              )}
            </button>
            
            <div className="text-center font-mono text-xs mt-2 min-h-[20px]">
              {formStatus === 'success' ? (
                <span className="text-neon-green">Connection established! Transmission successful. 📡</span>
              ) : formStatus === 'error' ? (
                <span className="text-red-500">Signal lost. Please try again or email directly. ⚠️</span>
              ) : (
                <span className="text-gray-500">Connection established. Awaiting your signal. 📡</span>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
