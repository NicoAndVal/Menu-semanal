import React from 'react'
import {NavLink} from 'react-router-dom'


const PublicMenu = () => {
    return (

        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink to='/login' className='nav-link'>INGRESAR</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/registro' className='nav-link'>REGISTRO</NavLink>
            </li>
        </ul>


    )
}

export default PublicMenu
