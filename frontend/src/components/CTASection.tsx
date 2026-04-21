import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/20 via-[#00D4FF]/10 to-[#00FFA3]/20" />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(108, 99, 255, 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#6C63FF]/20 to-[#00D4FF]/20 border border-[#6C63FF]/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#6C63FF]" />
            <span className="text-sm text-gray-300">Let's Build Something Amazing</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Ready to Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
              Business with Technology?
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their business with our innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(108, 99, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white font-semibold text-lg flex items-center gap-2 group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white/5 border-2 border-white/20 backdrop-blur-sm text-white font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
