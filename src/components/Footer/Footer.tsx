import './Footer.css'
import PerroPis from '../../assets/perro_piss.png'
import SendIcon from '../../assets/send-icon.svg'
import Behance from '../../assets/behance.svg'
import Instagram from '../../assets/instagram.svg'
import Linkedin from '../../assets/linkedin.svg'
import Senora from '../../assets/footerillustration.png'
import { formatDateTime } from '../../utils/functions'

const Footer = () => {
  return (
    <>
      <footer className="contact-footer" id="contacto">
        <div className="contact-container">
          <img src={PerroPis} alt="perro piss" className="contact-bird" />
          <div className="contact-card">
            <h2>Contacto</h2>
            <form className="contact-form">
              <input type="text" placeholder="Apellido" required />
              <input type="text" placeholder="Nombre" required />
              <input type="email" placeholder="Correo *" required />
              <select required>
                <option value="">Soy *</option>
                <option value="disabled">Hombre</option>
                <option value="volunteer">Mujer</option>
                <option value="partner">No binario</option>
              </select>
              <textarea rows={4} placeholder="Mensaje *" required></textarea>
              <div className="form-bottom">
                <small>* Campos obligatorios</small>
                <button type="submit" className="send-btn">
                  <img src={SendIcon} alt="Enviar" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="social-links">
          <a href="https://www.instagram.com/victorious.es/" title="Enlace a instagrm" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.behance.net/victorhernandezu" title="Enlace a Behance" target="_blank" rel="noreferrer">
            <img src={Behance} alt="Behance" />
          </a>
          <a href="https://www.linkedin.com/in/víctor-hernández-diseñador-grafico" title="Enlace a Linkedin" target="_blank" rel="noreferrer">
            <img src={Linkedin} alt="Linkedin" />
          </a>
        </div>

        <div className="footer-illustration">
          <img src={Senora} alt="señora durmiendo" />
        </div>
        <div className="footer-legal">
          <p>© <span id="current-year">{formatDateTime()}</span> Víctor Hernández. Todos los derechos reservados.</p>
          <p>
            <a href="/privacidad">Política de privacidad</a> •
            <a href="/terminos">Términos de uso</a> •
            <a href="/cookies">Política de cookies</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer