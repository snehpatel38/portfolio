import { motion } from 'framer-motion';
import { Brain, Database, LineChart, Code2 } from 'lucide-react';

const skills = [
  {
    category: "Programming",
    icon: Code2,
    items: [
      "Python",
      "SQL",
      "C++",
      "JavaScript",
      "HTML/CSS",
      "Flask"
    ]
  },
  {
    category: "Machine Learning",
    icon: Brain,
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-Learn",
      "Natural Language Processing",
      "Neural Networks",
      "Computer Vision"
    ]
  },
  {
    category: "Data Analysis",
    icon: LineChart,
    items: [
      "Tableau",
      "Time Series Analysis",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ]
  },
  {
    category: "Tools",
    icon: Database,
    items: [
      "MySQL",
      "Jupyter Notebook",
      "VS Code",
      "Postman",
      "Docker",
      "MatLab"
    ]
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-navy-800">
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
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

interface Skill {
  category: string;
  icon: React.ComponentType<any>;
  items: string[];
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-xl transition-shadow"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center mb-4">
          <div className="text-blue-400 mr-2">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
        </div>

        <ul className="space-y-2">
          {skill.items.map((item, itemIndex) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + itemIndex * 0.1 }}
              className="text-gray-300"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}