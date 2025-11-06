import { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="px-3 py-2 text-sm md:text-base text-gray-300 hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close on escape for accessibility
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 rounded">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-600 grid place-items-center ring-1 ring-white/10">
            <Sparkles className="h-5 w-5 text-black" />
          </div>
          <span className="font-semibold tracking-wide text-white">Synapse</span>
        </a>

        <div className="hidden md:flex items-center">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#about">About</NavLink>
          <a
            href="#app"
            className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-md text-black bg-cyan-300 hover:bg-cyan-200 active:bg-cyan-400 transition-colors font-medium"
          >
            Get Started
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400/60 text-gray-200"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/80 border-t border-white/10">
          <div className="px-4 py-3 flex flex-col">
            <NavLink href="#features" onClick={() => setOpen(false)}>Features</NavLink>
            <NavLink href="#pricing" onClick={() => setOpen(false)}>Pricing</NavLink>
            <NavLink href="#about" onClick={() => setOpen(false)}>About</NavLink>
            <a
              href="#app"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-black bg-cyan-300 hover:bg-cyan-200 active:bg-cyan-400 transition-colors font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
