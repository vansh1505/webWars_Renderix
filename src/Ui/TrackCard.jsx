import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, cardHover, glowVariant } from '../Utils/animation';

function TrackCard({ title, chairs, institution, icon: Icon, color }) {
  return (
    <motion.div 
      className="group"
      variants={fadeIn}
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={cardHover}
    >
      <div className={`bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden border border-${color}-100 group-hover:border-${color}-200 transition-colors`}>
        <motion.div 
          className={`absolute -top-20 -right-20 w-40 h-40 bg-${color}-500 rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`}
          variants={glowVariant}
          initial="initial"
          animate="animate"
        />
        <div className="flex items-start gap-6">
          <div className={`w-12 h-12 rounded-xl bg-${color}-100 flex items-center justify-center flex-shrink-0`}>
            <Icon className={`w-6 h-6 text-${color}-600`} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2">Track Chairs</p>
                {chairs.map((chair, i) => (
                  <p key={i} className="text-gray-700">{chair}</p>
                ))}
              </div>
              <p className={`text-${color}-600 font-medium`}>{institution}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TrackCard;