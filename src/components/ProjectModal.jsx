// components/ProjectModal.jsx
// import { motion, AnimatePresence } from 'framer-motion';

// export function ProjectModal({ project, onClose }) {
//   return (
//     <AnimatePresence>
//       {project && (
//         <motion.div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={onClose}
//         >
//           <motion.div
//             className="bg-gray-900 rounded-xl shadow-lg p-8 max-w-lg w-[90%] text-white relative"
//             initial={{ scale: 0.8, opacity: 0, y: 50 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             exit={{ scale: 0.8, opacity: 0, y: 50 }}
//             transition={{ duration: 0.3 }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl font-bold"
//               onClick={onClose}
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold text-blue-400 mb-2">{project.title}</h2>
//             <p className="text-gray-300 mb-4">{project.description}</p>
//             <p className="text-sm text-gray-400 whitespace-pre-line">{project.details}</p>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


// components/ProjectModal.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 rounded-2xl p-8 max-w-xl w-[90%] relative shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              onClick={onClose}
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-blue-400">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <p className="text-sm text-gray-400">{project.details}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
