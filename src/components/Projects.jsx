// components/Projects.jsx
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import '../index.css';

const projects = [
  {
    title: 'DeepBrain',
    description: 'Brain hematoma detection using CNN + LSTM and CT scan images.',
    details: 'Built with Python, TensorFlow, and Streamlit. Used DICOM preprocessing and LSTM-CNN hybrid model.',
  },
  {
    title: 'Respiria',
    description: 'Detect respiratory diseases from lung sounds using CNN.',
    details: 'Created using CNN with MFCC features, Django REST API backend, and Flutter frontend.',
  },
  {
    title: 'Sport Shop Management System',
    description: 'Inventory and sales system for a sports equipment store.',
    details: 'Built using Java and MySQL with GUI using Java Swing. Includes billing, stock management, and reporting.',
  },
  {
    title: 'HomTeq E-Commerce Website 2023',
    description: 'Online platform for electronics and smart home devices.',
    details: 'Developed with React, Node.js, Express, MongoDB. Features shopping cart, authentication, payment integration.',
  },
  {
    title: 'Partly (Enhanced E-commerce Platform)',
    description: 'Smart e-commerce solution tailored for automotive parts.',
    details: 'Includes advanced filtering, supplier management, React frontend, Node backend, PostgreSQL, and Stripe API.',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal full-stack portfolio with projects and contact info.',
    details: 'Built using React, Tailwind CSS, Framer Motion. Responsive and scroll-animated UI.',
  }
];

export function Projects({ setSelectedProject }) {
  return (
    <motion.div className="relative py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>

      <h2 className="text-4xl font-bold text-center mb-12">Recent Work</h2>

      <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}>
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}>
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.3}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/10 hover:border-blue-500/50 shadow-xl rounded-2xl p-6 cursor-pointer hover:scale-105 transition-all duration-300 animate-float"
              onClick={() => setSelectedProject(proj)}>
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">{proj.title}</h3>
              <p className="text-sm text-gray-300">{proj.description}</p>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}