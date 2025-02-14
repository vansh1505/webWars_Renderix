import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../Utils/animation';
import { Building2, BookOpen } from 'lucide-react';
import Hero from './Hero';
import About from './About';
import Topics from './Topics';
import TabButton from '../Ui/TabButton';
import Tracks from './Tracks';

const Home = () => {
    const [activeTab, setActiveTab] = useState('topics');
    
    const tabs = [
        { id: 'topics', icon: BookOpen, label: 'Topics' },
      { id: 'tracks', icon: Building2, label: 'Tracks' },
    ];
    
    const renderContent = () => {
      switch(activeTab) {
        case 'topics':
          return <Topics />;
        case 'tracks':
          return <Tracks />;
        default:
          return null;
      }
    };
  return (
    <>
        <Hero />
        <About />
        <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap gap-4 mb-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {tabs.map((tab) => (
              <TabButton 
                key={tab.id}
                {...tab}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </motion.div>
          {renderContent()}
        </div>
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Contribute?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Submit your research paper to one of our specialized tracks and be part of this prestigious conference.
            </p>
            <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCSAI2025" target='_blank'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg cursor-pointer shadow-blue-600/20"
              >
              Submit Your Paper
            </motion.button>
              </a>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Home;