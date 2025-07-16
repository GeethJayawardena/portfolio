import { motion } from 'framer-motion';

export function Contact() {
  return (
    <motion.div className="p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}>
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form action="https://formspree.io/f/{your-id}" method="POST" className="flex flex-col gap-4 max-w-md">
        <input type="text" name="name" placeholder="Your Name" className="p-2 rounded" required />
        <input type="email" name="email" placeholder="Your Email" className="p-2 rounded" required />
        <textarea name="message" placeholder="Your Message" className="p-2 rounded h-32" required />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Send Message
        </button>
      </form>
    </motion.div>
  );
}