import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Code, Paintbrush, MonitorSmartphone } from "lucide-react";

const services = [
  {
    icon: <Code size={36} />,
    title: "Web Development",
    description: "Building responsive full-stack web apps using React, Node.js, and modern APIs.",
  },
  {
    icon: <Paintbrush size={36} />,
    title: "UI/UX Design",
    description: "Designing clean user interfaces with attention to detail and user experience.",
  },
  {
    icon: <MonitorSmartphone size={36} />,
    title: "Mobile Optimization",
    description: "Creating seamless mobile-first designs that work across all devices.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-gray-950 py-20 px-6 md:px-20 text-white">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          What I Offer
        </h2>
        <p className="text-gray-400 mt-2">My technical expertise</p>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-3">
        {services.map((service, index) => (
          <Tilt
            key={index}
            glareEnable={false}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.02}
            className="transition-transform duration-300"
          >
            <motion.div
              className="bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-cyan-500/10 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4 text-cyan-400">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}


// import { motion } from "framer-motion";
// import { Code, Paintbrush, MonitorSmartphone } from "lucide-react";

// const services = [
//   {
//     icon: <Code size={36} />,
//     title: "Web Development",
//     description: "Crafting modern full-stack web apps using React, Node.js, Express, and MongoDB.",
//     gradient: "from-cyan-500 to-blue-500",
//   },
//   {
//     icon: <Paintbrush size={36} />,
//     title: "UI/UX Design",
//     description: "Creating sleek interfaces with a focus on user-centered design and experience.",
//     gradient: "from-pink-500 to-purple-500",
//   },
//   {
//     icon: <MonitorSmartphone size={36} />,
//     title: "Responsive Design",
//     description: "Building mobile-first apps that work seamlessly across all screen sizes.",
//     gradient: "from-yellow-400 to-orange-500",
//   },
// ];

// export function Services() {
//   return (
//     <section
//       id="services"
//       className="py-24 px-6 md:px-20 bg-gradient-to-b from-black to-gray-900 text-white"
//     >
//       <motion.div
//         className="text-center mb-16"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
//           Services I Provide
//         </h2>
//         <p className="text-gray-400 mt-3">My areas of expertise</p>
//       </motion.div>

//       <div className="grid gap-8 md:grid-cols-3">
//         {services.map((service, i) => (
//           <motion.div
//             key={i}
//             className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition-transform duration-300 relative overflow-hidden group`}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//           >
//             <div className="bg-white/10 backdrop-blur-lg p-4 rounded-full mb-4 w-fit transition-all duration-300 group-hover:rotate-6">
//               {service.icon}
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
//             <p className="text-sm text-white/90">{service.description}</p>

//             {/* Glow Effect */}
//             <div className="absolute -inset-0.5 bg-white opacity-5 blur-2xl group-hover:opacity-10 transition duration-500"></div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
