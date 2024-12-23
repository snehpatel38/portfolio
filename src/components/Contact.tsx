import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
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
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Information
          </h2>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 space-y-6 hover:shadow-xl transition-shadow">
            {[
              {
                Icon: Mail,
                text: "snehpatel0308@gmail.com",
                href: "mailto:snehpatel0308@gmail.com",
              },
              {
                Icon: Phone,
                text: "+91-8320672038",
                href: "tel:+918320672038",
              },
              {
                Icon: MapPin,
                text: "Ahmedabad, Gujarat",
                href: "#",
              },
            ].map(({ Icon, text, href }) => (
              <motion.a
                key={text}
                href={href}
                whileHover={{ scale: 1.05 }}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Icon className="text-blue-400 mr-4" size={24} />
                <span>{text}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}