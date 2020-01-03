import React from 'react'
import {NavLink} from 'react-router-dom'


const MainMenu = () => (
    <>
    <div className = 'menu-navegacion'>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/">LOGOTIPO</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">INICIO</a>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/agregarmenu' className='nav-link'>AGREGAR MENÚ</NavLink>

                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            DÍAS DE LA SEMANA
        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink to='/' exact className="dropdown-item">lUNES</NavLink>
                            <NavLink to='/martes' className="dropdown-item">MARTE</NavLink>
                            <NavLink to='/miercoles' className="dropdown-item">MIERCOLES</NavLink>
                            <NavLink to='/jueves' className="dropdown-item">JUEVES</NavLink>
                            <NavLink to='/viernes' className="dropdown-item">VIERNES</NavLink>
                            <NavLink to='/sabado' className="dropdown-item">SABADO</NavLink>
                            <NavLink to='/domingo' className="dropdown-item">DOMINGO</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/menues' className='nav-link'>MENUS</NavLink>
                    </li>
                </ul>

            </div>
        </nav>

    </div>

    </>
)




export default MainMenu