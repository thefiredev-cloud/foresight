export default function HowItWorks() {
  const steps = [
    { number: '01', title: 'Define Your Decision', description: 'Input your decision parameters, constraints, and success metrics.' },
    { number: '02', title: 'Run the Simulation', description: 'Foresight OS runs 10,000 scenarios across market conditions, timelines, and variables.' },
    { number: '03', title: 'Choose with Confidence', description: 'Get ranked outcomes with probability weights and risk-adjusted recommendations.' },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It <span className="text-[#a855f7]">Works</span></h2>
          <p className="text-[#94a3b8]">From decision to certainty in three steps.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#a855f7]/30 to-transparent z-10" />
              )}
              <div className="glass rounded-xl p-8">
                <div className="text-5xl font-bold text-[#a855f7]/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-[#94a3b8]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
