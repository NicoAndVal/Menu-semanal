import React from 'react'
import PrivateMenu from '../Moleculs/PrivateMenu'
import PublicMenu from '../Moleculs/PublicMenu'
import logo from '../../logo.png'

const Header = () => {

    const userLogged = localStorage.getItem('token')
    return (
        <main className='menu-navegacion'>
            <a className="navbar-brand" href="/">
                <img src={logo} alt="Logo" className='logotipo' />
            </a>
            <nav className="navbar navbar-expand-lg navbar-light menu-navegacion_navbar">
                <button className="navbar-toggler menu-navegacion_boton" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon menu-navegacion_icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        userLogged ?
                            <PrivateMenu /> :
                            <PublicMenu />
                    }

                </div>

            </nav>

        </main>
    )
}

export default Header