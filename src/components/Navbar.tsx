import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id))
    }, { rootMargin: '-20% 0px -70%' })
    document.querySelectorAll('section[id]').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-surface/70 backdrop-blur-2xl">
      <div className="container-max flex h-16 items-center justify-between">
        <a href="#hero" className="text-sm font-bold tracking-tight text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Matthew MacEachern</a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {links.map(link => (
            <a key={link.href} href={link.href} className={`border-b-2 py-5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${active === link.href.slice(1) ? 'border-primary text-ink' : 'border-transparent text-muted hover:text-ink'}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="mailto:mattmac743@gmail.com" className="button-secondary hidden !min-h-9 !px-4 !py-1.5 md:inline-flex">Get in touch</a>
        <button type="button" onClick={() => setOpen(!open)} className="inline-flex h-10 w-10 items-center justify-center text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-surface/95 px-5 py-3 backdrop-blur-2xl md:hidden" aria-label="Mobile navigation">
          {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-border py-3 text-base font-medium text-ink last:border-0">{link.label}</a>)}
        </nav>
      )}
    </header>
  )
}

export default Navbar
