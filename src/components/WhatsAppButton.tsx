import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <div className="wa-container">
      <div className="wa-tooltip" style={{ position: 'relative' }}>
        Fale com a gente! 👋
      </div>
      <a
        href="https://wa.me/5521987002171?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20RBS%20Gestão%20em%20Saúde."
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
        aria-label="Chat no WhatsApp"
      >
        <FaWhatsapp size={30} color="#ffffff" />
      </a>
    </div>
  )
}
