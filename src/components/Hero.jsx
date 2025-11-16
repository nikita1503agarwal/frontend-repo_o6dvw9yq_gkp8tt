import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for vibe */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_35%,rgba(114,46,209,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_30%,rgba(56,189,248,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(35%_35%_at_20%_70%,rgba(251,146,60,0.18),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Live AI voice agents
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Ultra high‑tech AI rendering for voice and visuals
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Build, preview, and deploy conversational AI with lifelike presence. YourRender brings the aura to your agent – fast, scalable, and stunning.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition-colors">
              Get started free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors">
              See features
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-white/70">
            <div className="text-sm">Trusted by creators and teams</div>
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-white/20 backdrop-blur border border-white/30" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0b12] to-transparent" />
    </section>
  )
}
