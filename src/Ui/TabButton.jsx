import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Utils/animation';

function TabButton({ id, icon: Icon, label, isActive, onClick }) {
  return (
    <motion.button 
      onClick={() => onClick(id)}
      className={`px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all ${
        isActive 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
          : 'bg-white text-gray-600 hover:bg-gray-50'
      }`}
      variants={fadeIn}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-5 h-5" />
      {label}
    </motion.button>
  );
}

export default TabButton;