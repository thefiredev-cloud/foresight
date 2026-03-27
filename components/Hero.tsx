'use client'
import dynamic from 'next/dynamic'

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false })

export default function Hero() {
  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className="hero-grid min-h-screen pt-16 flex items-center">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center py-20">
        <div className="order-2 md:order-1 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#a855f7]/30 text-[#a855f7] text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse-glow"></span>
            Now in Private Beta
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Simulate Before<br />
            <span className="text-[#a855f7]">You Commit</span>
          </h1>
          <p className="text-lg text-[#94a3b8] mb-8 leading-relaxed">
            Run 10,000 scenarios on any business decision before you make it. See the futures. Pick the best one.
          </p>
          <div className="flex gap-4">
            <button
              onClick={scrollToCTA}
              className="px-6 py-3 bg-[#a855f7] text-white font-semibold rounded-lg hover:bg-[#a855f7]/90 transition-colors"
            >
              Get Early Access
            </button>
            <button className="px-6 py-3 border border-white/10 text-white rounded-lg hover:border-[#a855f7]/50 transition-colors">
              See Demo
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 h-[400px] md:h-[500px]">
          <Scene3D />
        </div>
      </div>
    </section>
  )
}
