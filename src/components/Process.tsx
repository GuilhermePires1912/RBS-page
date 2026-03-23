import { useEffect, useRef } from 'react'
import { FaComments, FaFileAlt, FaCogs, FaCheckDouble } from 'react-icons/fa'

const steps = [
  {
    number: '01',
    icon: <FaComments size={26} color="#5eead4" />,
    title: 'Análise Inicial',
    desc: 'Entre em contato e nos explique a situação do seu estabelecimento. Fazemos uma análise gratuita do seu caso.',
  },
  {
    number: '02',
    icon: <FaFileAlt size={26} color="#5eead4" />,
    title: 'Documentação',
    desc: 'Orientamos exatamente quais documentos são necessários e como organizá-los para o processo.',
  },
  {
    number: '03',
    icon: <FaCogs size={26} color="#5eead4" />,
    title: 'Processamento',
    desc: 'Nossa equipe realiza todo o processo junto ao sistema CNES e órgãos competentes por você.',
  },
  {
    number: '04',
    icon: <FaCheckDouble size={26} color="#5eead4" />,
    title: 'Aprovação',
    desc: 'Seu estabelecimento é regularizado e você recebe toda a documentação comprobatória em mãos.',
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="process" id="processo" ref={sectionRef}>
      <div className="section-header fade-up">
        <div className="section-chip">Como Funciona</div>
        <h2 className="section-title">
          Processo simples e{' '}
          <span style={{
            background: 'linear-gradient(135deg, #0d9488, #38bdf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            transparente
          </span>
        </h2>
        <p className="section-desc">
          Do contato inicial à aprovação final, acompanhamos cada etapa
          do processo com total clareza e comunicação constante.
        </p>
      </div>

      <div className="process-steps">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className="step-card fade-up"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="step-number">{step.number}</div>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{ textAlign: 'center', marginTop: '56px' }}>
        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '20px', fontSize: '15px' }}>
          Pronto para regularizar seu estabelecimento?
        </p>
        <a
          href="https://wa.me/5521987002171?text=Olá!%20Quero%20regularizar%20meu%20estabelecimento%20de%20saúde."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero-primary"
          style={{ display: 'inline-flex' }}
        >
          Começar Agora
          <span style={{ fontSize: '18px' }}>→</span>
        </a>
      </div>
    </section>
  )
}
