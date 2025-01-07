import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-navy-800"
    >
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
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-blue-400 text-base sm:text-lg block mb-2 sm:mb-3">
            Get To Know More
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            About Me
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Education Card */}
          <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-blue-500/10 rounded-lg">
                <GraduationCap className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-2">
                  B.E in Computer Engineering
                </h4>
                <p className="text-gray-400 text-sm sm:text-base">
                  Saffrony Institute of Technology
                </p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  Expected Graduation: May 2025
                </p>
                <div className="mt-3 sm:mt-4 inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 rounded-lg">
                  <p className="text-blue-500 font-semibold text-sm sm:text-base">
                    CGPA: 8.89/10.00
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-blue-500/10 rounded-lg">
                <Award className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Achievements</h3>
            </div>

            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {[
                'Saffcon 2023 - Review Paper Presentation',
                'Eureka 2022 - Participated in inter-college Entrepreneurship Event',
                '1st Prize in inter-college Tech Competition',
                'Code-Chef – 2 star (Starter 77 - Rank 206)',
              ].map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start group transition-colors"
                >
                  <span className="text-blue-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0">•</span>
                  <span className="text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certification Card */}
          <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-blue-500/10 rounded-lg">
                <Award className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                Certifications
              </h3>
            </div>

            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {[
                'Generative AI Certified Professional 2024 (Oracle)',
                'AI and ML For Geodata Analysis (ISRO-IIRS)',
                'Machine Learning Specialization (Coursera)',
              ].map((certification, index) => (
                <li
                  key={index}
                  className="flex items-start group transition-colors"
                >
                  <span className="text-blue-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0">•</span>
                  <span className="text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors">
                    {certification}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}