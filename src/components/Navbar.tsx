import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'BLOG', href: '#blog' },
  { name: 'CONTACT', href: '#contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-white text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-blue-400">S</span>neh
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <motion.li key={item.name} whileHover={{ y: -2 }}>
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === item.href.slice(1) 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setActiveSection(item.href.slice(1))}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                      layoutId="underline"
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md ${
            isOpen ? 'block' : 'hidden'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href={item.href}
                  className={`block text-sm font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => {
                    setActiveSection(item.href.slice(1));
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;