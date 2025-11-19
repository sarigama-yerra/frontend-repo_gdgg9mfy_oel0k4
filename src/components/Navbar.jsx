import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="w-full sticky top-0 z-50 backdrop-blur-xl bg-slate-900/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.6)]">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">Rayvio AI</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {[
            ["Solutions", "#solutions"],
            ["Use cases", "#usecases"],
            ["Pricing", "#pricing"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="text-slate-300 hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">Book a demo</a>
          <button className="md:hidden p-2 rounded-lg bg-white/10 text-white"><Menu className="h-5 w-5" /></button>
        </div>
      </div>
    </div>
  );
}
