import React from 'react'
import { motion } from 'framer-motion'

const badges = [
  { label: 'Trusted by Pros' },
  { label: 'Extreme Durability' },
  { label: 'Canadian Engineered' }
]

const WhyChoose = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-sky-100 md:text-4xl">Why Choose Clash Steel</h2>
        <p className="text-sky-200/80">Energy glow theme with animated badges and soft pulsing neon cues.</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {badges.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            animate={{ boxShadow: ['0 0 0 rgba(0,0,0,0)','0 0 24px rgba(56,189,248,0.4)','0 0 0 rgba(0,0,0,0)'] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
            className="relative rounded-full border border-sky-400/40 bg-slate-900/80 px-6 py-3 text-sky-100"
          >
            <span className="pointer-events-none absolute inset-0 rounded-full bg-sky-400/10 blur" />
            <span className="relative z-10 font-medium">{b.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WhyChoose
