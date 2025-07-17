import { motion } from 'framer-motion';

export function About() {
  return (
    <motion.section
      className="min-h-screen px-6 py-16 bg-gradient-to-br from-gray-900 to-black text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      id="about"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-300 mb-6">
          I'm a dedicated <span className="text-cyan-400 font-semibold">Full Stack Software Engineer</span> with a deep passion for crafting dynamic, user-centric web applications. I specialize in developing responsive front-ends with <span className="text-blue-400">React.js</span> and architecting robust backends using <span className="text-blue-400">Node.js</span> and <span className="text-blue-400">Express</span>. My experience includes working with modern databases such as <span className="text-blue-400">MongoDB</span> and <span className="text-blue-400">PostgreSQL</span>.
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
          I love building clean, efficient code and delivering intuitive UI experiences. Whether it's building from scratch or contributing to existing products, I bring a problem-solving mindset and a keen eye for detail to every project.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          {['React.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'TailwindCSS', 'JavaScript', 'Git'].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium text-cyan-300 border border-cyan-500 shadow-md hover:scale-105 transition">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
