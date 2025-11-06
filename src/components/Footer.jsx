export default function Footer() {
  return (
    <footer className="bg-[#08080C] text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Synapse. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#about" className="hover:text-white transition-colors">Manifesto</a>
          <a href="#blog" className="hover:text-white transition-colors">Insights</a>
          <a href="#app" className="hover:text-white transition-colors">App</a>
        </div>
      </div>
    </footer>
  );
}
