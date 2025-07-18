// components/ProjectModal.jsx
import { motion } from 'framer-motion';

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div 
        className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-xl w-full relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-2xl hover:text-red-400"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-blue-400 mb-2">{project.title}</h2>
        <p className="text-lg text-gray-300">{project.description}</p>
        <hr className="my-4 border-gray-700" />
        <p className="text-sm text-gray-400">{project.details}</p>
      </motion.div>
    </motion.div>
  );
}
