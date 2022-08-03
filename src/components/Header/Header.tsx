
import './header.css'
import { SiInstagram, SiTwitter, SiLinkedin } from 'react-icons/si'
import { useState } from 'react'

export default function Header() {

    const [active, setActive] = useState<boolean>(false)

    return (
        <header>
            <div className='logo-div'>
                <div className='logo-text-div'>
                    <h1>Rental Car</h1>
                    <p>solução imediata em veículos</p>
                </div>
            </div>

            <div className={active?'hamburguer-menu-active-div':'hamburguer-menu'} onClick={() => setActive(!active)}>
                <div className={active?'hamburguer-menu-active':''}></div>
                <div className={active?'hamburguer-menu-active':''}></div>
                <div className={active?'hamburguer-menu-active':''}></div>
            </div>

            <div className='nav-div' onTransitionEnd={(e) => setActive(false)}>
                <nav>
                    <ul className='a-links'>
                        <li>Sobre nós</li>
                        <li>Nossos veículos</li>
                        <li>Contato</li>
                    </ul>

                    <ul className='social-media-div'>
                        <li> <SiInstagram /> </li>
                        <li> <SiTwitter /> </li>
                        <li> <SiLinkedin /> </li>
                    </ul>
                </nav>
            </div>

            {active ? <div className='nav-div-active'>
                <nav>
                    <ul className='a-links-active'>
                        <li>Sobre nós</li>
                        <li>Nossos veículos</li>
                        <li>Contato</li>
                    </ul>

                    <ul className='social-media-div-active'>
                        <li> <SiInstagram /> </li>
                        <li> <SiTwitter /> </li>
                        <li> <SiLinkedin /> </li>
                    </ul>
                </nav>
            </div> : ''}

        </header>
    )
}