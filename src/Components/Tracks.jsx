import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Laptop, Network, Shield, GraduationCap, Cpu, Users, Workflow, Notebook as Robot, Database } from 'lucide-react';

const tracks = [
    {
        title: "Emerging Trends and Applications in ML/DL",
        description: "Exploring cutting-edge applications and developments in machine learning and deep learning technologies.",
        chairs: [
            { name: "Dr. Bhanu Sharma", institution: "Chitkara University, Punjab, India" },
            { name: "Dr. Gurjinder Singh", institution: "Chitkara University, Punjab, India" }
        ],
        icon: Brain,
        color: "blue"
    },
    {
        title: "AI and Soft Computing in Power Systems",
        description: "Integration of AI and soft computing in power, energy, communication, and security systems.",
        chairs: [
            { name: "Dr. Anurag Dwivedi", institution: "Bansal Institute of Engineering and Technology, Lucknow" },
            { name: "Dr. Saurabh Kumar", institution: "Institute of Engineering and Rural Technology (IERT), Prayagraj" },
            { name: "Dr. Punit Kumar Chaubey", institution: "Bansal Institute of Engineering and Technology, Lucknow" }
        ],
        icon: Cpu,
        color: "purple"
    },
    {
        title: "Innovative and Disruptive Technologies",
        description: "Exploring breakthrough technologies reshaping the future of computing and communication.",
        chairs: [
            { name: "Dr. Amanpreet Kaur", institution: "Chitkara University, Punjab, India" }
        ],
        icon: Sparkles,
        color: "amber"
    },
    {
        title: "Recent Trends in Generative AI",
        description: "Latest developments and innovations in the field of generative artificial intelligence.",
        chairs: [
            { name: "Dr. Vandana Sharma", institution: "Christ University, Delhi-NCR Campus" },
            { name: "Dr. Upinder Kaur", institution: "Akal University, Talwandi Sabo" }
        ],
        icon: Robot,
        color: "green"
    },
    {
        title: "Generative AI and Quantum Computing",
        description: "Exploring the convergence of generative AI and quantum computing technologies.",
        chairs: [
            { name: "Dr. Anitha Julian", institution: "Saveetha Engineering College, Tamil Nadu" },
            { name: "Dr. Ramyadevi R", institution: "Saveetha Engineering College, Tamil Nadu" },
            { name: "Dr. T. Ganesh Kumar", institution: "Galgotias University, Greater Noida" },
            { name: "Dr. Priti Rishi", institution: "SRM Institute of Science and Technology, Chennai" }
        ],
        icon: Laptop,
        color: "indigo"
    },
    {
        title: "Federated Learning for Healthcare",
        description: "Applications of federated learning in advancing predictive healthcare systems.",
        chairs: [
            { name: "Dr. Balamurugan Balasamy", institution: "Shiv Nadar University, Delhi-NCR" },
            { name: "Dr. Seema Rawat", institution: "Amity University, Uttar Pradesh" },
            { name: "Dr. Prithi Samuel", institution: "SRM Institute of Science and Technology, Chennai" },
            { name: "Dr. Firoz Khan", institution: "Ball State University, USA" }
        ],
        icon: Database,
        color: "rose"
    },
    {
        title: "Secure Healthcare Systems",
        description: "Advances in adversarial and multi-source transfer learning for healthcare security.",
        chairs: [
            { name: "Dr. Ganesh Gopal Devarajan", institution: "SRM Institute of Science and Technology" },
            { name: "Dr. Rajendra Prasad Mahapatra", institution: "SRM Institute of Science and Technology" }
        ],
        icon: Shield,
        color: "cyan"
    },
    {
        title: "AI and Deep Learning Applications",
        description: "Real-world applications and breakthroughs in AI and deep learning.",
        chairs: [
            { name: "Dr. P Privietha", institution: "Sathyabama Institute of Science and Technology" },
            { name: "Dr. T. Ganesh Kumar", institution: "Galgotias University" },
            { name: "Dr. Shajilin Loret", institution: "Francis Xavier Engineering College" },
            { name: "Dr. Manish T.I", institution: "SCMS School of Engineering and Technology" }
        ],
        icon: Workflow,
        color: "emerald"
    }
];

function TrackCard({ track, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white rounded-2xl transform transition-transform group-hover:scale-105 duration-300 shadow-lg" />
            <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-${track.color}-50 flex items-center justify-center flex-shrink-0`}>
                        <track.icon className={`w-6 h-6 text-${track.color}-600`} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{track.title}</h3>
                        <p className="text-gray-600 text-sm">{track.description}</p>
                    </div>
                </div>

                {/* Track Chairs */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-900">
                        <Users className="w-4 h-4 text-gray-600" />
                        <h4 className="font-semibold text-sm">Track Chairs</h4>
                    </div>
                    <div className="grid gap-3">
                        {track.chairs.map((chair, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-3 group/chair"
                            >
                                <div className={`w-8 h-8 rounded-lg bg-${track.color}-50/50 flex items-center justify-center flex-shrink-0`}>
                                    <GraduationCap className={`w-4 h-4 text-${track.color}-600`} />
                                </div>
                                <div>
                                    <p className="text-gray-900 font-medium text-sm group-hover/chair:text-blue-600 transition-colors">
                                        {chair.name}
                                    </p>
                                    <p className="text-gray-500 text-sm">{chair.institution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function Tracks() {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background Decorations */}


            <div className="container mx-auto px-4 relative">
                {/* Tracks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tracks.map((track, index) => (
                        <TrackCard key={index} track={track} index={index} />
                    ))}
                </div>
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

export default Tracks;