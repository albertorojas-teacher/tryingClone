import { useState } from 'react'
import Logo from "../../assets/Logo.png"

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <header className="bg-[#FFF5D4] flex justify-between items-center p-8 relative">
        <img
          className="max-w-[12.5rem] h-auto"
          src={Logo}
          alt="Cervejando logo"
        />

        <button
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-0 cursor-pointer"
          aria-label="Abrir menú"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
            <span className="w-[30px] h-[3px] bg-[var(--c-text)] rounded-[5px] transition-all duration-300"></span>
            <span className="w-[30px] h-[3px] bg-[var(--c-text)] rounded-[5px] transition-all duration-300"></span>
            <span className="w-[30px] h-[3px] bg-[var(--c-text)] rounded-[5px] transition-all duration-300"></span>
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