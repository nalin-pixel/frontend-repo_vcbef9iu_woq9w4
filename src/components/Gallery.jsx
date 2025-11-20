import React from 'react'
import { motion } from 'framer-motion'

const images = [
  { id: 1, bg: 'from-slate-700 to-slate-900' },
  { id: 2, bg: 'from-slate-800 to-black' },
  { id: 3, bg: 'from-zinc-700 to-zinc-900' }
]

const Gallery = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-sky-100 md:text-4xl">Use‑Case Visual Gallery</h2>
        <p className="text-sky-200/80">Industrial and construction contexts with blue flame accents and parallax motion.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {images.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
            className={`group relative aspect-[4/5] overflow-hidden rounded-2xl border border-sky-400/30 bg-gradient-to-br ${img.bg}`}
          >
            <span className="pointer-events-none absolute -inset-24 -z-0 blur-3xl [background:radial-gradient(60%_60%_at_50%_50%,rgba(56,189,248,0.18),transparent_60%)]" />
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,transparent,rgba(2,6,23,0.4))]" />
            <div className="relative z-10 p-4">
              <div className="h-8 w-8 rounded-full bg-sky-400/30 shadow-[0_0_20px_rgba(56,189,248,0.5)]" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
