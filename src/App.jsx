// App.jsx
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ProjectModal } from './components/ProjectModal';
import { Qualification } from './components/Qualification';
import { Services } from './components/Services';

import './index.css';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-gray-950 text-white scroll-smooth">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects">
        <Projects setSelectedProject={setSelectedProject} />
      </section>
      <section id="qualification"><Qualification /></section>
      <section id="services "><Services  /></section>
      <section id="contact"><Contact /></section>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}