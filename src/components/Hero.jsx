import { motion } from 'framer-motion';
import photo from '../assets/background.jpg'; // use correct path to 16:9 image
import mobilePhoto from '../assets/mobile.png'; // use correct path to 16:9 image

// export function Hero() {
//   return (
//     <motion.section
//       className="relative h-screen w-full bg-black text-white overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       id="home"
//     >
//       {/* Fullscreen Background Image */}
//       <div
//         className="absolute inset-0 bg-contain bg-right bg-no-repeat
// "
//         style={{ backgroundImage: `url(${photo})` }}
//       >
//         {/* Optional dark overlay for text readability */}
//         <div className="absolute inset-0 bg-black/40" />
//         {/* <div className="absolute inset-0 bg-black/50" /> */}
//         {/* <div className="absolute inset-0 backdrop-blur-md bg-black/30" /> */}


//       </div>

//       {/* Left-side Text Content */}
//       <motion.div
//         className="relative z-10 h-full flex flex-col justify-center px-8 md:px-24 max-w-2xl"
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1, delay: 0.2 }}
//       >
//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
//           Hi, I'm Geeth
//         </h1>
//         <p className="mt-4 text-lg md:text-xl text-gray-200">
//           A passionate <span className="text-cyan-400">Full Stack Developer</span> building sleek and scalable apps using <span className="text-blue-400">React</span>, <span className="text-blue-400">Node.js</span>, and <span className="text-blue-400">MongoDB</span>.
//         </p>
//         <a
//           href="#contact"
//           className="mt-6 inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-semibold transition"
//         >
//           Let's Connect
//         </a>
//       </motion.div>
//     </motion.section>
//   );
// }

// import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.section
      className="relative h-screen w-full text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="home"
    >
      {/* Mobile Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${mobilePhoto})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Desktop Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center px-8 md:px-24 max-w-2xl"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Hi, I'm Geeth
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          A passionate{" "}
          <span className="text-cyan-400">Full Stack Developer</span> building
          sleek and scalable apps using{" "}
          <span className="text-blue-400">React</span>,{" "}
          <span className="text-blue-400">Node.js</span>, and{" "}
          <span className="text-blue-400">MongoDB</span>.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-full font-semibold transition"
        >
          Let's Connect
        </a>
      </motion.div>
    </motion.section>
  );
}
