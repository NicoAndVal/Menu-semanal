import React from 'react'
import PrivateMenu from '../Moleculs/PrivateMenu'
import PublicMenu from '../Moleculs/PublicMenu'

const Header = () => {

    const userLogged = localStorage.getItem('token')
    return (
        <main className='menu-navegacion'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img src="/"alt="Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        userLogged?
                        <PrivateMenu/>:
                        <PublicMenu/>
                    }

                </div>

            </nav>

        </main>
    )
}

export default Header