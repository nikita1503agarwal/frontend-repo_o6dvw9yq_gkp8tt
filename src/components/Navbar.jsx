import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '#product' },
    { label: 'Use cases', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' }
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl shadow-lg shadow-black/5">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
            <span className="text-sm sm:text-base font-semibold tracking-tight text-white">yourrender.ai</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors">Sign in</a>
            <a href="#cta" className="px-4 py-2 text-sm font-semibold text-black rounded-full bg-white hover:bg-white/90 transition-colors">Get started</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl text-white/90">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-3 py-2 rounded-lg hover:bg-white/10">
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <a href="#" className="px-3 py-2 rounded-lg hover:bg-white/10">Sign in</a>
              <a href="#cta" className="px-3 py-2 rounded-lg bg-white text-black font-semibold">Get started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
