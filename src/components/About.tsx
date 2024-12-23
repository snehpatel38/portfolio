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
        className="container mx-auto px-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-lg block mb-3">
            Get To Know More
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Education Card */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <GraduationCap className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  B.E in Computer Engineering
                </h4>
                <p className="text-gray-300">Saffrony Institute of Technology</p>
                <p className="text-gray-400 mt-1">
                  Expected Graduation: May 2025
                </p>
                <div className="mt-4 inline-block px-4 py-2 bg-blue-500/10 rounded-lg">
                  <p className="text-blue-400 font-semibold">CGPA: 8.89/10.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Card */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Award className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Achievements</h3>
            </div>

            <ul className="space-y-4">
              {[
                'Saffcon 2023 - Review Paper Presentation',
                'Eureka 2022 - Paricipate in inter-college Enturprenurship Event',
                '1st Prize in inter-college Tech Competition',
                'Code-Chef – 2 star (Starter 77 - Rank 206)'
              ].map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start transition-colors hover:text-white"
                >
                  <span className="text-blue-400 mr-3">•</span>
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certification*/}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Award className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Achievements</h3>
            </div>

            <ul className="space-y-4">
              {[
                'Generative AI Certified Professional 2024 (Oracle)',
                'AI and ML For Geodata Analysis (ISRO-IIRS)',
                'Machine Learning Specialization (Coursera)'
              ].map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start transition-colors hover:text-white"
                >
                  <span className="text-blue-400 mr-3">•</span>
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}