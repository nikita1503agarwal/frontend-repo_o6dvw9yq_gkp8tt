import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0b12] text-white">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="py-10 text-center text-white/50 text-sm">© 2025 yourrender.ai • All rights reserved</footer>
    </div>
  )
}

export default App
