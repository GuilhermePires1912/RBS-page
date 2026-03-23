import { useState, useRef, useEffect } from 'react'
import { FaWhatsapp, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { MdSend } from 'react-icons/md'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    establishment: '',
    service: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Olá Raphael! Meu nome é ${form.name}.\n\n` +
      `📋 Estabelecimento: ${form.establishment}\n` +
      `📱 Telefone: ${form.phone}\n` +
      `🎯 Serviço de interesse: ${form.service}\n\n` +
      `💬 Mensagem: ${form.message}`
    )
    window.open(`https://wa.me/5521987002171?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="cta-section" id="contato" ref={sectionRef}>
      <div className="cta-inner">
        {/* Left side */}
        <div className="cta-content">
          <div className="section-chip fade-up">Entre em Contato</div>
          <h2 className="section-title fade-up">
            Vamos regularizar<br />
            <span style={{
              background: 'linear-gradient(135deg, #0d9488, #38bdf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              seu estabelecimento
            </span>
          </h2>
          <p className="cta-text fade-up">
            Entre em contato agora e receba uma análise gratuita
            da situação regulatória do seu estabelecimento de saúde.
            Atendemos em todo o Brasil.
          </p>

          <div className="cta-contact-items fade-up">
            <a
              href="https://wa.me/5521987002171"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-item-icon">
                <FaWhatsapp color="#25d366" />
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '2px', fontWeight: 500 }}>WhatsApp</div>
                +55 (21) 98700-2171
              </div>
            </a>

            <div className="contact-item">
              <div className="contact-item-icon">
                <FaMapMarkerAlt color="#0d9488" />
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '2px', fontWeight: 500 }}>Atendimento</div>
                Rio de Janeiro – RJ · Brasil
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="fade-up" style={{
            borderRadius: '16px',
            overflow: 'hidden',
            height: '180px',
            position: 'relative',
          }}>
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
              alt="Healthcare consulting"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(12,31,63,0.7), rgba(13,148,136,0.4))',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <p style={{
                color: 'white', fontWeight: 700, fontSize: '18px',
                textAlign: 'center', padding: '0 20px', lineHeight: 1.4
              }}>
                Análise gratuita da<br />situação do seu CNES
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="contact-form-card fade-up">
          <div className="form-title">Solicite uma Análise Gratuita</div>

          {sent && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(13,148,136,0.1), rgba(56,189,248,0.1))',
              border: '1px solid rgba(13,148,136,0.3)',
              borderRadius: '12px', padding: '14px 16px',
              color: '#0d9488', fontSize: '14px', fontWeight: 600,
              marginBottom: '20px', textAlign: 'center'
            }}>
              ✅ Redirecionando para o WhatsApp...
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Nome Completo *</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Seu nome completo"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Telefone / WhatsApp *</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="(XX) XXXXX-XXXX"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Nome do Estabelecimento *</label>
              <input
                type="text"
                name="establishment"
                className="form-input"
                placeholder="Nome da clínica, hospital, etc."
                value={form.establishment}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Serviço de Interesse</label>
              <select
                name="service"
                className="form-select"
                value={form.service}
                onChange={handleChange}
              >
                <option value="">Selecione um serviço...</option>
                <option value="Cadastro CNES">Cadastro CNES (novo)</option>
                <option value="Renovação CNES">Renovação CNES</option>
                <option value="Consultoria Geral">Consultoria Especializada</option>
                <option value="Regularização Sanitária">Regularização Sanitária</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Mensagem</label>
              <textarea
                name="message"
                className="form-input"
                placeholder="Descreva brevemente sua necessidade..."
                rows={3}
                value={form.message}
                onChange={handleChange}
                style={{ resize: 'none' }}
              />
            </div>

            <button type="submit" className="form-submit">
              <FaWhatsapp size={18} />
              Enviar pelo WhatsApp
              <MdSend size={16} />
            </button>

            <p style={{
              textAlign: 'center', fontSize: '12px',
              color: '#94a3b8', marginTop: '12px'
            }}>
              🔒 Suas informações são tratadas com total sigilo
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
