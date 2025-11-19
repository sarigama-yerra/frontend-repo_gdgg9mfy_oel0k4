import { motion } from 'framer-motion';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    alert(`Thanks ${data.name}! We'll reach out at ${data.email}.`);
  };

  return (
    <div id="contact" className="max-w-7xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-bold text-white text-center"
      >
        Book a strategy call
      </motion.h2>

      <form onSubmit={handleSubmit} className="mt-12 grid md:grid-cols-2 gap-6">
        {[
          { name: 'name', label: 'Full name', type: 'text' },
          { name: 'email', label: 'Work email', type: 'email' },
          { name: 'company', label: 'Company', type: 'text' },
          { name: 'size', label: 'Team size', type: 'text' },
        ].map((f) => (
          <div key={f.name} className="flex flex-col">
            <label className="text-slate-300 mb-2 text-sm">{f.label}</label>
            <input name={f.name} type={f.type} required className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-white/30" />
          </div>
        ))}
        <div className="md:col-span-2 flex flex-col">
          <label className="text-slate-300 mb-2 text-sm">What are you trying to automate?</label>
          <textarea name="message" rows={5} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-white/30" />
        </div>
        <div className="md:col-span-2">
          <button className="w-full px-5 py-3 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 text-white font-medium shadow-lg shadow-indigo-500/30 hover:opacity-95 transition">
            Request a demo
          </button>
        </div>
      </form>
    </div>
  );
}
