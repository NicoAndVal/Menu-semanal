import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarMobil = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">NAVEGACIÓN</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink exact to='/' className='nav-link'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/agregarmenu' className='nav-link'>Agregar Menu</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/mostrarmenu' className='nav-link'>Menus</NavLink>

                    </li>
                    <li className="nav-item">
                        <NavLink to='/formulario' className='nav-link'>Formulario</NavLink>

                    </li>


                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">DÍAS DE LA SEMANA</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown01">
                            <NavLink to='/' className="dropdown-item">lUNES</NavLink>
                            <NavLink to='/martes' className="dropdown-item">MARTE</NavLink>
                            <NavLink to='/miercoles' className="dropdown-item">MIERCOLES</NavLink>
                            <NavLink to='/jueves' className="dropdown-item">JUEVES</NavLink>
                            <NavLink to='/viernes' className="dropdown-item">VIERNES</NavLink>
                            <NavLink to='/sabado' className="dropdown-item">SABADO</NavLink>
                            <NavLink to='/domingo' className="dropdown-item">DOMINGO</NavLink>
                        </div>
                    </li>
                </ul>

            </div>
        </nav>
    )
}


export default NavBarMobil