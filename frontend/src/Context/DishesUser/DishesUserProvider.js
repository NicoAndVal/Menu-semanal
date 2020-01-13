import React, {useReducer,useEffect,useState} from 'react'
import DishesUserContext from './DishesUserContext'
import {ADD_DISHES_USER,REMOVE_DISHES_USER} from './action'

const DishesUserProvider = ({children}) =>{
    
    const userLogged = localStorage.getItem('token')

    const [stateUser, setStateUser] = useState()
    
    const initialState = {
        lunes:{
            'desayuno':'',
            'almuerzo': '',
            'cena': ''
        },
        martes:{
            'desayuno':'',
            'almuerzo': '',
            'cena': ''
        },
        miercoles:{
            'desayuno':'',
            'almuerzo': '',
            'cena': ''
        },
        jueves:{
            'desayuno':'',
            'almuerzo': '',
            'cena': ''
        },
        vienres:{
            'desayuno':'',
            'almuerzo': '',
            'cena': ''
        },
        sabado:{
            'desayuno':'',
            'almuerzo': '',
            'cena': ''
        },
        domingo:{
            'desayuno':'',
            'almuerzo': '',
            'cena': ''
        }
    }

    useEffect(() =>{
        fetch(`http://localhost:5000/api/user_plate/${userLogged}`)
        .then(res => res.json())
        .then(res => {
             setStateUser({stateUser:res})
        })
    },[])

    console.log(stateUser)



    const dishesUserReducer = (state,{type,dia,plato}) =>{
        if(type ===ADD_DISHES_USER){
            if(dia ==='semana'){
                return {
                    lunes: plato.lunes,
                    martes: plato.martes,
                    miercoles: plato.miercoles,
                    jueves : plato.jueves,
                    viernes: plato. vienres,
                    sabado: plato.sabado,
                    domingo: plato.domingo
                }
            }


            if(dia ==='lunes'){
                return{
                    ... state,
                    lunes: plato
                }
            }
            if(dia ==='martes'){
                return{
                    ... state,
                    martes:plato
                }
            }
            if(dia ==='miercoles'){
                return{
                    ... state,
                    miercoles:plato
                }
            }
            if(dia ==='jueves'){
                return{
                    ... state,
                    jueves:plato
                }
            }
            if(dia ==='vienres'){
                return{
                    ... state,
                    vienres:plato
                }
            }
            if(dia ==='sabado'){
                return{
                    ... state,
                    sabado:plato
                }
            }
            if(dia ==='domingo'){
                return{
                    ... state,
                    domingo:plato
                }
            }
        }

        return state
    }

    const [state, dispatch] = useReducer(dishesUserReducer,stateUser)

    return (
        <DishesUserContext.Provider value = {[state,dispatch]}>
            {children}
        </DishesUserContext.Provider>
    )
}

export default DishesUserProvider