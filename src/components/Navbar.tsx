import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  const menuItems = [
    { text: 'About', href: '#about' },
    { text: 'Projects', href: '#projects' },
    { text: 'Experience', href: '#experience' },
    { text: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)

      const sections = ['hero', 'about', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 140

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => activeSection === href.replace('#', '')

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'px-3 sm:px-4 pt-3' : 'pt-5 px-4'}`}>
      <nav
        className={`transition-all duration-500 ${
          scrolled ? 'liquid-glass-nav px-4 sm:px-6' : 'max-w-6xl mx-auto'
        }`}
      >
        <div className={`flex items-center justify-between ${scrolled ? 'h-12' : 'h-12 max-w-6xl mx-auto'}`}>
          <button
            type="button"
            className="text-base sm:text-lg font-bold gradient-text-accent tracking-tight hover:opacity-90 transition-opacity relative z-10"
            onClick={() => scrollToSection('#hero')}
          >
            <span className="hidden sm:inline">Matthew MacEachern</span>
            <span className="sm:hidden">M. MacEachern</span>
          </button>

          <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
            <div className="liquid-glass-pill flex items-center gap-0.5 p-1">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 z-10 ${
                    isActive(item.href) ? 'text-white' : 'text-zinc-300/90 hover:text-white'
                  }`}
                >
                  {isActive(item.href) && (
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'rgba(255, 255, 255, 0.12)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)',
                      }}
                    />
                  )}
                  <span className="relative">{item.text}</span>
                </button>
              ))}
            </div>
          </div>

          <a
            href="mailto:mattmac743@gmail.com"
            className="hidden md:inline-flex button-secondary !py-2 !px-5 text-xs relative z-10"
          >
            Contact
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden liquid-glass-pill p-2.5 text-zinc-200 relative z-10"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-3 liquid-glass p-2 relative z-10">
            {menuItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-medium transition-colors relative z-10 ${
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-zinc-300 hover:text-white'
                }`}
                style={
                  isActive(item.href)
                    ? { background: 'rgba(255,255,255,0.1)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)' }
                    : undefined
                }
              >
                {item.text}
              </button>
            ))}
            <a
              href="mailto:mattmac743@gmail.com"
              className="block mt-2 mx-1 mb-1 text-center button-primary !py-2.5 text-sm relative z-10"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
