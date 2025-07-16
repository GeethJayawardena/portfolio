import { motion } from 'framer-motion';

const projectList = [
  {
    title: 'DeepBrain',
    desc: 'Brain hematoma detection using CNN + LSTM and CT scan images.',
    link: '#'
  },
  {
    title: 'Respiria',
    desc: 'Detect respiratory diseases from lung sounds using CNN.',
    link: '#'
  }
];

export function Projects() {
  return (
    <motion.div className="p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projectList.map((proj, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="mb-2">{proj.desc}</p>
            <a href={proj.link} className="text-blue-400 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </motion.div>
  );
}