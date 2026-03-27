import { useEffect, useRef } from 'react';
import { FaWhatsapp, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 6 + 3;
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 15 + 10}s;
        animation-delay: ${Math.random() * 10}s;
        opacity: ${Math.random() * 0.5 + 0.2};
        background: rgba(${Math.random() > 0.5 ? '13,148,136' : '56,189,248'}, 0.2);
      `;
      container.appendChild(particle);
      setTimeout(() => particle.remove(), 25000);
    };

    const interval = setInterval(createParticle, 800);
    for (let i = 0; i < 12; i++) createParticle();

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='hero' id='inicio'>
      <div className='hero-bg' />
      <div className='hero-image-overlay' />
      <div className='hero-grid' />
      <div
        ref={particlesRef}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      />

      {/* Decorative glow blobs */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 400,
          height: 400,
          background:
            'radial-gradient(circle, rgba(13,148,136,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: 300,
          height: 300,
          background:
            'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className='hero-content'>
        <h1 className='hero-title'>
          Regularize seu
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #0d9488, #38bdf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Estabelecimento
          </span>
          <br />
          de Saúde
        </h1>

        <p className='hero-subtitle'>
          Cadastro e renovação do{' '}
          <strong style={{ color: 'rgba(255,255,255,0.85)' }}>CNES - Cadastro Nacional do Estabelecimento de Saúde</strong>{' '}
          com agilidade e segurança. Consultoria especializada para clínicas,
          hospitais, laboratórios e demais estabelecimentos da área da saúde.
        </p>

        <div className='hero-actions'>
          <a
            href='https://wa.me/5521987002171?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20cadastro%20e%20renovação%20do%20CNES.'
            target='_blank'
            rel='noopener noreferrer'
            className='btn-hero-primary'
          >
            <FaWhatsapp size={20} />
            Solicitar Consultoria
          </a>
          <a href='#servicos' className='btn-outline'>
            Nossos Serviços
            <FaArrowRight size={14} />
          </a>
        </div>

        <div className='hero-stats'>
          <div className='stat-item'>
            <div className='stat-number'>+500</div>
            <div className='stat-label'>Estabelecimentos</div>
          </div>
          <div className='stat-item'>
            <div className='stat-number'>+10</div>
            <div className='stat-label'>Anos de Exp.</div>
          </div>
          <div className='stat-item'>
            <div className='stat-number'>100%</div>
            <div className='stat-label'>Aprovação</div>
          </div>
          <div className='stat-item'>
            <div className='stat-number'>6 meses</div>
            <div className='stat-label'>Gestão da renovação semestral</div>
          </div>
        </div>

        {/* Trust badges */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '28px',
            flexWrap: 'wrap',
          }}
        >
          {[
            'Processo 100% Digital',
            'Atendimento Personalizado',
            'Renovação Semestral Gerenciada',
          ].map((badge) => (
            <div
              key={badge}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'rgba(255,255,255,0.55)',
                fontSize: '12px',
                fontWeight: 500,
              }}
            >
              <MdVerified size={14} style={{ color: '#0d9488' }} />
              {badge}
            </div>
          ))}
        </div>
      </div>

      <div className='scroll-indicator'>
        <FaChevronDown size={14} />
        <span>Saiba mais</span>
      </div>
    </section>
  );
}
