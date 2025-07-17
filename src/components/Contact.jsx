import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <motion.section
      className="min-h-screen px-6 py-16 bg-gradient-to-br from-black to-gray-900 text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      id="contact"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Contact Me
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Let's connect! Feel free to reach out via any of the platforms below.
        </p>

        <div className="flex flex-col gap-6 items-center">
          <ContactItem
            icon={<Mail className="w-5 h-5 text-cyan-400" />}
            label="Email"
            value="geethjayawardena2000@gmail.com"
            href="mailto:geethjayawardena2000@gmail.com"
          />
          <ContactItem
            icon={<Phone className="w-5 h-5 text-cyan-400" />}
            label="Phone"
            value="+94 710 974 357"
            href="tel:+94710974357"
          />
          <ContactItem
            icon={<Linkedin className="w-5 h-5 text-cyan-400" />}
            label="LinkedIn"
            value="Geeth_Jayawardena"
            href="https://www.linkedin.com/in/Geeth_Jayawardena"
          />
          <ContactItem
            icon={<Github className="w-5 h-5 text-cyan-400" />}
            label="GitHub"
            value="Geeth-Jayawardena"
            href="https://github.com/Geeth-Jayawardena"
          />
        </div>
      </div>
    </motion.section>
  );
}

function ContactItem({ icon, label, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-3 rounded-md border border-cyan-500 hover:bg-cyan-500 hover:text-black transition-all duration-300 w-full max-w-sm"
    >
      {icon}
      <div className="text-left">
        <div className="text-sm text-gray-400">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </a>
  );
}
