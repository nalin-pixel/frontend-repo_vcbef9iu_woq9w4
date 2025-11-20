import React from 'react'
import Hero from './components/Hero'
import ProductHighlights from './components/ProductHighlights'
import Features from './components/Features'
import SpecsTable from './components/SpecsTable'
import Gallery from './components/Gallery'
import WhyChoose from './components/WhyChoose'
import QuoteForm from './components/QuoteForm'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-sky-100">
      {/* Global subtle particles/steel texture */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_45%,rgba(0,0,0,1)_100%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-30 [background-image:repeating-linear-gradient(90deg,rgba(148,163,184,0.03)_0px,rgba(148,163,184,0.03)_1px,transparent_1px,transparent_6px)]" />

      <Hero />
      <ProductHighlights />
      <Features />
      <SpecsTable />
      <Gallery />
      <WhyChoose />
      <QuoteForm />

      <footer className="mx-auto max-w-6xl px-6 py-12 text-center text-sky-400/60">© {new Date().getFullYear()} Clash Steel — Metal + Neon Fusion</footer>
    </div>
  )
}

export default App
