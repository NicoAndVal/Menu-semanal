import React,{useContext}from 'react'
import { ADD_DISHES_USER } from '../../Context/DishesUser/action'
import DishesUserContext from '../../Context/DishesUser/DishesUserContext'

const CleanPlanner = () => {

    const userLogged = localStorage.getItem('token')
    
    let datos2 = {
        user: userLogged,
        lunes: {
            "desayuno": '',
            "almuerzo": '',
            "cena": ''
        },
        martes: {
            "desayuno": '',
            "almuerzo": '',
            "cena": ''
        },
        miercoles: {
            "desayuno": '',
            "almuerzo": '',
            "cena": ''
        },
        jueves: {
            "desayuno": '',
            "almuerzo": '',
            "cena": ''
        },
        viernes: {
            "desayuno": '',
            "almuerzo": '',
            "cena": ''
        },
        sabado: {
            "desayuno": '',
            "almuerzo": '',
            "cena": ''
        },
        domingo: {
            "desayuno": '',
            "almuerzo": '',
            "cena": ''
        },
        
    }
    
    
    let [, dispatch] = useContext(DishesUserContext)
    
    return (
        <button
        className = 'button-deleteAll'
        onClick={() =>dispatch({
            type: ADD_DISHES_USER,
            dia: 'agregar',
            plato: datos2
        })}
        >
            ELIMINAR TODOS LOS PLATOS DEL CALENDARIO
        </button>
    )
}

export default CleanPlanner
