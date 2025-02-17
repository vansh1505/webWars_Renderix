import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Timer, Sparkles } from 'lucide-react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('April 4, 2025 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="py-12 relative overflow-hidden bg-blue-50">
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div 
              className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-xl mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
              <span className="font-medium">Time Until Launch</span>
              <Sparkles className="w-8 h-8 text-blue-600" />
            </h2>
          </div>

          {/* Countdown Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {timeBlocks.map((block, index) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 rounded-2xl transform transition-all duration-300 group-hover:scale-[1.02] shadow-lg" />
                <div className="relative p-8 rounded-2xl border border-blue-100/50">
                  <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 tabular-nums">
                    {String(block.value).padStart(2, '0')}
                  </div>
                  <div className="text-gray-600 font-medium text-lg">
                    {block.label}
                  </div>
                  
                  {/* Decorative Circle */}
                  <div className="absolute top-3 right-3 w-4 h-4">
                    <div className="absolute w-4 h-4 bg-blue-200 rounded-full animate-ping" />
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full opacity-50" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CountdownTimer;