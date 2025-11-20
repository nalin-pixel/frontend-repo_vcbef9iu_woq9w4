import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import NeonButton from './NeonButton'

const glow = {
  initial: { opacity: 0.6 },
  animate: {
    opacity: [0.6, 1, 0.6],
    transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
  }
}

const particle = (i) => ({
  initial: { opacity: 0, y: 20, scale: 0.6 },
  animate: {
    opacity: [0, 1, 0],
    y: [-10 - i * 5, -30 - i * 8],
    scale: [0.6, 1, 0.8],
    transition: { duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeOut', delay: i * 0.15 }
  }
})

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      {/* Cover background via Spline */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ppI7eAudW7IbKhKs/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Steel gradient overlay + prevent blocking pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(2,6,23,0)_0%,rgba(2,6,23,0.5)_45%,rgba(2,6,23,0.9)_100%)]" />

      {/* Subtle steel brushed texture */}
      <div className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-50 [background-image:repeating-linear-gradient(90deg,rgba(148,163,184,0.05)_0px,rgba(148,163,184,0.05)_1px,transparent_1px,transparent_6px)]" />

      {/* Blue flame aura behind heading */}
      <motion.div
        variants={glow}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute -inset-20 z-0 blur-3xl"
        style={{
          background:
            'radial-gradient(40%_40%_at_50%_55%, rgba(56,189,248,0.35), transparent 60%), radial-gradient(30%_30%_at_65%_45%, rgba(59,130,246,0.25), transparent 55%)'
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 bg-gradient-to-b from-sky-100 via-sky-200 to-sky-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl"
          style={{ textShadow: '0 0 20px rgba(59,130,246,0.55)' }}
        >
          Clash Steel Pro & Clash Steel Pro Alumen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-8 max-w-2xl text-sky-200/85 md:text-xl"
        >
          Next-Generation Steel Performance with Extreme Durability
        </motion.p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <NeonButton>Explore Specs</NeonButton>
          <NeonButton className="!text-sky-50">Request a Quote</NeonButton>
        </div>

        {/* Light particles */}
        <div className="pointer-events-none relative h-24 w-full max-w-4xl">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.span
              key={i}
              variants={particle(i)}
              initial="initial"
              animate="animate"
              className="absolute left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-sky-300/80 shadow-[0_0_12px_rgba(56,189,248,0.85)]"
              style={{ left: `${40 + Math.random() * 20}%` }}
            />
          ))}
        </div>

        {/* Product outline mock renders */}
        <div className="mt-4 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {[{ name: 'Clash Steel Pro', tint: 'from-slate-700 to-slate-900' }, { name: 'Pro Alumen', tint: 'from-slate-600 to-slate-800' }].map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-2xl border border-sky-500/30 bg-gradient-to-br ${p.tint} p-6`}
            >
              <div className="pointer-events-none absolute inset-px rounded-2xl [background:conic-gradient(from_0deg,rgba(56,189,248,0.15),transparent_30%,transparent_70%,rgba(56,189,248,0.15))]" />
              <div className="pointer-events-none absolute -inset-24 -z-0 blur-2xl [background:radial-gradient(60%_60%_at_50%_50%,rgba(56,189,248,0.15),transparent_60%)]" />

              <div className="relative z-10">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.95)]" />
                  <h3 className="text-lg font-semibold text-sky-100">{p.name}</h3>
                </div>
                <div className="aspect-[16/9] w-full rounded-xl border border-sky-400/20 bg-[linear-gradient(180deg,rgba(203,213,225,0.12)_0%,rgba(100,116,139,0.1)_100%)] shadow-[inset_0_0_40px_rgba(56,189,248,0.15)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
