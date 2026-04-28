import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-true-black text-white font-mono flex items-center justify-center p-4 scanlines relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full border border-red-500/50 bg-[#121212] p-8 md:p-12 shadow-[0_0_30px_rgba(239,68,68,0.2)] relative z-10"
      >
        <div className="text-red-500 mb-6 flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          ERROR_404
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white uppercase">
          Boring Developer <br/> Not Found
        </h1>
        
        <div className="space-y-4 text-gray-400 mb-10 border-l-2 border-red-500/50 pl-4">
          <p className="text-red-400">&gt; FATAL ERROR: Generic developer not found in this portfolio.</p>
          <p>&gt; SUGGESTION: You've found someone who actually cares about craft.</p>
          <p>&gt; SYSTEM STATUS: Ready to build amazing things.</p>
        </div>
        
        <Link 
          to="/"
          className="inline-block px-6 py-3 bg-red-500/10 text-red-400 border border-red-500/50 hover:bg-red-500/20 hover:text-red-300 transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] interactive uppercase tracking-wider text-sm"
        >
          [ RETURN TO HOME ]
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
