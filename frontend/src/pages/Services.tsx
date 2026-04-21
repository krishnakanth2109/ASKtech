import { motion } from 'framer-motion';
import { Server, Code, Globe, Shield, Cloud, Wrench, Database, Smartphone, ChevronDown } from 'lucide-react';
import Hyperspeed from '../components/Hyperspeed';

export default function Services() {
  const mainServices = [
    {
      icon: Server,
      title: 'IT Development',
      description: 'Infrastructure setup, cloud integration, cybersecurity solutions, and comprehensive IT management.',
      features: [
        'Cloud Infrastructure Setup',
        'Network Architecture',
        'Cybersecurity Solutions',
        'IT Consulting & Strategy',
        'System Integration',
        'DevOps Implementation',
      ],
      gradient: 'from-[#6C63FF] to-[#00D4FF]',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom business applications, enterprise systems, and intelligent automation software.',
      features: [
        'Custom Business Applications',
        'Enterprise Resource Planning',
        'Process Automation',
        'API Development',
        'Microservices Architecture',
        'Legacy System Modernization',
      ],
      gradient: 'from-[#00D4FF] to-[#00FFA3]',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern responsive websites and high-performance web applications built with cutting-edge technology.',
      features: [
        'Responsive Web Design',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'Content Management Systems',
        'Single Page Applications',
        'Performance Optimization',
      ],
      gradient: 'from-[#00FFA3] to-[#6C63FF]',
    },
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: 'Security Audits',
      description: 'Comprehensive security assessments and vulnerability testing.',
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure with minimal downtime.',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: '24/7 technical support and ongoing system maintenance.',
    },
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'Database design, optimization, and data analytics.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications.',
    },
  ];

  return (
    <div className="pt-18 pb-20">
      <section
        className="hero-section home-container"
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          background: "black",
        }}
      >
        {/* === Hyperspeed Background === */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => { },
              onSlowDown: () => { },
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                sticks: 0x03b3c3,
              },
            }}
          />
        </div>

        {/* === Light Rays Overlay === */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            mixBlendMode: "screen", // soft glow blending
            pointerEvents: "none", // ensures it doesn't block clicks
          }}
        >

        </div>

        {/* === Hero Content === */}
        <div
          className="hero-content"
          style={{
            position: "relative",
            zIndex: 2,
            padding: "0 2rem",
            top: "50%",
            transform: "translateY(-50%)",
            textAlign: "center",
          }}
        >

          {/* ✅ Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          {/* ✅ Subtitle */}
          <p
            data-aos="fade-up"
            data-aos-delay="700"
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive technology solutions tailored to your business needs.
          </p>

        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 12, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          onClick={() => {
            document
              .getElementById("services-section")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            position: "absolute",
            bottom: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            cursor: "pointer",
          }}
        >
          <div className="flex flex-col items-center">
            <ChevronDown className="w-8 h-8 text-white animate-bounce" />
            <span className="text-xs text-gray-400 mt-1">Scroll Down</span>
          </div>
        </motion.div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity blur-xl"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  }}
                />

                <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all h-full">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-400 transition-all">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity rounded-b-3xl"
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Additional Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive support to ensure your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] flex items-center justify-center mb-4"
                >
                  <service.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-lg font-semibold mb-2 text-white">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/10 via-transparent to-[#00FFA3]/10" />

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
                Let's bring your vision to life
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Contact us today to discuss your project and discover how we can help you achieve your goals.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(108, 99, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white font-semibold text-lg"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
