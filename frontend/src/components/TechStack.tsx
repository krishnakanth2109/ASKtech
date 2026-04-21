import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#68A063' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'Next.js', color: '#FFFFFF' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'GraphQL', color: '#E10098' },
];

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            boxShadow: `0 0 30px ${tech.color}40`,
          }}
          className="relative group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-center"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              background: `conic-gradient(from 0deg, ${tech.color}20 0%, transparent 50%, ${tech.color}20 100%)`,
            }}
          />

          <div className="relative z-10 text-center">
            <div
              className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center text-2xl font-bold"
              style={{
                backgroundColor: `${tech.color}20`,
                color: tech.color,
                border: `2px solid ${tech.color}40`,
              }}
            >
              {tech.name.charAt(0)}
            </div>
            <p className="text-sm font-medium text-white">{tech.name}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
