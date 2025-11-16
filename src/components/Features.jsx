export default function Features(){
  const items = [
    {
      title: 'Aura-grade visuals',
      desc: 'Reactive, volumetric gradients that pulse with your agent’s voice.',
    },
    {
      title: 'Low-latency voice',
      desc: 'Sub-150ms streaming for natural, interruption-friendly conversations.',
    },
    {
      title: 'Drop-in SDK',
      desc: 'Embed in web or native in minutes with a tiny footprint.',
    },
    {
      title: 'Scales globally',
      desc: 'Edge-first infra with automatic failover and usage-based pricing.',
    },
  ]

  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(124,58,237,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur transition hover:bg-white/10">
              <div className="mb-3 h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 opacity-80" />
              <h3 className="text-lg font-semibold text-white">{i.title}</h3>
              <p className="mt-1 text-sm text-white/70">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
