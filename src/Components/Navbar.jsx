import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Users,
  BookOpen,
  GraduationCap,
  Building2,
  ChevronDown,
  Globe2
} from 'lucide-react';

const navItems = [
  {
    label: 'Submissions',
    icon: BookOpen,
    dropdown: [
      { label: 'Guidelines', link: '/guidelines' },
      { label: 'IEEE E-Copyright Process', link: '/ieee-copyright-process.pdf', external: true },
      { label: 'Templates', link: 'https://www.ieee.org/conferences/publishing/templates.html', external: true }
    ]
  },
  {
    label: 'Committee',
    icon: Users,
    dropdown: [
      { label: 'Members', link: '/members' },
      { label: 'Speakers', link: '/speakers' },
    ]
  },
  {
    label: 'Registration',
    icon: GraduationCap,
    link: '/register',
    dropdown: null
  },
  {
    label: 'About',
    icon: Building2,
    dropdown: [
      { label: 'Galgotias University', link: '/about-gu' },
      { label: 'IEEE GUSB', link: '/about-ieeegusb' },
    ]
  },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || !isHomePage
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className='flex items-center'>
              <Link to='/' className='flex items-center'>
                <img src="iccsai.png" alt="iccsai" className='h-16' />
                <div
                  className={`h-8 w-px mx-2 ${isScrolled || !isHomePage ? 'bg-black' : 'bg-white/50'
                    }`}
                />
                <img src="/gustudentchapter.png" className='h-14' alt="ieee Gu" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <motion.div
                    className={`px-4 py-2 rounded-xl flex items-center gap-2 ${isScrolled || !isHomePage ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
                      }`}
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={() => setActiveDropdown(item.label)}
                    onHoverEnd={() => setActiveDropdown(null)}
                  >
                    <Link className='flex items-center gap-2' to={item.link}>
                      <item.icon className="w-4 h-4" />
                      {item.label}
                      {item.dropdown && (
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                      )}
                    </Link>
                  </motion.div>

                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-56 py-2 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100"
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="absolute -top-2 left-6 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100"></div>
                        {item.dropdown.map((subItem, subIndex) => (
                          <motion.div
                            key={subIndex}
                            className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            whileHover={{ x: 5 }}
                          >
                            {subItem.external ? (
                              <a href={subItem.link} target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                  {subItem.label}
                                </div>
                              </a>
                            ) : (
                              <Link to={subItem.link}>
                                <div className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                  {subItem.label}
                                </div>
                              </Link>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="h-8 w-px bg-white/20 mx-2"></div>

              <a href='https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCSAI2025' target='_blank'>
                <motion.button
                  className="relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/20 overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0"
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <span className="relative flex items-center gap-2">
                    Submit Paper
                    <Globe2 className="w-4 h-4" />
                  </span>
                </motion.button>
              </a>
            </div>

            <motion.button
              className="lg:hidden relative w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className={isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className={isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-white/90 backdrop-blur-lg pt-20"
          >
            <motion.div
              className="container mx-auto px-4 py-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.button
                    className="w-full px-4 py-3 rounded-xl flex items-center justify-between text-gray-600 hover:bg-blue-50"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      {item.label}
                    </div>
                    {item.dropdown && (
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <motion.div
                            key={subIndex}
                            className="block px-16 py-3 text-gray-500 hover:text-blue-600"
                            whileHover={{ x: 5 }}
                          >
                            {subItem.external ? (
                              <a href={subItem.link} target="_blank" rel="noopener noreferrer">
                                {subItem.label}
                              </a>
                            ) : (
                              <Link to={subItem.link}>
                                {subItem.label}
                              </Link>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCSAI2025" target='_blank'>
                <motion.button
                  className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/20 cursor-pointer"
                  whileTap={{ scale: 0.95 }}
                >
                  Submit Paper
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;