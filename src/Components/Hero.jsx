import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

function Hero() {
  return (
    <motion.header 
      className="relative h-screen flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-blue-950/60 mix-blend-multiply" />
        <img 
          src="/confSlider4.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="max-w-4xl relative"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <h1 className="text-7xl font-bold text-white mb-6 relative">
            ICCSAI 2025
          </h1>
          <h2 className="text-3xl text-blue-100 mb-4">
            3rd International Conference on Communication, Security, and Artificial Intelligence
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            4th - 6th April, 2025 | Galgotias University, Greater Noida, India
          </p>
          <div className="flex gap-4">
            <motion.button 
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0"
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <span className="relative">Submit Paper</span>
              <ArrowRight className="w-5 h-5 relative" />
            </motion.button>
            <motion.button 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CFP <BookOpen className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Hero;