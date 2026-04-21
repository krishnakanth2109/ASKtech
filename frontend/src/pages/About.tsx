import { motion } from 'framer-motion';
import { Award, Target, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '250+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '10+', label: 'Years Experience' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative technology solutions that drive growth and digital transformation.',
      gradient: 'from-[#6C63FF] to-[#00D4FF]',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every project, ensuring exceptional results.',
      gradient: 'from-[#00D4FF] to-[#00FFA3]',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients, fostering partnerships built on trust and transparency.',
      gradient: 'from-[#00FFA3] to-[#FF6B6B]',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that future-proof your business.',
      gradient: 'from-[#FF6B6B] to-[#6C63FF]',
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="relative py-20 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(108, 99, 255, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                About
              </span>
              {' '}
              <span className="bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
                ASK Software Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              We help businesses adopt modern technology and drive digital transformation through innovative solutions.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative p-8 md:p-12 rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/10 via-transparent to-[#00D4FF]/10" />

            <div className="relative z-10">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                ASK Software Solutions is a leading technology company specializing in IT development, custom software solutions, and modern web applications. We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Our team of skilled professionals leverages the latest technologies and best practices to build scalable IT systems, enterprise applications, and high-performance websites that help businesses thrive in the digital age.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center group hover:border-white/20 transition-all"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6C63FF]/0 to-[#00D4FF]/0 group-hover:from-[#6C63FF]/10 group-hover:to-[#00D4FF]/10 transition-all" />

                <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity" />

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {value.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/10 via-transparent to-[#00D4FF]/10" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Ready to work together?
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Let's discuss how we can help transform your business with technology.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(108, 99, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white font-semibold text-lg"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
