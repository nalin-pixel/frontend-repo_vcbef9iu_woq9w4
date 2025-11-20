import React from 'react'

const rows = [
  ['Material', 'Hardened Steel', 'Aluminum Alloy'],
  ['Finish', 'Brushed / Anti-corrosion', 'Anodized / Anti-corrosion'],
  ['Load Rating', 'Up to 2,500 kg', 'Up to 1,400 kg'],
  ['Tolerance', '±0.02 mm', '±0.03 mm'],
  ['Temp Range', '-40°C to 220°C', '-40°C to 180°C']
]

const SpecsTable = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-sky-100 md:text-4xl">Futuristic Specs</h2>
        <p className="text-sky-200/80">Clean neon grid with metallic separators and animated highlight on hover.</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-sky-400/30 bg-slate-900/80">
        <table className="w-full text-left text-sky-200/90">
          <thead>
            <tr className="bg-[linear-gradient(90deg,rgba(56,189,248,0.2),rgba(59,130,246,0.15))] text-sky-50">
              <th className="px-6 py-4">Spec</th>
              <th className="px-6 py-4">Clash Steel Pro</th>
              <th className="px-6 py-4">Pro Alumen</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="group relative">
                {r.map((c, j) => (
                  <td key={j} className="relative px-6 py-4">
                    {/* Row hover neon sweep */}
                    <span className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 [background:linear-gradient(90deg,transparent,rgba(56,189,248,0.08),transparent)]" />
                    <span className="relative z-10">{c}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {/* Metallic separators */}
        <div className="pointer-events-none h-1 w-full bg-[repeating-linear-gradient(90deg,rgba(148,163,184,0.15)_0,rgba(148,163,184,0.15)_1px,transparent_1px,transparent_8px)]" />
      </div>
    </section>
  )
}

export default SpecsTable
