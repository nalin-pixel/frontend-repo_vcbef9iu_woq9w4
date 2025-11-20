import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Droplets, Feather, Ruler, Weight, Cog } from 'lucide-react'

const items = [
  { icon: Shield, label: 'Strength' },
  { icon: Droplets, label: 'Corrosion Resistance' },
  { icon: Feather, label: 'Lightweight' },
  { icon: Ruler, label: 'Precision' },
  { icon: Weight, label: 'Load Rating' },
  { icon: Cog, label: 'Pro Engineering' }
]

const Features = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-sky-100 md:text-4xl">Engineered Features</h2>
        <p className="text-sky-200/80">Six core pillars visualized with animated icons, glowing metal edges and interactive ripples.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ translateY: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800 to-slate-900 p-6"
          >
            {/* Ripple */}
            <span className="pointer-events-none absolute inset-0 rounded-2xl bg-sky-400/0 transition group-hover:bg-sky-400/5" />
            {/* Glow edges */}
            <span className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(56,189,248,0.25)_inset]" />

            <div className="relative z-10 flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="grid h-12 w-12 place-items-center rounded-xl border border-sky-400/40 bg-slate-900 shadow-[0_0_20px_rgba(56,189,248,0.25)]"
              >
                <it.icon className="h-6 w-6 text-sky-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-sky-100">{it.label}</h3>
                <p className="text-sm text-sky-200/80">Built for pros. Tested to extremes.</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features
