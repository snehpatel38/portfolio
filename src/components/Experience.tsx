import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Data Science Intern",
    company: "Innomatics Research Labs",
    location: "Remote, Hyderabad, India",
    period: "Sept 2024 – Present",
    points: [
      "Conducted univariate and bivariate analysis on numerical and categorical datasets",
      "Designed ML models for diamond price prediction achieving 268.1 RAE",
      "Implemented NLP workflows using Vectorization and Bag of Words",
      "Developed AI Code Reviewer application using Google APIs",
      "Work on AI Tutor/Chatbot/GenAI applications with RAG and LangChain"
    ]
  },
  {
    title: "AI/ML Intern",
    company: "IBM SkillsBuild",
    location: "Remote, Ahmedabad, Gujarat",
    period: "July 2024 – August 2024",
    points: [
      "Leveraged Watson Studio and Watson Assistant for AI/ML projects",
      "Built kidney stone prediction model with 81% accuracy",
      "Designed ECOWISE chatbot for eco-friendly purchasing decisions"
    ]
  },
  {
    title: "Data Analyst and Machine Learning Intern",
    company: "INFOLABZ",
    location: "Ahmedabad, Gujarat",
    period: "June 2024 – July 2024",
    points: [
      "Created Python scripts for data extraction from multiple APIs",
      "Performed data cleaning and preprocessing using Pandas",
      "Developed machine learning models for predictive analysis"
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-navy-800"
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
            My Professional Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-blue-500/10 rounded-lg">
          <Briefcase className="text-blue-400 w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
          <p className="text-gray-400">{experience.company}</p>
          <p className="text-gray-400">{experience.location}</p>
          <div className="flex items-center text-gray-400 mt-2">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{experience.period}</span>
          </div>
        </div>
      </div>
      <ul className="space-y-4">
        {experience.points.map((point, idx) => (
          <li key={idx} className="flex items-start transition-colors hover:text-white">
            <span className="text-blue-400 mr-3">•</span>
            <span className="text-gray-300">{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}