export function Navbar() {
  return (
    <nav className="fixed w-full backdrop-blur-sm bg-gray-900/40 px-6 py-4 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold text-white">Geeth</h1>
      <div className="flex gap-6 text-white">
        <a href="#home" className="hover:text-blue-400">Home</a>
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#projects" className="hover:text-blue-400">Recent Work</a>
        <a href="#qualification" className="hover:text-blue-400">Qualification</a>
        <a href="#services" className="hover:text-blue-400">Services</a>

        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}
