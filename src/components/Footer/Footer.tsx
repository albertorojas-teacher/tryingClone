import PerroPis from '../../assets/perro_piss.png'
import SendIcon from '../../assets/send-icon.svg'
import Behance from '../../assets/behance.svg'
import Instagram from '../../assets/instagram.svg'
import Linkedin from '../../assets/linkedin.svg'
import Senora from '../../assets/footerillustration.png'
import { formatDateTime } from '../../utils/functions'

const Footer = () => {
  const fieldClassName = 'rounded-md border-none bg-[#ffe9cc] px-4 py-3 text-sm text-[#333] outline-none focus:outline-2 focus:outline-[#2f2f2f]'
  const socialLinkClassName = 'flex h-10 w-10 items-center justify-center rounded-full bg-[#004d40] transition hover:scale-110 hover:bg-[#00695c]'

  return (
    <>
      <footer className="relative overflow-hidden bg-[#4be787] pt-32" id="contacto">
        <div className="relative flex items-start justify-center px-4">
          <img src={PerroPis} alt="perro piss" className="absolute top-[-3.125rem] z-10 w-[7.5rem]" />
          <div className="relative z-[1] w-full max-w-[21.25rem] rounded-[9.375rem_9.375rem_1.875rem_1.875rem] bg-[#FFD84D] px-8 pt-12 pb-16 text-center shadow-[0_.625rem_1.5625rem_rgba(0,0,0,0.1)]">
            <h2 className="mb-8 text-[1.8rem] text-[#2f2f2f]">Contacto</h2>
            <form className="flex flex-col gap-3.5">
              <input className={fieldClassName} type="text" placeholder="Apellido" required />
              <input className={fieldClassName} type="text" placeholder="Nombre" required />
              <input className={fieldClassName} type="email" placeholder="Correo *" required />
              <select className={fieldClassName} required>
                <option value="">Soy *</option>
                <option value="disabled">Hombre</option>
                <option value="volunteer">Mujer</option>
                <option value="partner">No binario</option>
              </select>
              <textarea className={`${fieldClassName} resize-none`} rows={4} placeholder="Mensaje *" required></textarea>
              <div className="mt-4 flex items-center justify-between gap-4">
                <small className="text-xs text-[#444]">* Campos obligatorios</small>
                <button type="submit" className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-none bg-[#004d40] transition hover:scale-105 hover:bg-[#00695c]">
                  <img src={SendIcon} alt="Enviar" className="w-[1.375rem] invert" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="relative z-[3] my-8 flex justify-center gap-[1.2rem]">
          <a className={socialLinkClassName} href="https://www.instagram.com/victorious.es/" title="Enlace a instagrm" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="Instagram" className="w-5 invert" />
          </a>
          <a className={socialLinkClassName} href="https://www.behance.net/victorhernandezu" title="Enlace a Behance" target="_blank" rel="noreferrer">
            <img src={Behance} alt="Behance" className="w-5 invert" />
          </a>
          <a className={socialLinkClassName} href="https://www.linkedin.com/in/víctor-hernández-diseñador-grafico" title="Enlace a Linkedin" target="_blank" rel="noreferrer">
            <img src={Linkedin} alt="Linkedin" className="w-5 invert" />
          </a>
        </div>

        <div className="mt-[-3rem] flex items-center justify-center text-center">
          <img src={Senora} alt="señora durmiendo" className="mx-8 my-8 w-full max-w-[43.75rem]" />
        </div>
        <div className="mt-6 border-t border-[#eee] px-4 pt-4 pb-8 text-center font-[Arial,Helvetica,sans-serif] text-sm text-black">
          <p>© <span id="current-year">{formatDateTime()}</span> Víctor Hernández. Todos los derechos reservados.</p>
          <p className="mt-2">
            <a className="mx-2 font-[Arial,Helvetica,sans-serif] text-black hover:underline" href="/privacidad">Política de privacidad</a>
            •
            <a className="mx-2 font-[Arial,Helvetica,sans-serif] text-black hover:underline" href="/terminos">Términos de uso</a>
            •
            <a className="mx-2 font-[Arial,Helvetica,sans-serif] text-black hover:underline" href="/cookies">Política de cookies</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer