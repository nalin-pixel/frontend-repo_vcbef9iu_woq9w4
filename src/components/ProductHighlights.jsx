import React from 'react'
import { motion } from 'framer-motion'

const products = [
  {
    title: 'Clash Steel Pro',
    subtitle: 'Hardened steel • Blue flame reflection',
    texture: 'from-slate-700 to-slate-900'
  },
  {
    title: 'Clash Steel Pro Alumen',
    subtitle: 'Aluminum alloy • Neon edge glow',
    texture: 'from-zinc-600 to-zinc-800'
  }
]

const ProductHighlights = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-sky-100 md:text-4xl">Product Highlight</h2>
        <p className="text-sky-200/80">Industrial strength meets modern energy. Metallic gradients, neon borders and subtle flame motion to showcase the materials.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {products.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className={`group relative overflow-hidden rounded-2xl border border-sky-400/30 bg-gradient-to-br ${p.texture} p-6`}
          >
            <div className="pointer-events-none absolute inset-px rounded-2xl [background:linear-gradient(90deg,rgba(56,189,248,0.15),transparent,rgba(56,189,248,0.15))]" />
            <div className="pointer-events-none absolute -inset-24 -z-0 blur-2xl [background:radial-gradient(60%_60%_at_50%_50%,rgba(56,189,248,0.18),transparent_60%)]" />

            {/* Animated moving border */}
            <span className="pointer-events-none absolute inset-0 block rounded-2xl">
              <span className="absolute inset-x-0 -top-1 h-0.5 w-full animate-[move_3s_linear_infinite] bg-gradient-to-r from-transparent via-sky-400 to-transparent [mask-image:linear-gradient(90deg,transparent,white,transparent)]"></span>
            </span>

            <style>{`@keyframes move{0%{transform:translateX(-50%)}100%{transform:translateX(50%)}}`}</style>

            <div className="relative z-10">
              <h3 className="mb-1 text-xl font-semibold text-sky-100">{p.title}</h3>
              <p className="mb-4 text-sky-200/80">{p.subtitle}</p>
              <div className="aspect-[4/3] w-full rounded-xl border border-sky-400/20 bg-[linear-gradient(160deg,rgba(226,232,240,0.12),rgba(100,116,139,0.1))] shadow-[inset_0_0_40px_rgba(56,189,248,0.2)]" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ProductHighlights
