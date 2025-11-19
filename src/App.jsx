import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      {/* Grid + vignette background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_95%,rgba(255,255,255,0.05)_95%),linear-gradient(to_bottom,transparent_95%,rgba(255,255,255,0.05)_95%)] bg-[size:24px_24px] opacity-20" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <CaseStudies />
      <Pricing />

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-orange-400/10 p-10 text-center">
          <h3 className="text-2xl sm:text-4xl font-bold text-white">Ready to deploy your AI team?</h3>
          <p className="mt-3 text-slate-300">We handle strategy, build and integration. You get outcomes.</p>
          <a href="#contact" className="mt-6 inline-block px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20">Talk to an expert</a>
        </div>
      </div>

      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div>© {new Date().getFullYear()} Rayvio AI. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
