import { motion } from 'framer-motion';

export function Qualification() {
    const qualifications = [
        {
            title: "BSc (Hons) in Computer Science",
            subtitle: "Informatics Institute of Technology",
            time: "2021 – Present",
            icon: "🎓",
            instructor: "AFFILIATED WITH THE UNIVERSITY OF WESTMINSTER, LONDON",
            type: "edu",
        },
        {
            title: "The Complete Full-Stack Web Development Bootcamp",
            subtitle: "Udemy – Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps",
            time: "2023",
            icon: "💻",
            instructor: "Created by Dr. Angela Yu, Developer and Lead Instructor",
            type: "course",
        },
        {
            title: "The Web Developer Bootcamp 2025",
            subtitle: "Udemy – React added. Become a Developer With ONE course - HTML, CSS, JavaScript, React, Node, MongoDB and More!",
            time: "2023",
            icon: "👨🏼‍💻",
            instructor: "Created and instructed by Colt Steele",
            type: "course",
        },
        {
            title: "Modern React with Redux",
            subtitle: "Udemy – Become a Master React and Redux. Apply modern design patterns to build apps with React Router, TailwindCSS, Context, and Hooks!",
            time: "2023",
            icon: "⚛️",
            instructor: "Created and instructed by Stephen Grider",
            type: "course",
        },
        {
            title: "Java Masterclass 2025: 130+ Hours of Expert Lessons",
            subtitle: "Udemy – Gain real-world experience with OOP, coding exercises, and problem-solving for job-ready Java development skills",
            time: "2023",
            icon: "♨️",
            instructor: "Created by Tim Buchalka, and Tim Buchalka's Learn Programming Academy",
            type: "course",
        },
        {
            title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize",
            subtitle: "Udemy – Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.",
            time: "2023",
            icon: "🤖",
            instructor: "Created by Stephen Grider, Kirill Eremenko, Hadelin de Ponteves, and SuperDataScience Team",
            type: "course",
        },
                {
            title: "The Complete AI Guide: Learn ChatGPT, Generative AI & More",
            subtitle: "Udemy – 50+ Generative AI Tools to 10x Business, Productivity, Creativity | ChatGPT, Artificial Intelligence, and Prompt Engineering.",
            time: "2023",
            icon: "🧠",
            instructor: "Created by Julian Melanson, Benza Maman, and Leap Year Learning",
            type: "course",
        },
    ];

    return (
        <section id="qualification" className="bg-black text-white px-6 py-20 relative">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                    Qualification
                </h2>

                <div className="relative border-l border-gray-600 pl-6 space-y-10">
                    {qualifications.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative"
                        >
                            <div className="absolute -left-7 top-1 bg-cyan-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md text-xl">
                                {item.icon}
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold text-cyan-300">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.subtitle}</p>
                                {item.instructor && (
                                    <p className="text-sm text-gray-400 mt-1">
                                        <span className="font-semibold text-gray-300"></span> {item.instructor}
                                    </p>
                                )}
                                <p className="text-sm text-gray-500 italic">{item.time}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
