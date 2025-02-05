import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Radio, Laptop, Network } from 'lucide-react';
import { fadeIn, staggerContainer } from '../Utils/animation';
import TopicCard from '../Ui/TopicCard';

const topics = [
  { 
    icon: Brain, 
    title: "Artificial Intelligence", 
    items: ["LLM", "Federated Learning", "Machine Learning", "Deep Learning"],
    color: "blue"
  },
  { 
    icon: Brain, 
    title: "Artificial Intelligence", 
    items: ["LLM", "Federated Learning", "Machine Learning", "Deep Learning"],
    color: "blue"
  },
  { 
    icon: Shield, 
    title: "Security", 
    items: ["Blockchain", "Cryptography", "Cyber Security", "Privacy and Preservation"],
    color: "green"
  },
  { 
    icon: Radio, 
    title: "Communication", 
    items: ["5G/6G/7G Technologies", "IoT", "IIoT", "Wireless Networks"],
    color: "purple"
  },
  { 
    icon: Laptop, 
    title: "Computing", 
    items: ["Cloud Computing", "Edge Computing", "Quantum Computing", "DNA Computing"],
    color: "orange"
  },
  { 
    icon: Network, 
    title: "Emerging Technologies", 
    items: ["AR/VR/Metaverse", "Robotics", "Smart Grid", "Electric Vehicles"],
    color: "pink"
  }
];

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