import { motion } from 'framer-motion';
import { Users, Wrench, Shield, Zap, Headphones as HeadphonesIcon, Clock } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Skilled Professionals',
    description: 'Expert technology professionals with years of industry experience.',
    gradient: 'from-[#6C63FF] to-[#00D4FF]',
  },
  {
    icon: Wrench,
    title: 'Modern Tools',
    description: 'Cutting-edge development tools and frameworks for optimal results.',
    gradient: 'from-[#00D4FF] to-[#00FFA3]',
  },
  {
    icon: Shield,
    title: 'Secure Architecture',
    description: 'Enterprise-grade security and scalability built into every solution.',
    gradient: 'from-[#00FFA3] to-[#6C63FF]',
  },
  {
    icon: Zap,
    title: 'Client-Focused',
    description: 'Tailored solutions that align with your business goals and vision.',
    gradient: 'from-[#FF6B6B] to-[#FFD93D]',
  },
  {
    icon: HeadphonesIcon,
    title: 'Reliable Support',
    description: 'Dedicated support team available to assist you every step of the way.',
    gradient: 'from-[#FFD93D] to-[#6C63FF]',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Efficient project delivery without compromising on quality.',
    gradient: 'from-[#6C63FF] to-[#FF6B6B]',
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            style={{
              backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
            }}
          />

          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}
          >
            <feature.icon className="w-7 h-7 text-white" />
          </motion.div>

          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-400 transition-all">
            {feature.title}
          </h3>

          <p className="text-gray-400 leading-relaxed">
            {feature.description}
          </p>

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
