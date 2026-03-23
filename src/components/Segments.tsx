import { useEffect, useRef } from 'react'

const segments = [
  { icon: '🏥', label: 'Hospitais' },
  { icon: '🩺', label: 'Clínicas Médicas' },
  { icon: '🦷', label: 'Clínicas Odontológicas' },
  { icon: '🔬', label: 'Laboratórios' },
  { icon: '💊', label: 'Farmácias' },
  { icon: '🧪', label: 'Laboratórios Clínicos' },
  { icon: '🏋️', label: 'Clínicas de Fisioterapia' },
  { icon: '🧠', label: 'Clínicas Psiquiátricas' },
  { icon: '🏨', label: 'Consultórios' },
  { icon: '👁️', label: 'Clínicas Oftalmológicas' },
]

export default function Segments() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.segment-card').forEach((el, i) => {
              setTimeout(() => (el as HTMLElement).style.opacity = '1', i * 60)
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
    <section className="segments" ref={sectionRef} style={{ background: '#f8fafc' }}>
      <div className="section-header">
        <div className="section-chip">Segmentos Atendidos</div>
        <h2 className="section-title">
          Atendemos todos os tipos de{' '}
          <span style={{
            background: 'linear-gradient(135deg, #0d9488, #38bdf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            estabelecimentos
          </span>
        </h2>
        <p className="section-desc">
          Do consultório individual ao grande hospital, nossa consultoria
          atende estabelecimentos de saúde de todos os portes e especialidades.
        </p>
      </div>

      <div className="segments-grid" style={{ maxWidth: 1000, margin: '0 auto' }}>
        {segments.map(seg => (
          <div
            key={seg.label}
            className="segment-card"
            style={{ opacity: 0, transition: 'opacity 0.5s, transform 0.3s, box-shadow 0.3s, background 0.3s, border-color 0.3s' }}
          >
            <div className="segment-icon" style={{ fontSize: '28px' }}>
              {seg.icon}
            </div>
            <div className="segment-label">{seg.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
