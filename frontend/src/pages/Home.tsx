import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import FeatureGrid from '../components/FeatureGrid';
import ProcessTimeline from '../components/ProcessTimeline';
import TechStack from '../components/TechStack';
import CTASection from '../components/CTASection';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { url: string }, HTMLElement>;
    }
  }
}

const text1 = "Empowering";
const text2 = "Businesses";
const text3 = "with Smart";
const text4 = "Technology";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="relative">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <AnimatedBackground />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE → TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
              >
                <Sparkles className="w-4 h-4 text-[#6C63FF]" />
                <span className="text-sm text-gray-300">
                  Welcome to the Future of Technology
                </span>
              </motion.div>

              {/* Heading */}


              <motion.h1
                variants={container}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                {/* Line 1 */}
                <span className="bg-gradient-to-r pb-2 from-white via-gray-200 to-gray-400 bg-clip-text text-transparent inline-block">
                  {text1.split("").map((char, index) => (
                    <motion.span key={index} variants={child}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>

                <br />

                {/* Line 2 */}
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent inline-block">
                  {text2.split("").map((char, index) => (
                    <motion.span key={index} variants={child}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>

                {/* Line 2 */}
                <span className="bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent inline-block">
                  {text3.split("").map((char, index) => (
                    <motion.span key={index} variants={child}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>

                {/* Line 2 */}
                <span className="bg-gradient-to-r pb-2 from-[#6C63FF] via-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent inline-block">
                  {text4.split("").map((char, index) => (
                    <motion.span key={index} variants={child}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>

              

              {/* Description */}
              {/* <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-400 mb-8"
              >
                Innovative IT services, custom software development, and modern web solutions designed to help businesses grow and scale.
              </motion.p> */}

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white font-semibold text-lg flex items-center gap-2"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>

                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white font-semibold text-lg"
                  >
                    Explore Services
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE → SPLINE MODEL */}
            <div style={{ width: "100%", height: "400px", overflow: "hidden", margin: "10px", position: "relative" }}>
              <spline-viewer
                url="https://prod.spline.design/EktdgsilKcP-PZrw/scene.splinecode"
                style={{
                  width: "100%",
                  height: "600px",
                  transform: "translateY(-40px)",  // Move model up by 150px
                }}
              ></spline-viewer>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional technology solutions.
            </p>
          </motion.div>

          <FeatureGrid />
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Our Development Process
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A streamlined approach to turn your vision into reality.
            </p>
          </motion.div>

          <ProcessTimeline />
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks we use to build exceptional solutions.
            </p>
          </motion.div>

          <TechStack />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
