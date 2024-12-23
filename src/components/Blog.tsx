import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const blogPosts = [
  {
    title: "Evolution of Language Representation Techniques",
    description: "A Journey from BoW to GPT.",
    link: "https://medium.com/@snehpatel0308/evolution-of-language-representation-techniques-a-journey-from-bow-to-gpt-99707199ef27",
    date: "Dec 2024",
  },
  {
    title: "Hacking the System Design",
    description: "How Search Engines Understand and Deliver Results.",
    link: "https://medium.com/@snehpatel0308/hacking-the-system-design-how-search-engines-understand-and-deliver-results-83cf6a469628",
    date: "Dec 2024",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
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
          <span className="text-blue-400 text-lg block mb-3">Recent Blogs</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog Posts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="block"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {post.description || "No description available."}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">{post.date || "Date not specified"}</span>
                  <ExternalLink className="text-blue-400" size={20} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}