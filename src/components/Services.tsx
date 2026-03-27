import { useEffect, useRef } from 'react';
import {
  MdAssignmentTurnedIn,
  MdAutorenew,
  MdBusinessCenter,
} from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const services = [
  {
    tag: 'Novo Registro',
    icon: MdAssignmentTurnedIn,
    title: 'Cadastro CNES',
    desc: 'Registro completo do seu estabelecimento no sistema nacional, sem burocracia.',
    pills: ['Análise documental', 'Envio e protocolo', 'Suporte total'],
    highlight: false,
    accent: 'linear-gradient(135deg, #0d9488, #38bdf8)',
  },
  {
    tag: 'Mais Solicitado',
    icon: MdAutorenew,
    title: 'Renovação CNES',
    desc: 'O CNES deve ser atualizado a cada 6 meses, de acordo com a legislação. Cuidamos de todo o processo. Você não precisa se preocupar com prazos e burocracia.',
    pills: ['Envio documental', 'Renovação semestral automática', 'Sem acionamento'],
    highlight: true,
    accent: 'linear-gradient(135deg, #38bdf8, #818cf8)',
  },
  {
    tag: 'Consultoria',
    icon: MdBusinessCenter,
    title: 'Consultoria Especializada',
    desc: 'Orientação completa em alvarás, licenciamentos e regularização sanitária/ANVISA.',
    pills: ['Diagnóstico', 'Registro', 'Regularização'],
    highlight: false,
    accent: 'linear-gradient(135deg, #0891b2, #0d9488)',
  },
];

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.srv-card').forEach((el, i) => {
              setTimeout(() => el.classList.add('srv-visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className='services' id='servicos'>
      <div className='section-header'>
        <div className='section-chip'>Nossos Serviços</div>
        <h2 className='section-title'>
          Soluções completas para{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #0d9488, #38bdf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            seu estabelecimento
          </span>
        </h2>
        <p className='section-desc'>
          Do cadastro inicial à consultoria regulatória completa - com
          agilidade, segurança e aprovação garantida.
        </p>
      </div>

      <div
        ref={gridRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.tag}
              className='srv-card'
              style={{
                background: s.highlight
                  ? 'linear-gradient(150deg, #0c1f3f 0%, #0f2d50 100%)'
                  : '#ffffff',
                border: s.highlight
                  ? '1px solid rgba(56,189,248,0.2)'
                  : '1px solid #e8eef4',
                borderRadius: '22px',
                padding: '32px 28px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Background accent glow */}
              <div
                style={{
                  position: 'absolute',
                  top: -40,
                  right: -40,
                  width: 140,
                  height: 140,
                  background: s.accent,
                  borderRadius: '50%',
                  opacity: s.highlight ? 0.12 : 0.07,
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Top row: tag */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '22px',
                }}
              >
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    background: s.highlight
                      ? 'rgba(56,189,248,0.15)'
                      : 'rgba(13,148,136,0.08)',
                    color: s.highlight ? '#38bdf8' : '#0d9488',
                    border: s.highlight
                      ? '1px solid rgba(56,189,248,0.25)'
                      : '1px solid rgba(13,148,136,0.15)',
                  }}
                >
                  {s.tag}
                </span>
              </div>

              {/* Icon */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '16px',
                  background: s.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  boxShadow: `0 8px 20px rgba(13,148,136,0.3)`,
                }}
              >
                <Icon size={26} color='#fff' />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 800,
                  color: s.highlight ? '#ffffff' : '#0c1f3f',
                  marginBottom: '10px',
                  lineHeight: 1.25,
                }}
              >
                {s.title}
              </h3>

              {/* Short desc */}
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.65,
                  color: s.highlight ? 'rgba(255,255,255,0.55)' : '#64748b',
                  marginBottom: '22px',
                }}
              >
                {s.desc}
              </p>

              {/* Pills */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '7px',
                  marginBottom: '26px',
                }}
              >
                {s.pills.map((pill) => (
                  <span
                    key={pill}
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '5px 11px',
                      borderRadius: '20px',
                      background: s.highlight
                        ? 'rgba(255,255,255,0.08)'
                        : 'rgba(13,148,136,0.07)',
                      color: s.highlight ? 'rgba(255,255,255,0.65)' : '#0d9488',
                      border: s.highlight
                        ? '1px solid rgba(255,255,255,0.1)'
                        : '1px solid rgba(13,148,136,0.12)',
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  background: s.highlight
                    ? 'rgba(255,255,255,0.08)'
                    : '#f1f5f9',
                  marginBottom: '20px',
                }}
              />

              {/* CTA */}
              <a
                href='https://wa.me/5521987002171'
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '13.5px',
                  color: s.highlight ? '#38bdf8' : '#0d9488',
                  transition: 'gap 0.3s',
                }}
              >
                <FaWhatsapp size={14} />
                Solicitar agora
                <span
                  style={{ marginLeft: 'auto', fontSize: '16px', opacity: 0.6 }}
                >
                  →
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
