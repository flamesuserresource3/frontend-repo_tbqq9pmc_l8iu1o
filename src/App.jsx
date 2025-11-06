import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#08080C] font-['IBM_Plex_Mono',monospace]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <section id="about" className="bg-[#08080C] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">Manifesto</h2>
            <blockquote className="mt-6 border-l-4 border-cyan-400/70 pl-6 text-gray-200">
              <p>
                We believe in a human-first workflow where AI amplifies creativity without replacing authorship. Ethics, privacy, and transparency guide every decision.
              </p>
            </blockquote>
          </div>
        </section>
        <section id="app" className="bg-[#08080C] text-white py-20">
          <div className="max-w-md mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-extrabold tracking-wide">Sign in</h2>
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1" htmlFor="email">Email</label>
                <input id="email" type="email" className="w-full rounded-md bg-black/40 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none px-4 py-2 transition-colors" placeholder="you@domain.com" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1" htmlFor="password">Password</label>
                <input id="password" type="password" className="w-full rounded-md bg-black/40 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none px-4 py-2 transition-colors" placeholder="••••••••" />
              </div>
              <button type="submit" className="w-full rounded-md bg-cyan-400 text-black font-semibold py-2 hover:bg-cyan-300 transition-colors">Continue</button>
            </form>
            <div className="mt-6">
              <p className="text-center text-sm text-gray-400">Or continue with</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <button className="rounded-md bg-white text-black py-2 font-medium hover:bg-gray-200 transition-colors" aria-label="Continue with Google">Google</button>
                <button className="rounded-md bg-white text-black py-2 font-medium hover:bg-gray-200 transition-colors" aria-label="Continue with GitHub">GitHub</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
