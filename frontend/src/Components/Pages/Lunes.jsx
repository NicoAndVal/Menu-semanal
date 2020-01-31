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
let martes = ''
let miercoles = ''
let jueves = ''
let viernes = ''
let sabado = ''
let domingo = ''
let lunes = ''

const Lunes = () =>{
    let [stateUser,dispatch] = useContext(DishesUserContext)

    const [state] = useContext(CartContext)  //AQUI SE GUARDA EL VALOR DEL PLATO A AGREGAR EN EL MENÚ (SE DEBE ACCEDER AL .CART)
    const {menues} = useContext(MenuContext) //ESTAN TODOS LOS PLATOS DE LA BASE DE DATOS
    const [stateDay] = useContext(DayContext) //SE SEPARAN LAS INSTANCIAS Y EL DÍA A QUE CORRESPONDE 

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
        desayuno = lunes.desayuno
        almuerzo = lunes.almuerzo
        cena = lunes.cena
    }  
    

        
        
        if(stateDay.desayunos ==='DESAYUNO'){

            desayuno = menues.find(m => m._id === state.cart)
            
            stateDay.desayunos = ''
            console.log(desayuno)
            console.log(almuerzo)
            console.log(cena)
            let datos2 = {
                user: userLogged,
            lunes:{
                "desayuno":desayuno,
                "almuerzo": almuerzo,
                "cena": cena
            },
            martes,
            miercoles,
            jueves,
            viernes,
            sabado,
            domingo
        }
        
      
        dispatch({
            type : ADD_DISHES_USER,
            dia : 'agregar',
            plato : datos2 

        })        
        
    }
    if(stateDay.almuerzos ==='ALMUERZO'){
        almuerzo = menues.find(m => m._id ===state.cart) 
        stateDay.almuerzos = ''
        let datos2 = {
            user: userLogged,
            lunes:{
                "desayuno":desayuno,
                "almuerzo": almuerzo,
                "cena": cena
            },
            martes,
            miercoles,
            jueves,
            viernes,
            sabado,
            domingo
        }
        
        
        dispatch({
            type : ADD_DISHES_USER,
            dia : 'agregar',
            plato : datos2 
        })
                
    }
    if(stateDay.cenas ==='CENA'){

        
        cena = menues.find(m => m._id ===state.cart)
        
        stateDay.cenas = ''
        let datos2 = {
            user: userLogged,
            lunes:{
                "desayuno":desayuno,
                "almuerzo": almuerzo,
                "cena": cena
            },
            martes,
            miercoles,
            jueves,
            viernes,
            sabado,
            domingo
        }
        
        
        dispatch({
            type : ADD_DISHES_USER,
            dia : 'agregar',
            plato : datos2 
            
        })        
        console.log(desayuno)
        console.log(almuerzo)
        console.log(cena)
    } 
    
    return(
        <div className='calendario'>
            {
                lunes?<GrillaMobil dia = 'LUNES' desayuno={lunes.desayuno} almuerzo={lunes.almuerzo} cena={lunes.cena}/>:
                <GrillaMobil dia = 'LUNES' desayuno={desayuno} almuerzo={almuerzo} cena={cena}/>
            }
        </div>
    )
}

export default Lunes