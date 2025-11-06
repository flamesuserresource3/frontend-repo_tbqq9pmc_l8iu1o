import { useState } from 'react';

const plans = [
  { name: 'Basic', monthly: 0, features: ['Community access', 'Limited generations', 'Watermarked exports'] },
  { name: 'Pro', monthly: 19, features: ['Unlimited projects', 'Priority queue', 'HD exports'] },
  { name: 'Team', monthly: 49, features: ['Seats up to 10', 'Shared libraries', 'Admin controls'] },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  return (
    <section id="pricing" className="bg-[#08080C] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">Pricing</h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-300">Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              aria-pressed={annual}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${annual ? 'bg-purple-600' : 'bg-gray-600'}`}
            >
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${annual ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
            <span className="text-sm text-gray-300">Annual <span className="text-purple-400">-20%</span></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => {
            const price = annual ? Math.round(p.monthly * 12 * 0.8) : p.monthly;
            const highlighted = p.name === 'Team';
            return (
              <div key={p.name} className={`rounded-xl border ${highlighted ? 'border-purple-500/60' : 'border-white/10'} bg-white/5 p-6 backdrop-blur`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <span className="text-sm text-gray-300">{annual ? 'billed annually' : 'billed monthly'}</span>
                </div>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold tracking-tight">{p.monthly === 0 ? 'Free' : `$${price}`}</span>
                  {p.monthly !== 0 && <span className="ml-1 text-gray-400">{annual ? '/yr' : '/mo'}</span>}
                </div>
                <ul className="mt-6 space-y-2 text-gray-300 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-cyan-300">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 w-full rounded-md px-4 py-2 font-medium ${highlighted ? 'bg-purple-600 hover:bg-purple-500' : 'bg-cyan-400 hover:bg-cyan-300'} text-black transition-colors`}>
                  {p.name === 'Basic' ? 'Start Free' : 'Choose ' + p.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
