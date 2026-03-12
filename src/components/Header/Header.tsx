import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../../assets/Logo.png"

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <header className="relative flex items-center justify-center bg-[#FFF5D4] p-8 md:justify-between">
        <img
          className="hidden h-auto max-w-[12.5rem] md:block"
          src={Logo}
          alt="Cervejando logo"
        />

        <button
          type="button"
          className="relative z-20 flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[var(--c-text)] bg-white p-2 shadow-sm transition hover:bg-[#fff8e8] md:hidden"
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
            {menuAbierto ? (
              <XMarkIcon className="h-6 w-6 text-[var(--c-text)]" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-[var(--c-text)]" />
            )}
        </button>

        <nav className={
          menuAbierto
            ? 'flex flex-col items-center absolute top-full left-0 w-full bg-[var(--c-primary)] py-4 shadow-[0_4px_6px_rgba(0,0,0,0.1)] z-10'
            : 'hidden md:flex'
        }>
            <ul className={`flex ${menuAbierto ? 'flex-col gap-6' : 'gap-8'}`}>
                <li><a className="font-bold hover:text-[#d4a017]" href="#">Inicio</a></li>
                <li><a className="font-bold hover:text-[#d4a017]" href="escuelas.html">Escuelas</a></li>
                <li><a className="font-bold hover:text-[#d4a017]" href="estilos.html">Estilos</a></li>
                <li><a className="font-bold hover:text-[#d4a017]" href="curiosidades.html">Curiosidades</a></li>
                <li><a className="font-bold hover:text-[#d4a017]" href="quienessomos.html">Quienes Somos</a></li>
                <li><a className="font-bold hover:text-[#d4a017]" href="contacto.html">Contacto</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header