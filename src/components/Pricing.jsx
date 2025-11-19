import { motion } from 'framer-motion';

const tiers = [
  { name: 'Starter', price: '$2,000', desc: 'One AI agent, basic integrations, 2-week delivery.' },
  { name: 'Growth', price: '$5,000', desc: 'Multi-channel agents, custom workflows, 4-week delivery.' },
  { name: 'Enterprise', price: 'Custom', desc: 'Security, SSO, SLAs and dedicated team.' },
];

export default function Pricing() {
  return (
    <div id="pricing" className="max-w-7xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-bold text-white text-center"
      >
        Engagements
      </motion.h2>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-6"
          >
            <div className="text-white font-semibold text-xl">{t.name}</div>
            <div className="text-4xl font-bold text-white mt-2">{t.price}</div>
            <div className="text-slate-300 mt-3 text-sm">{t.desc}</div>
            <a href="#contact" className="mt-6 inline-block px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20">Get started</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
