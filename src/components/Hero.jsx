import { motion } from 'framer-motion';

export function Hero() {
  return (
    <motion.div className="h-screen flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Geeth</h1>
      <p className="text-xl">Full Stack Developer | React • Node • MongoDB</p>
    </motion.div>
  );
}
