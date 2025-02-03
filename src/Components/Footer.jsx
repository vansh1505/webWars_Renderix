import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ArrowRight, Shield, Users } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
            <motion.div
                className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-12"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.div className="space-y-4">
                        <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-blue-400" />
                            Contact Us
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Galgotias University<br />
                            Plot No.2, Sector 17-A<br />
                            Greater Noida, Uttar Pradesh<br />
                            India
                        </p>
                    </motion.div>
                    <motion.div className="space-y-4">
                        <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                            <ArrowRight className="w-5 h-5 text-blue-400" />
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {['Call for Papers', 'Registration', 'Program', 'Venue'].map((link, i) => (
                                <motion.li
                                    key={i}
                                    className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"
                                    whileHover={{ x: 5 }}
                                >
                                    {link}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div className="space-y-4">
                        <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-blue-400" />
                            Technical Sponsor
                        </h3>
                        <p className="text-gray-400">IEEE Uttar Pradesh Section</p>
                    </motion.div>
                    <motion.div className="space-y-4">
                        <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-400" />
                            Follow Us
                        </h3>
                        <ul className="space-y-2">
                            {['LinkedIn', 'Twitter', 'Facebook'].map((social, i) => (
                                <motion.li
                                    key={i}
                                    className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"
                                    whileHover={{ x: 5 }}
                                >
                                    {social}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <p>Made with ❤️ by team Renderix</p>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;