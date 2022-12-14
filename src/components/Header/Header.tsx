
import './header.css'
import { SiInstagram, SiTwitter, SiLinkedin } from 'react-icons/si'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

    const [active, setActive] = useState<boolean>(false)

    return (
        <header>
            <div className='logo-div'>
                <div className='logo-text-div'>
                    <Link style={{ textDecoration: 'none', color: '#e9f2f9' }} to='/'><h1>Car Sale</h1></Link>
                    <p>solução imediata em veículos</p>
                </div>
            </div>

            <div className={active ? 'hamburguer-menu-active-div' : 'hamburguer-menu'} onClick={() => setActive(!active)}>
                <div className={active ? 'hamburguer-menu-active' : ''}></div>
                <div className={active ? 'hamburguer-menu-active' : ''}></div>
                <div className={active ? 'hamburguer-menu-active' : ''}></div>
            </div>

            <div className='nav-div' onTransitionEnd={(e) => setActive(false)}>
                <nav>
                    <ul className='a-links'>
                        <Link style={{ textDecoration: 'none', color: '#e9f2f9' }} to='/cars'><li>Nossos veículos</li></Link>
                        <li>Contato</li>
                        <Link style={{ textDecoration: 'none', color: '#e9f2f9' }} to='/carrinho'><li> Carrinho </li></Link>
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
                        <Link style={{ textDecoration: 'none', color: '#e9f2f9' }} to='/cars'><li>Nossos veículos</li></Link>
                        <li>Contato</li>
                        <Link style={{ textDecoration: 'none', color: '#e9f2f9' }} to='/carrinho'><li> Carrinho </li></Link>
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