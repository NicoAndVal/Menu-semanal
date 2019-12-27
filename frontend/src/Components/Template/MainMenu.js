import React from 'react'
import {NavLink} from 'react-router-dom'
import CartCounter from '../Atomic/CartCounter'


const MainMenu = () => (
    <>
        <ul className="nav  nav-pills justify-content-center">
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

            <li className='nav-link'> <CartCounter/></li>


        </ul>
    </>
)

export default MainMenu