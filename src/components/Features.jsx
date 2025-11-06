import { Code2, Boxes, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-cyan-400/40 transition-colors">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-md grid place-items-center bg-gradient-to-br from-cyan-400/30 to-fuchsia-500/30 ring-1 ring-white/10">
        <Icon className="h-6 w-6 text-cyan-300" />
      </div>
      <h3 className="text-white font-semibold tracking-wide">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-gray-300">{desc}</p>
  </div>
);

export default function Features() {
  return (
    <section id="features" className="relative bg-[#08080C] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">Hybrid Engine, Simple Flow</h2>
          <p className="text-gray-400 mt-2 max-w-2xl">Code with precision, generate assets on demand, and collaborate seamlessly in one place.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard icon={Code2} title="Code" desc="Author with syntax-aware prompts and live previews that blend human control with AI acceleration." />
          <FeatureCard icon={Boxes} title="Asset" desc="Produce 3D, vector, and text assets from structured inputs. Export anywhere." />
          <FeatureCard icon={Users} title="Collaborate" desc="Share, branch, and review with teammates using AI-assisted suggestions." />
        </div>
      </div>
    </section>
  );
}
