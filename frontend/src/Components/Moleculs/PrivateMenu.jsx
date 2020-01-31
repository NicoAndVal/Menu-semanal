import React,{useEffect,useState} from 'react'
import {NavLink} from 'react-router-dom'

const removeToken = () => {
    localStorage.removeItem('token')
    window.location = '/login'
  
}

let showPlanner = false
const PrivateMenu = () => {

    let [size, setSize] = useState({
        ancho: window.innerWidth
    })

    useEffect(() =>{
        const handleResize = () =>{
            setSize({
                ancho: window.innerWidth
            })
        }

        window.addEventListener('resize', handleResize)
    },[])
    
    if(size.ancho>990){
        showPlanner = true
    }else{
        showPlanner = false
    }
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/">INICIO</a>
            </li>
            <li className="nav-item">
                <NavLink to='/agregarmenu' className='nav-link'>AGREGAR MENÚ</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/menues' className='nav-link'>MENUS</NavLink>
            </li>
            {
                showPlanner ?
                    <li className="nav-item">
                        <NavLink to='/planificador' className='nav-link'>PLANIFICADOR</NavLink>
                    </li> :
                    <>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                DÍAS DE LA SEMANA</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink to='/lunes' className="dropdown-item">lUNES</NavLink>
                                <NavLink to='/martes' className="dropdown-item">MARTE</NavLink>
                                <NavLink to='/miercoles' className="dropdown-item">MIERCOLES</NavLink>
                                <NavLink to='/jueves' className="dropdown-item">JUEVES</NavLink>
                                <NavLink to='/viernes' className="dropdown-item">VIERNES</NavLink>
                                <NavLink to='/sabado' className="dropdown-item">SABADO</NavLink>
                                <NavLink to='/domingo' className="dropdown-item">DOMINGO</NavLink>
                            </div>
                        </li>
                    </>
            }
            
            <li><span onClick={() => removeToken()} className='nav-link'>Cerrar Sesión</span></li>

        </ul>

    )
}

export default PrivateMenu
