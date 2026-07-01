const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-[#050816]/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h2 className="text-white font-bold text-xl">
          Spoorthi<span className="text-purple-500">.</span>
        </h2>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;