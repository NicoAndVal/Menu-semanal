import React,{useContext,useEffect,useState} from 'react'
import GrillaMobil from '../Atomic/GrillaMobil'
import DayContext from '../../Context/Dishes/DayContext'
import MenuContext from '../../Context/MenuContext'
import CartContext from '../../Context/Cart/CartContext'
import DishesUserContext from '../../Context/DishesUser/DishesUserContext'

let desayuno = ''
let almuerzo = ''
let cena = ''
let platos = ''
let lunes = ''
let martes = ''
let miercoles = ''
let jueves = ''
let viernes = ''
let sabado = ''

const Domingo = () =>{
    let [stateUser] = useContext(DishesUserContext)
    const [state] = useContext(CartContext)  
    const {menues} = useContext(MenuContext) 
    const [stateDay] = useContext(DayContext) 

    const userLogged = localStorage.getItem('token')
    
    let [platos, setPlatos] = useState()
    
    useEffect(() => {
        fetch(`http://localhost:5000/api/user_plate/${userLogged}`)
        .then(res => res.json())
        .then(res => {
            setPlatos(platos=res.domingo)
        })
        if(stateUser){
            //SE OBTIENEN LOS PLATOS DEL CONTEXTO
            lunes = stateUser.stateUser.lunes
            martes = stateUser.stateUser.martes
            miercoles = stateUser.stateUser.miercoles
            jueves = stateUser.stateUser.jueves
            viernes = stateUser.stateUser.viernes
            sabado = stateUser.stateUser.sabado
        }

    },[])
    
    
    if(stateDay.desayunos ==='DESAYUNO'){
        desayuno = menues.find(m => m._id === state.cart)
        stateDay.desayunos = ''
        let datos2 = {
            user: userLogged,
            domingo:{
                "desayuno":desayuno,
                "almuerzo": almuerzo,
                "cena": cena
            },
            lunes,
            martes,
            miercoles,
            jueves,
            viernes,
            sabado
        }
        
        fetch(`http://localhost:5000/api/user_plate/${userLogged}`,{
            method:'PUT',
            body: JSON.stringify(datos2),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res =>res.json())
        .then(res =>console.log(res))
        
        
        
        console.log('entro al desayuno ')
    }
    if(stateDay.almuerzos ==='ALMUERZO'){
        almuerzo = menues.find(m => m._id ===state.cart)
        stateDay.almuerzos = ''
        let datos2 = {
            user: userLogged,
            domingo:{
                "desayuno":desayuno,
                "almuerzo": almuerzo,
                "cena": cena
            },
            lunes,
            martes,
            miercoles,
            jueves,
            viernes,
            sabado
        }
        
        fetch(`http://localhost:5000/api/user_plate/${userLogged}`,{
            method:'PUT',
            body: JSON.stringify(datos2),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res =>res.json())
        .then(res =>console.log(res))
        
        console.log('entro al almuerzo')
    }
    if(stateDay.cenas ==='CENA'){
        cena = menues.find(m => m._id ===state.cart)
        stateDay.cenas = ''
        let datos2 = {
            user: userLogged,
            domingo:{
                "desayuno":desayuno,
                "almuerzo": almuerzo,
                "cena": cena
            },
            lunes,
            martes,
            miercoles,
            jueves,
            viernes,
            sabado
        }
        
        fetch(`http://localhost:5000/api/user_plate/${userLogged}`,{
            method:'PUT',
            body: JSON.stringify(datos2),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res =>res.json())
        .then(res =>console.log(res))
        
        console.log('entro al cena ')
    } 
    
    if(platos){
        desayuno = platos.desayuno
        almuerzo = platos.almuerzo
        cena = platos.cena
    }
    
    return(
        <div className='calendario'>
            {
                platos?<GrillaMobil dia = 'DOMINGO' desayuno={platos.desayuno} almuerzo={platos.almuerzo} cena={platos.cena}/>:
                <GrillaMobil dia = 'DOMINGO' desayuno={desayuno} almuerzo={almuerzo} cena = {cena}/>
            }
        </div>
    )
}

export default Domingo