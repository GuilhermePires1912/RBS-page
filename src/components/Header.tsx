import { useState, useEffect } from 'react'
import { MdHealthAndSafety } from 'react-icons/md'
import { HiX } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Como Funciona', href: '#processo' },
    { label: 'Atendimento', href: '#contato' },
  ]

  const handleMenuLink = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#" className="logo-wrap">
            <div className="logo-icon">
              <MdHealthAndSafety size={26} color="#fff" />
            </div>
            <div>
              <div className="logo-text-main">RBS</div>
              <div className="logo-text-sub">Gestão em Saúde</div>
            </div>
          </a>

          <nav>
            <ul className="nav-links">
              {navItems.map(item => (
                <li key={item.href}>
                  <a href={item.href} className="nav-link">{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a
              href="https://wa.me/5521987002171"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'flex' }}
            >
              <FaWhatsapp size={16} />
              Fale Conosco
            </a>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>
          <HiX />
        </button>
        {navItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            className="mobile-nav-link"
            onClick={() => handleMenuLink(item.href)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="https://wa.me/5521987002171"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero-primary"
          onClick={() => setMenuOpen(false)}
        >
          <FaWhatsapp size={18} />
          Fale pelo WhatsApp
        </a>
      </div>
    </>
  )
}
