import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, TestTube, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Understanding Requirements',
    description: 'Deep dive into your business needs and goals.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Planning and Design',
    description: 'Strategic planning and creating detailed blueprints.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Development',
    description: 'Building your solution with cutting-edge technology.',
    icon: Code,
  },
  {
    number: '04',
    title: 'Testing & Optimization',
    description: 'Rigorous testing to ensure quality and performance.',
    icon: TestTube,
  },
  {
    number: '05',
    title: 'Deployment & Support',
    description: 'Smooth launch and ongoing maintenance support.',
    icon: Rocket,
  },
];

export default function ProcessTimeline() {
  return (
    <div className="relative px-6 lg:px-12">
      
      {/* ✅ Desktop Timeline Line (Perfectly Aligned 1 → 5) */}
      <div className="hidden lg:block absolute top-[40px] left-[8%] right-[8%] h-0.5 
      bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#00FFA3]" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative">
        
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative flex flex-col items-center text-center"
          >

            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative z-10 w-20 h-20 rounded-2xl 
              bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] 
              flex items-center justify-center mb-4 
              shadow-lg shadow-[#6C63FF]/30"
            >
              <step.icon className="w-10 h-10 text-white" />

              {/* Step Number */}
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg 
              bg-[#0B0B0F] border-2 border-[#6C63FF] 
              flex items-center justify-center text-xs font-bold text-[#6C63FF]">
                {step.number}
              </div>
            </motion.div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 text-white">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 max-w-xs">
              {step.description}
            </p>

            {/* Mobile Vertical Line */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                className="lg:hidden absolute top-20 left-1/2 w-0.5 h-full 
                bg-gradient-to-b from-[#6C63FF] to-[#00D4FF] 
                transform -translate-x-1/2 origin-top"
              />
            )}

          </motion.div>
        ))}
      </div>
    </div>
  );
}