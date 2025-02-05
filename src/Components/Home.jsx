import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../Utils/animation';
import { Building2, BookOpen } from 'lucide-react';
import Hero from './Hero';
import About from './About';
import Topics from './Topics';
import TabButton from '../Ui/TabButton';

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
      </section>
    </>
  )
}

export default Home;