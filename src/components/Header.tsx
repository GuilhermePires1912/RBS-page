import { useState, useEffect } from 'react'
import { HiX } from 'react-icons/hi'
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import logoRbs from '../assets/logo-rbs.png'

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
            <div className="logo-box">
              <img
                src={logoRbs}
                alt="RBS Gestão em Saúde"
                className="header-logo"
              />
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

          <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
            <a
              href="https://www.linkedin.com/in/raphael-bruno-4802b490"
              target="_blank"
              rel="noopener noreferrer"
              className="header-linkedin"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36,
                background: 'rgba(0,119,181,0.12)',
                border: '1px solid rgba(0,119,181,0.3)',
                borderRadius: '10px',
                color: '#0077b5',
                textDecoration: 'none',
                transition: 'background 0.3s',
              }}
            >
              <FaLinkedin size={17} />
            </a>
            {/* Versão desktop: botão com texto */}
            <a
              href="https://wa.me/5521987002171"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary header-cta-desktop"
              style={{ display: 'flex' }}
            >
              <FaWhatsapp size={16} />
              Fale Conosco
            </a>
            {/* Versão mobile: só ícone, mesmo estilo do LinkedIn */}
            <a
              href="https://wa.me/5521987002171"
              target="_blank"
              rel="noopener noreferrer"
              className="header-cta-mobile"
              style={{
                display: 'none', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36,
                background: 'rgba(184,150,90,0.15)',
                border: '1px solid rgba(26,43,74,0.35)',
                borderRadius: '10px',
                color: '#B8965A',
                textDecoration: 'none',
                transition: 'background 0.3s',
              }}
            >
              <FaWhatsapp size={17} />
            </a>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Menu"
              style={{ visibility: menuOpen ? 'hidden' : 'visible' }}
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div className="logo-box">
            <img
              src={logoRbs}
              alt="RBS Gestão em Saúde"
              style={{ height: '30px', width: 'auto', display: 'block' }}
            />
          </div>
          <button className="mobile-close" onClick={() => setMenuOpen(false)}>
            <HiX />
          </button>
        </div>
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
