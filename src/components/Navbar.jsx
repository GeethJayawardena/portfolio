export function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-900 px-6 py-4 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold">Geeth</h1>
      <div className="flex gap-6">
        <a href="#home" className="hover:text-blue-400">Home</a>
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}
