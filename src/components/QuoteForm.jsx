import React from 'react'
import { motion } from 'framer-motion'
import NeonButton from './NeonButton'

const QuoteForm = () => {
  return (
    <section className="relative mx-auto max-w-4xl px-6 py-24">
      <div className="relative overflow-hidden rounded-2xl border border-sky-400/40 bg-slate-900/80 p-8">
        {/* Flame border loop */}
        <span className="pointer-events-none absolute inset-0 rounded-2xl">
          <span className="absolute inset-x-0 -top-1 h-1 bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.8),transparent)] animate-[sweep_3s_linear_infinite]" />
          <span className="absolute inset-y-0 -right-1 w-1 bg-[linear-gradient(180deg,transparent,rgba(56,189,248,0.8),transparent)] animate-[sweep_3s_linear_infinite] [animation-delay:0.75s]" />
          <span className="absolute inset-x-0 -bottom-1 h-1 bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.8),transparent)] animate-[sweep_3s_linear_infinite] [animation-delay:1.5s]" />
          <span className="absolute inset-y-0 -left-1 w-1 bg-[linear-gradient(180deg,transparent,rgba(56,189,248,0.8),transparent)] animate-[sweep_3s_linear_infinite] [animation-delay:2.25s]" />
        </span>
        <style>{`@keyframes sweep{0%{background-position:0%}100%{background-position:200%}}`}</style>

        <div className="mx-auto max-w-2xl text-center">
          <h3 className="mb-2 text-2xl font-bold text-sky-100 md:text-3xl">Request a Quote</h3>
          <p className="mb-8 text-sky-200/80">Minimal form wrapped in a dark steel card. CTA has a flame trail on hover.</p>

          <form className="grid grid-cols-1 gap-4">
            <input placeholder="Name" className="rounded-lg border border-sky-400/30 bg-slate-950/70 px-4 py-3 text-sky-100 placeholder-sky-400/60 outline-none focus:border-sky-400/60" />
            <input placeholder="Email" type="email" className="rounded-lg border border-sky-400/30 bg-slate-950/70 px-4 py-3 text-sky-100 placeholder-sky-400/60 outline-none focus:border-sky-400/60" />
            <textarea placeholder="Project details" rows={4} className="rounded-lg border border-sky-400/30 bg-slate-950/70 px-4 py-3 text-sky-100 placeholder-sky-400/60 outline-none focus:border-sky-400/60" />
            <div className="relative">
              <NeonButton className="w-full">
                <span className="relative z-10">Request a Quote</span>
                {/* Flame trail */}
                <span className="pointer-events-none absolute inset-0 z-0 rounded-xl opacity-0 transition group-hover:opacity-100 [background:radial-gradient(40%_60%_at_0%_50%,rgba(56,189,248,0.5),transparent),radial-gradient(40%_60%_at_100%_50%,rgba(59,130,246,0.5),transparent)]" />
              </NeonButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default QuoteForm
