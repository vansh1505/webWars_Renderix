import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, cardHover } from '../Utils/animation';

function TopicCard({ icon: Icon, title, items, color }) {
  return (
    <motion.div 
      className="relative group"
      variants={cardHover}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}-100 to-${color}-50 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg relative z-10 border border-gray-100 h-full">
        <div className={`w-12 h-12 rounded-xl bg-${color}-100 flex items-center justify-center mb-6`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <motion.li 
              key={i}
              className="flex items-center gap-2 text-gray-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <span className={`w-1.5 h-1.5 rounded-full bg-${color}-400`} />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default TopicCard;