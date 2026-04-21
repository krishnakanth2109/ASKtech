import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed w-96 h-96 rounded-full pointer-events-none z-0 blur-3xl opacity-30"
      style={{
        background: 'radial-gradient(circle, #6C63FF 0%, transparent 70%)',
      }}
      animate={{
        x: mousePosition.x - 192,
        y: mousePosition.y - 192,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 200,
        mass: 0.5,
      }}
    />
  );
}
