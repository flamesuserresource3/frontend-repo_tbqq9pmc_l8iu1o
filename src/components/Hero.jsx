import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[90vh] w-full bg-[#08080C] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-28 md:pt-36 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide leading-tight">
            Synapse: Your AI Creative Co-pilot.
          </h1>
          <p className="mt-4 md:mt-6 text-gray-300 text-lg md:text-xl">
            Design, generate, and iterate 10x faster.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#app" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors">
              Start Generating (Free)
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 text-white hover:border-cyan-300/60 hover:text-cyan-200 transition-colors">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
