import { motion } from 'framer-motion';

const cases = [
  {
    kpi: '3x',
    name: 'E-commerce brand',
    result: 'increase in conversion rate with an onsite AI concierge that answers product questions and tracks orders.'
  },
  {
    kpi: '70%',
    name: 'SaaS company',
    result: 'reduction in support tickets after deploying an LLM-powered helpdesk assistant integrated with their knowledge base.'
  },
  {
    kpi: '24/7',
    name: 'Service business',
    result: 'phone coverage with a voice agent that books appointments and handles rescheduling automatically.'
  }
];

export default function CaseStudies() {
  return (
    <div id="usecases" className="max-w-7xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-bold text-white text-center"
      >
        Proof it works
      </motion.h2>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-4xl font-bold text-white">{c.kpi}</div>
            <div className="text-slate-300 mt-2">{c.name}</div>
            <div className="text-slate-400 mt-4 text-sm">{c.result}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
