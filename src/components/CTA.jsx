export default function CTA(){
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">Start rendering your AI presence</h3>
              <p className="mt-1 text-white/70">Spin up your first agent aura in minutes. No credit card required.</p>
            </div>
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition-colors">Create free account</a>
          </div>
        </div>
      </div>
    </section>
  )
}
