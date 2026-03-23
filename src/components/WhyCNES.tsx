import { useEffect, useRef } from 'react';
import {
  MdMoneyOff,
  MdGavel,
  MdVerified,
  MdLocalHospital,
  MdAssignment,
} from 'react-icons/md';
import {
  FaHandshake,
  FaShieldAlt,
  FaExclamationTriangle,
} from 'react-icons/fa';

const reasons = [
  {
    icon: FaHandshake,
    color: '#0d9488',
    bg: 'rgba(13,148,136,0.1)',
    title: 'Convênios exigem CNES ativo',
    desc: 'Planos de saúde como Unimed, Bradesco e Amil só credenciam estabelecimentos com CNES regularizado e atualizado. Sem ele, nenhum contrato de convênio.',
    tag: 'Convênios',
  },
  {
    icon: FaExclamationTriangle,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    title: 'Fiscalizações geram multas',
    desc: 'A ausência do CNES pode resultar em multas, descredenciamentos e até a interdição do estabelecimento. A vigilância sanitária fiscaliza ativamente.',
    tag: 'Risco legal',
  },
  {
    icon: MdMoneyOff,
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.1)',
    title: 'Reembolso negado ao paciente',
    desc: 'Planos de saúde passaram a exigir o número do CNES nos pedidos de reembolso. Sem cadastro, o paciente perde o direito à restituição.',
    tag: 'Financeiro',
  },
  {
    icon: MdGavel,
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)',
    title: 'Renovação obrigatória a cada 6 meses',
    desc: 'O CNES precisa ser renovado semestralmente por exigência legal. A RBS faz toda a gestão da renovação para que seu certificado nunca vença nem gere irregularidades.',
    tag: 'Renovação Semestral',
  },
  {
    icon: MdVerified,
    color: '#0891b2',
    bg: 'rgba(8,145,178,0.1)',
    title: 'Credibilidade e transparência',
    desc: 'O CNES é consultado por pacientes, ANS, ANVISA e gestores. Estar regularizado transmite confiança e profissionalismo ao seu estabelecimento.',
    tag: 'Reputação',
  },
  {
    icon: MdLocalHospital,
    color: '#059669',
    bg: 'rgba(5,150,105,0.1)',
    title: 'Acesso a programas públicos',
    desc: 'Estabelecimentos com CNES ativo podem participar de licitações, programas do SUS e receber repasses federais e estaduais de saúde.',
    tag: 'SUS / Licitações',
  },
];

const stats = [
  { value: '100%', label: 'dos convênios exigem CNES', warning: false },
  { value: null, label: 'a falta do certificado pode gerar sanções e multas', warning: true },
  { value: '6 meses', label: 'ciclo obrigatório de renovação — gerenciamos tudo por você', warning: false },
];

