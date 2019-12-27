import React from 'react'
import GrillaMobil from '../Atomic/GrillaMobil'
import { NavLink } from 'react-router-dom'

const Sabado = () =>{
    return(
        <div className='calendario'>
        <GrillaMobil dia = 'Sabado'/>
        <button><NavLink to='/mostrarmenu'>AGREGAR MENU</NavLink></button>
        <button>AGREGAR MENU</button>
        <button>AGREGAR MENU</button>
        </div>
    )
}


export default Sabado