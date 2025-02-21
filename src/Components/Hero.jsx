"use client"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Sparkles, Calendar, MapPin } from "lucide-react"

function Hero() {
  return (
    <motion.header
      className="relative min-h-screen flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-950/80 mix-blend-multiply" />
        <img src="/confSlider4.webp" alt="Conference Background" className="w-full h-full object-cover" />
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
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.span
            className="inline-block px-4 py-2 bg-blue-500/40 text-white rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
            <Calendar className="inline-block w-4 h-4 mr-2" />
            April 4-6, 2025
            </div>
          </motion.span>
          <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6 relative">ICCSAI 2025</h1>
          <h2 className="text-3xl text-blue-100 mb-4">
            3rd International Conference on Communication, Security, and Artificial Intelligence
          </h2>
          <p className="text-xl text-blue-200 mb-8 flex items-center">
            <MapPin className="inline-block w-5 h-5 mr-2" />
            Galgotias University, Greater Noida, India
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
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
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
      </motion.div>
    </motion.header>
  )
}

export default Hero

