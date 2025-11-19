import { motion } from 'framer-motion';
import { Bot, Headphones, Workflow, ShieldCheck, Zap, Puzzle } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    desc: 'Custom-trained chat agents that qualify leads, answer FAQs and book meetings across your website and socials.'
  },
  {
    icon: Headphones,
    title: 'AI Voice Agents',
    desc: 'Natural phone agents that answer calls, route intelligently and resolve issues end-to-end with your systems.'
  },
  {
    icon: Workflow,
    title: 'Integrations',
    desc: 'We connect your CRM, billing, calendar and internal tools so your agents can actually get work done.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade',
    desc: 'Security, privacy and compliance by design with audit logs and role-based access controls.'
  },
  {
    icon: Zap,
    title: 'Fast execution',
    desc: 'From idea to production in days, not months, with our battle-tested delivery playbooks.'
  },
  {
    icon: Puzzle,
    title: 'Tailored to your team',
    desc: 'Dedicated solutions architects and ongoing optimization to maximize ROI.'
  }
];

export default function Features() {
  return (
    <div id="solutions" className="max-w-7xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-bold text-white text-center"
      >
        What we build
      </motion.h2>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 hover:from-white/10 transition"
          >
            <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white mb-4">
              {f.icon && <f.icon className="h-5 w-5" />}
            </div>
            <div className="text-white font-semibold text-lg">{f.title}</div>
            <div className="text-slate-300 mt-2 text-sm">{f.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
