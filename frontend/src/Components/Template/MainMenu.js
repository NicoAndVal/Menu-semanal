import React from 'react'
import {NavLink} from 'react-router-dom'


const MainMenu = () => (
    <>
        <div className = 'main-menu'>
            <ul className='main-menu_links'>
                <li className = 'main-menu_item'><NavLink exact to='/' className='main-menu_content' activeClassName='activo'>Home</NavLink></li>
                <li className = 'main-menu_item'><NavLink to='/agregarmenu'  className='main-menu_content' activeClassName='activo'>Agregar Menu</NavLink></li>
                <li className = 'main-menu_item'><NavLink to='/mostrarmenu'  className='main-menu_content' activeClassName='activo'>Menus</NavLink></li>
            </ul>

        </div>
    </>
)

export default MainMenu