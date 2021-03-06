import React,{useContext} from 'react'
import GrillaMobil from '../Atomic/GrillaMobil'
import DayContext from '../../Context/Dishes/DayContext'
import MenuContext from '../../Context/MenuContext'
import CartContext from '../../Context/Cart/CartContext'
import DishesUserContext from '../../Context/DishesUser/DishesUserContext'
import { ADD_DISHES_USER } from '../../Context/DishesUser/action'

let desayuno = ''
let almuerzo = ''
let cena = ''
let lunes = ''
let martes = ''
let miercoles = ''
let jueves = ''
let viernes = ''
let sabado = ''
let domingo = ''

const Sabado = () =>{
    let [stateUser,dispatch] = useContext(DishesUserContext)
    const [state] = useContext(CartContext)  
    const {menues} = useContext(MenuContext) 
    const [stateDay] = useContext(DayContext) 

    const userLogged = localStorage.getItem('token')
    
    
    if(stateUser){
        //SE OBTIENEN LOS PLATOS DEL CONTEXTO
        lunes = stateUser.stateUser.lunes
        martes = stateUser.stateUser.martes
        miercoles = stateUser.stateUser.miercoles
        jueves = stateUser.stateUser.jueves
        viernes = stateUser.stateUser.viernes
        sabado = stateUser.stateUser.sabado
        domingo = stateUser.stateUser.domingo
        desayuno = sabado.desayuno
        almuerzo = sabado.almuerzo
        cena = sabado.cena
    }    
    
    if(stateDay.desayunos ==='DESAYUNO'){
        desayuno = menues.find(m => m._id === state.cart)
        stateDay.desayunos = ''
        let datos2 = {
            user: userLogged,
            sabado:{
                "desayuno":desayuno,
                "almuerzo": almuerzo,
                "cena": cena
            },
            lunes,
            martes,
            miercoles,
            jueves,
            viernes,
            domingo
        }
        
        dispatch({
            type : ADD_DISHES_USER,
            dia : 'agregar',
            plato : datos2 

        })
        
        
        
        
        console.log('entro al desayuno ')
    }
    if(stateDay.almuerzos ==='ALMUERZO'){
        almuerzo = menues.find(m => m._id ===state.cart)
        stateDay.almuerzos = ''
        let datos2 = {
            user: userLogged,
            sabado:{
                "desayuno":desayuno,
                "almuerzo": almuerzo,
                "cena": cena
            },
            lunes,
            martes,
            miercoles,
            jueves,
            viernes,
            domingo
        }
        
        dispatch({
            type : ADD_DISHES_USER,
            dia : 'agregar',
            plato : datos2 

        })
        
        
        console.log('entro al almuerzo')
    }
    if(stateDay.cenas ==='CENA'){
        cena = menues.find(m => m._id ===state.cart)
        stateDay.cenas = ''
        let datos2 = {
            user: userLogged,
            sabado:{
                "desayuno":desayuno,
                "almuerzo": almuerzo,
                "cena": cena
            },
            lunes,
            martes,
            miercoles,
            jueves,
            viernes,
            domingo
        }
        
        dispatch({
            type : ADD_DISHES_USER,
            dia : 'agregar',
            plato : datos2 

        })
        console.log('entro al cena ')
    } 

    
    return(
        <div className='calendario'>
            {
                sabado?<GrillaMobil dia = 'SABADO' desayuno={sabado.desayuno} almuerzo={sabado.almuerzo} cena={sabado.cena}/>:
                <GrillaMobil dia = 'SABADO' desayuno={desayuno} almuerzo={almuerzo} cena = {cena}/>
            }
        </div>
    )
}

export default Sabado