import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Globe2, Sparkles } from 'lucide-react';
import { fadeIn, cardHover, glowVariant,staggerContainer } from '../Utils/animation';

function About() {
  return (
    <motion.div 
      className="space-y-8"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div 
        className="bg-white p-8 shadow-lg relative overflow-hidden"
      >
        <motion.div 
          className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500 opacity-10 blur-3xl"
          variants={glowVariant}
          initial="initial"
          animate="animate"
        />
        <h3 className="text-3xl font-bold text-blue-950 mb-6 flex items-center gap-3">
          ICCSAI 2025
          <Sparkles className="w-6 h-6 text-blue-600" />
        </h3>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          ICCSAI - 2025 will be held at Galgotias University, Greater Noida, India (NCR New Delhi). This prestigious event brings together global researchers, academics, and industry professionals to discuss advancements in Communication, Security, and Artificial Intelligence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-blue-50 p-6 rounded-xl border border-blue-100"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Key Details
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                Date: 4th - 6th April, 2025
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                Mode: Hybrid
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                Venue: Galgotias University, Greater Noida
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                Technical Sponsor: IEEE Uttar Pradesh Section
              </li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-blue-50 p-6 rounded-xl border border-blue-100"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
              <Globe2 className="w-5 h-5" />
              Conference Objective
            </h4>
            <p className="text-gray-600 leading-relaxed">
              ICCSAI-2025 is a non-profit international conference designed to advance knowledge in Computer & Communication Engineering, fostering global collaboration and setting new directions in research.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;