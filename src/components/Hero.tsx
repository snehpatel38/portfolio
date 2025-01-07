import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';
import myImage from '../assets/myImage.jpg'; // Update with the correct path to your image

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-navy-800 pt-16">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-navy-500/30 mix-blend-overlay" />
      </motion.div>

      {/* Content Wrapper */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:w-1/2"
        >
          <motion.span
            className="text-blue-400 text-2xl mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Hello, I'm
          </motion.span>
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Sneh Patel
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-4xl font-semibold text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Aspiring Data Scientist & AI/ML Engineer
          </motion.h2>
          <motion.p
            className="text-2xl text-gray-400 mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Passionate about AI/ML and building innovative solutions. Exploring the intersection of artificial intelligence and real-world applications.
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="https://github.com/snehpatel38"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-black-800/50 rounded-lg hover:bg-blue-500/20 text-gray-400 hover:text-white transition-all"
            >
              <GithubIcon size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/snehpatel38"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-black-800/50 rounded-lg hover:bg-blue-500/20 text-gray-400 hover:text-white transition-all"
            >
              <LinkedinIcon size={24} />
            </motion.a>
            <motion.a
              href="mailto:snehpatel0308@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-black-800/50 rounded-lg hover:bg-blue-500/20 text-gray-400 hover:text-white transition-all"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-6 md:mt-0 md:w-1/3"
        >
          <motion.div 
            className="w-90 h-90 mx-auto rounded-full overflow-hidden border-4 border-blue-500/50 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-blue-500/20"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <img
              src={myImage}
              alt="Sneh Patel"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}