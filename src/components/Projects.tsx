import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ExternalLink,
  Github,
  Brain,
  Bot,
  Image,
  Code,
  LucideIcon,
} from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Solution for Assisting Visually Impaired Individuals",
    description:
      " AI-powered visual assistance app to aid visually impaired individuals by analyzing images and providing - time scene descriptions, object detection, and text extraction. ",
    icon: Image,
    github: "https://github.com/snehpatel38/AI-Powered-Solution-for-Assisting-Visually-Impaired-Individuals",
    live: "https://github.com/snehpatel38/AI-Powered-Solution-for-Assisting-Visually-Impaired-Individuals",
    tags: ["Pytesseract", "CV2", "Streamlit"],
    image: "src/assets/projects/1.png",
  },
  {
    title: "Workout Recommendation System",
    description:
      "Personalized fitness recommendation system using machine learning algorithms to create tailored workout plans based on user profiles. ",
    icon: Bot,
    github: "https://github.com/snehpatel38/workout_recommendation_system",
    live: "https://github.com/snehpatel38/workout_recommendation_system",
    tags: ["Flask", "Docker", "Scikit-learn"],
    image: "src/assets/projects/2.png",
  },
  {
    title: "Bank Loan Report Dashboard",
    description:
      "Analyze and visualize key KPI metrics for bank loan performance.",
    icon: Brain,
    github: "https://public.tableau.com/app/profile/sneh.patel1713/viz/BANKLOANREPORT_17351315753900/DETAILS?publish=yes",
    live: "https://public.tableau.com/app/profile/sneh.patel1713/viz/BANKLOANREPORT_17351315753900/DETAILS?publish=yes",
    tags: ["Pygame", "NEAT", "Neural Networks"],
    image: "src/assets/projects/3.png",
  },
  {
    title: "AI Code Reviewer",
    image: "src/assets/projects/gif/demo.gif",
    description:
      "Developed an AI-powered code review application using Google APIs to detect errors and provide improvement recommendations.",
    icon: Code,
    github: "https://github.com/snehpatel38/AI_CODE_REVIEWER",
    live: "#",
    tags: ["Google APIs", "Python", "NLP"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  github: string;
  live: string;
  tags: string[];
  image: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Icon className="text-blue-400 mr-3" size={24} />
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </div>

        {/* Image Section */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-gray-400">
            No Image Available
          </div>
        )}

        <p className="text-gray-400 mb-4 min-h-[80px]">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags && project.tags.length > 0 ? (
            project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="text-gray-400 italic text-sm">
              No tags provided
            </span>
          )}
        </div>

        <div className="flex space-x-4">
          {project.github && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </motion.a>
          )}
          {project.live && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}