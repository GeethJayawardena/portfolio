import { motion } from 'framer-motion';

export function About() {
  return (
    <motion.div className="p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}>
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p>
        I'm a passionate full-stack developer with experience in building web apps using
        React, Node.js, and databases like MongoDB and PostgreSQL. I enjoy building beautiful
        and functional interfaces with clean backend logic.
      </p>
    </motion.div>
  );
}