export default function WhyCNES() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.wcnes-card').forEach((el, i) => {
              setTimeout(() => el.classList.add('wcnes-visible'), i * 80);
            });
            entry.target.querySelectorAll('.wcnes-fade').forEach((el, i) => {
              setTimeout(() => el.classList.add('wcnes-visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.08 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '100px 24px',
        background:
          'linear-gradient(170deg, #061228 0%, #0c1f3f 45%, #0a2a40 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid bg */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Glow blobs */}
      <div
        style={{
          position: 'absolute',
          top: -80,
          left: '20%',
          width: 500,
          height: 500,
          background:
            'radial-gradient(circle, rgba(13,148,136,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -60,
          right: '10%',
          width: 400,
          height: 400,
          background:
            'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div className='section-header wcnes-fade' style={{ marginBottom: 56 }}>
          <div
            className='section-chip'
            style={{
              background: 'rgba(13,148,136,0.15)',
              color: '#5eead4',
              borderColor: 'rgba(13,148,136,0.35)',
            }}
          >
            Por que é importante?
          </div>
          <h2 className='section-title' style={{ color: '#ffffff' }}>
            Por que o CNES é{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #0d9488, #38bdf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              essencial
            </span>{' '}
            para
            <br />
            seu estabelecimento?
          </h2>
          <p
            className='section-desc'
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Mais do que uma exigência legal — o CNES impacta diretamente o
            funcionamento, o faturamento e a reputação do seu negócio.
          </p>
        </div>

        {/* Stats bar */}
        <div
          className='wcnes-fade'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            background: 'rgba(255,255,255,0.06)',
            borderRadius: 16,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            marginBottom: 56,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: s.warning
                  ? 'linear-gradient(135deg, rgba(251,146,60,0.08), rgba(239,68,68,0.06))'
                  : 'rgba(12,31,63,0.5)',
                padding: '28px 32px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                borderTop: s.warning ? '2px solid rgba(251,146,60,0.35)' : '2px solid transparent',
                transition: 'background 0.3s',
              }}
            >
              {s.warning ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(251,146,60,0.2), rgba(239,68,68,0.15))',
                    border: '1.5px solid rgba(251,146,60,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 16px rgba(251,146,60,0.2)',
                  }}>
                    <FaExclamationTriangle size={20} color="#fb923c" />
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(251,200,120,0.85)', fontWeight: 500, lineHeight: 1.4 }}>
                    {s.label}
                  </div>
                </div>
              ) : (
                <>
                  <div
                    style={{
                      fontSize: 'clamp(22px, 3vw, 32px)',
                      fontWeight: 800,
                      lineHeight: 1,
                      background: 'linear-gradient(135deg, #0d9488, #38bdf8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: 8,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
                    {s.label}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 16,
          }}
        >
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className='wcnes-card'
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 18,
                  padding: '26px 24px',
                  display: 'flex',
                  gap: 18,
                  alignItems: 'flex-start',
                  transition: 'all 0.35s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = 'rgba(255,255,255,0.07)';
                  el.style.borderColor = `${r.color}40`;
                  el.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = 'rgba(255,255,255,0.04)';
                  el.style.borderColor = 'rgba(255,255,255,0.07)';
                  el.style.transform = 'translateY(0)';
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: r.bg,
                    border: `1px solid ${r.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} color={r.color} />
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      marginBottom: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.8px',
                        textTransform: 'uppercase',
                        color: r.color,
                        padding: '3px 9px',
                        background: r.bg,
                        borderRadius: 20,
                      }}
                    >
                      {r.tag}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: 8,
                      lineHeight: 1.3,
                    }}
                  >
                    {r.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      color: 'rgba(255,255,255,0.5)',
                      lineHeight: 1.65,
                    }}
                  >
                    {r.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div
          className='wcnes-fade'
          style={{
            marginTop: 52,
            background: 'rgba(13,148,136,0.1)',
            border: '1px solid rgba(13,148,136,0.2)',
            borderRadius: 18,
            padding: '28px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 46,
                height: 46,
                background: 'linear-gradient(135deg, #0d9488, #38bdf8)',
                borderRadius: 13,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <MdAssignment size={22} color='white' />
            </div>
            <div>
              <div style={{ color: '#ffffff', fontWeight: 700, fontSize: 16 }}>
                Seu CNES está em dia?
              </div>
              <div
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: 13,
                  marginTop: 2,
                }}
              >
                Faça uma análise gratuita agora e descubra a situação do seu
                estabelecimento.
              </div>
            </div>
          </div>
          <a
            href='https://wa.me/5521987002171?text=Olá!%20Gostaria%20de%20verificar%20a%20situação%20do%20meu%20CNES.'
            target='_blank'
            rel='noopener noreferrer'
            className='btn-hero-primary'
            style={{ display: 'inline-flex', flexShrink: 0 }}
          >
            <FaShieldAlt size={16} />
            Verificar meu CNES
          </a>
        </div>
      </div>
    </section>
  );
}
