import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient auras */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 bg-fuchsia-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] bg-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white"
          >
            Automate customer conversations with AI voice, chat and integrations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg text-slate-300"
          >
            We design, build and deploy AI agents that answer calls, chat with your users and connect to your tools to complete real work. Faster support, higher conversion, lower costs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="px-5 py-3 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 text-white font-medium shadow-lg shadow-indigo-500/30 hover:opacity-95 transition">Book a strategy call</a>
            <a href="#solutions" className="px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition">Explore solutions</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-slate-300"
          >
            {[
              ['24/7', 'Support'],
              ['<60s', 'Setup'],
              ['x3', 'Conversion'],
              ['-70%', 'Costs'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-white font-semibold text-xl">{k}</div>
                <div className="text-slate-400">{v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Spline orb */}
        <div className="relative h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-black/20">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
