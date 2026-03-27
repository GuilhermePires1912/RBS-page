import { useEffect, useRef, useState } from 'react';
import { FaLinkedin, FaWhatsapp, FaAward } from 'react-icons/fa';
import { MdHealthAndSafety, MdSchool, MdVerified } from 'react-icons/md';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className='about' id='sobre' ref={sectionRef}>
      <div className='about-inner'>
        {/* ── Visual side ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Título visível apenas no mobile (acima da foto) */}
          <h2
            className='section-title about-title-mobile'
            style={{ textAlign: 'left', margin: 0 }}
          >
            Expertise e dedicação
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #0d9488, #38bdf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ao seu lado
            </span>
          </h2>
          <div className='about-visual fade-up'>
            {/* Decorative blobs */}
            <div
              style={{
                position: 'absolute',
                top: -40,
                left: -40,
                width: 220,
                height: 220,
                background:
                  'radial-gradient(circle, rgba(13,148,136,0.18) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 60,
                right: -30,
                width: 160,
                height: 160,
                background:
                  'radial-gradient(circle, rgba(56,189,248,0.14) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            {/* Decorative ring */}
            <div
              style={{
                position: 'absolute',
                top: 30,
                left: 30,
                right: 30,
                bottom: 30,
                border: '1.5px dashed rgba(13,148,136,0.2)',
                borderRadius: '28px',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            {/* Top badge */}
            <div
              style={{
                position: 'absolute',
                top: -14,
                left: 28,
                background: 'linear-gradient(135deg, #0c1f3f, #1a3a6b)',
                color: 'white',
                borderRadius: '30px',
                padding: '8px 18px',
                fontSize: '12px',
                fontWeight: 700,
                boxShadow: '0 8px 24px rgba(12,31,63,0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                zIndex: 10,
                border: '1px solid rgba(13,148,136,0.3)',
              }}
            >
              <MdVerified size={14} color='#0d9488' />
              Sócio
            </div>

            {/* Main photo card */}
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                aspectRatio: '3 / 4',
                maxHeight: 520,
                boxShadow:
                  '0 40px 80px rgba(12,31,63,0.25), 0 0 0 1px rgba(13,148,136,0.15)',
                zIndex: 2,
              }}
            >
              {/* Photo */}
              {!photoError ? (
                <img
                  src='/raphael.jpg'
                  alt='Raphael Bruno — RBS Gestão em Saúde'
                  onLoad={() => setPhotoLoaded(true)}
                  onError={() => setPhotoError(true)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'ncenter',
                    display: 'block',
                    transition: 'opacity 0.5s',
                    opacity: photoLoaded ? 1 : 0,
                  }}
                />
              ) : null}

              {/* Fallback when no photo */}
              {(photoError || !photoLoaded) && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(160deg, #0c1f3f 0%, #1a3a6b 50%, #0a2d4a 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      background: 'linear-gradient(135deg, #0d9488, #38bdf8)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '36px',
                      fontWeight: 800,
                      color: 'white',
                      boxShadow: '0 12px 30px rgba(13,148,136,0.5)',
                    }}
                  >
                    RB
                  </div>
                  <div style={{ textAlign: 'center', color: 'white' }}>
                    <div style={{ fontSize: '20px', fontWeight: 700 }}>
                      Raphael Bruno
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.55)',
                        marginTop: 4,
                      }}
                    >
                      Especialista em Gestão de Saúde
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom gradient overlay on photo */}
              {photoLoaded && !photoError && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '45%',
                    background:
                      'linear-gradient(to top, rgba(12,31,63,0.85) 0%, rgba(12,31,63,0.4) 50%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '24px 22px',
                  }}
                >
                  <div
                    style={{
                      color: 'white',
                      fontSize: '19px',
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    Raphael Bruno
                  </div>
                  <div
                    style={{
                      color: '#5eead4',
                      fontSize: '12px',
                      fontWeight: 600,
                      marginTop: 4,
                      letterSpacing: '0.3px',
                    }}
                  >
                    Consultor · Gestão em Saúde & CNES
                  </div>
                  <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                    <a
                      href='https://www.linkedin.com/in/raphael-bruno-4802b490'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        width: 32,
                        height: 32,
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(8px)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        transition: 'background 0.3s',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      <FaLinkedin size={15} color='#ffffff' />
                    </a>
                    <a
                      href='https://wa.me/5521987002171'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        width: 32,
                        height: 32,
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(8px)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        transition: 'background 0.3s',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      <FaWhatsapp size={15} color='#ffffff' />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Floating badge — bottom right */}
            <div
              className='about-badge-bottom'
              style={{
                position: 'absolute',
                bottom: -20,
                right: -16,
                background: '#ffffff',
                borderRadius: '18px',
                padding: '14px 18px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.13)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                zIndex: 10,
                border: '1px solid #e2e8f0',
                minWidth: 175,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: 'linear-gradient(135deg, #0d9488, #38bdf8)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <FaAward color='white' size={20} />
              </div>
              <div>
                <div
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    lineHeight: 1,
                    background: 'linear-gradient(135deg, #0d9488, #38bdf8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  +10
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: '#94a3b8',
                    fontWeight: 600,
                    marginTop: 2,
                    letterSpacing: '0.3px',
                  }}
                >
                  anos de experiência
                </div>
              </div>
            </div>

            {/* Floating badge — left side */}
            <div
              className='about-badge-left'
              style={{
                position: 'absolute',
                top: '40%',
                left: -20,
                background: 'linear-gradient(135deg, #0d9488, #0891b2)',
                borderRadius: '16px',
                padding: '12px 16px',
                boxShadow: '0 12px 30px rgba(13,148,136,0.4)',
                zIndex: 10,
                textAlign: 'center',
                minWidth: 70,
              }}
            >
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 800,
                  color: 'white',
                  lineHeight: 1,
                }}
              >
                500+
              </div>
              <div
                style={{
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.75)',
                  fontWeight: 600,
                  marginTop: 3,
                  letterSpacing: '0.5px',
                }}
              >
                Estabelecimentos
              </div>
            </div>
          </div>
        </div>

        {/* ── Content side ── */}
        <div className='about-content'>
          {/* Título visível apenas no desktop (lado direito) */}
          <h2
            className='section-title about-title-desktop fade-up'
            style={{ textAlign: 'left' }}
          >
            Expertise e dedicação
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #0d9488, #38bdf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ao seu lado
            </span>
          </h2>
          <div className='about-name fade-up'>Raphael Bruno</div>
          <div className='about-role fade-up'>
            Consultor Especialista em Gestão de Saúde & CNES
          </div>

          <p className='about-bio fade-up'>
            Com mais de uma década de experiência no setor de saúde, Raphael
            Bruno fundou a <strong>RBS Gestão em Saúde</strong> com a missão de
            descomplicar os processos regulatórios para estabelecimentos de
            saúde de todos os portes.
          </p>

          <div className='about-highlights fade-up'>
            <div className='highlight-item'>
              <div className='highlight-icon'>
                <MdHealthAndSafety color='#0d9488' size={20} />
              </div>
              <div className='highlight-text'>
                <strong>Especialização em CNES</strong>
                Domínio completo do sistema e seus processos
              </div>
            </div>
            <div className='highlight-item'>
              <div className='highlight-icon'>
                <MdSchool color='#0d9488' size={20} />
              </div>
              <div className='highlight-text'>
                <strong>Formação Especializada</strong>
                Gestão em Saúde e Regulação Sanitária
              </div>
            </div>
          </div>

          <div className='about-social fade-up'>
            <a
              href='https://www.linkedin.com/in/raphael-bruno-4802b490'
              target='_blank'
              rel='noopener noreferrer'
              className='social-link'
            >
              <FaLinkedin size={18} color='#0077b5' />
              LinkedIn
            </a>
            <a
              href='https://wa.me/5521987002171?text=Olá%20Raphael!%20Gostaria%20de%20uma%20consultoria.'
              target='_blank'
              rel='noopener noreferrer'
              className='social-link'
            >
              <FaWhatsapp size={18} color='#25d366' />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
