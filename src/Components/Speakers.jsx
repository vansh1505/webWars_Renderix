import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, 
  Building2, 
  GraduationCap, 
  Award,
  Sparkles,
  ExternalLink,
  Quote
} from 'lucide-react';
import { speakers } from '../data/SpeakersData';

function Speakers() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-2xl mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Mic className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold">Distinguished Speakers</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
            Keynote Speakers
            <Sparkles className="w-8 h-8 text-blue-600" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-renowned experts sharing cutting-edge insights in AI, Communication, and Security
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols- gap-12">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="flex flex-col md:flex-row h-full md:h-[400px]">
                  {/* Image Section */}
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                        <p className="text-blue-600 font-semibold">{speaker.title}</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                      >
                        <a href={speaker.link} target='_blank' rel='noreferrer'>
                        <ExternalLink className="w-5 h-5" />
                        </a>
                      </motion.button>
                    </div>

                    <div className="space-y-6">
                      {/* Institution */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-gray-900 font-medium">{speaker.institution}</p>
                          <p className="text-gray-600">{speaker.university}</p>
                        </div>
                      </div>

                      {/* Expertise */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-gray-900 font-medium mb-2">Areas of Expertise</p>
                          <div className="flex flex-wrap gap-2">
                            {speaker.expertise.map((area, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium"
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Awards */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                          <Award className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-gray-900 font-medium mb-2">Notable Achievements</p>
                          <ul className="space-y-1">
                            {speaker.awards.map((award, i) => (
                              <li 
                                key={i}
                                className="text-gray-600 text-sm flex items-center gap-2"
                              >
                                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                                {award}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote Section */}
                <div className="px-8 py-6 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <p className="text-gray-600 italic text-sm">
                      Join us for an insightful keynote session on the latest advancements and future directions in their respective fields.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't Miss Out!</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Register now to attend these enlightening keynote sessions and gain valuable insights from industry leaders.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/20"
            >
              Register for Conference
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default Speakers;