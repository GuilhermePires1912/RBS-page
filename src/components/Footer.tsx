import { MdHealthAndSafety } from 'react-icons/md'
import { FaWhatsapp, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="logo-wrap" style={{ marginBottom: '16px' }}>
              <div className="logo-icon">
                <MdHealthAndSafety size={26} color="#fff" />
              </div>
              <div>
                <div className="logo-text-main">RBS</div>
                <div className="logo-text-sub">Gestão em Saúde</div>
              </div>
            </div>
            <p>
              Especialistas em cadastro e renovação do CNES, consultoria regulatória
              e regularização sanitária para estabelecimentos de saúde em todo o Brasil.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <a
                href="https://wa.me/5521987002171"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px', height: '38px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#25d366', transition: 'all 0.3s', textDecoration: 'none'
                }}
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/raphael-bruno-4802b490"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px', height: '38px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#0077b5', transition: 'all 0.3s', textDecoration: 'none'
                }}
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="footer-col">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#servicos">Cadastro CNES</a></li>
              <li><a href="#servicos">Renovação CNES</a></li>
              <li><a href="#servicos">Consultoria Especializada</a></li>
              <li><a href="#servicos">Regularização Sanitária</a></li>
              <li><a href="#servicos">Alvará Sanitário</a></li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="footer-col">
            <h4>Contato</h4>
            <ul>
              <li>
                <a href="https://wa.me/5521987002171" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={14} color="#25d366" />
                  (21) 98700-2171
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/raphael-bruno-4802b490" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={14} color="#0077b5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#contato">
                  <FaMapMarkerAlt size={14} color="#0d9488" />
                  Rua Bulhões de Carvalho, 619 – Copacabana, RJ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} RBS Gestão em Saúde. Todos os direitos reservados. · CNPJ: 64.505.481/0001-70
          </p>
          <div className="footer-bottom-links">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
