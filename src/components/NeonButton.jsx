import React from 'react'
import { motion } from 'framer-motion'

const NeonButton = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(56,189,248,0.8), inset 0 0 12px rgba(56,189,248,0.5)' }}
      whileTap={{ scale: 0.98 }}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-xl px-6 py-3 font-semibold tracking-wide text-sky-100 transition-colors ${className}`}
      style={{
        background:
          'linear-gradient(180deg, rgba(2,6,23,0.8) 0%, rgba(2,6,23,0.95) 100%)',
        border: '1px solid rgba(56,189,248,0.5)',
        textShadow: '0 0 12px rgba(56,189,248,0.55)'
      }}
    >
      <span className="absolute inset-0 -z-0 rounded-xl bg-sky-500/10 blur-md"></span>
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 z-0 rounded-xl opacity-70 [background:radial-gradient(circle_at_20%_-10%,rgba(56,189,248,0.35),transparent_35%),radial-gradient(circle_at_80%_120%,rgba(56,189,248,0.35),transparent_40%)]" />
    </motion.button>
  )
}

export default NeonButton
