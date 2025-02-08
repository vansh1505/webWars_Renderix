import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../Utils/animation';
import TopicCard from '../Ui/TopicCard';
import {topics} from '../data/TopicsData';

function Topics() {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {topics.map((topic, index) => (
        <TopicCard key={index} {...topic} />
      ))}
    </motion.div>
  );
}

export default Topics;