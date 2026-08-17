import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('About')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.toLowerCase()))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          const id = visible[0].target.id
          setActive(id.charAt(0).toUpperCase() + id.slice(1))
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-md border-b border-thread-light dark:border-thread-dark'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display font-bold text-lg tracking-tight">
          A<span className="text-accent">.</span>S.N
        </a>

        {/* desktop links */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((link) => (
            <li key={link} className="relative">
              
                <a href={`#${link.toLowerCase()}`}
                className="hover:text-accent transition-colors duration-200"
              >
                {link}
              </a>
              {active === link && (
                <motion.div
                  layoutId="nav-thread"
                  transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                  className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-accent"
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* mobile hamburger — hidden on desktop */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-thread-light dark:border-thread-dark"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
            className="md:hidden overflow-hidden bg-bg-light dark:bg-bg-dark border-b border-thread-light dark:border-thread-dark"
          >
            <ul className="flex flex-col px-6 py-6 gap-5 font-mono text-base">
              {links.map((link) => (
                <li key={link}>
                  
                  <a href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block transition-colors duration-200 ${
                      active === link ? 'text-accent' : 'hover:text-accent'
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}