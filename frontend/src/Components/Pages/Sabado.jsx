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
let domigno = ''

const Sabado = () =>{
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
            setPlatos(platos=res.sabado)
        })
        if(stateUser){
            //SE OBTIENEN LOS PLATOS DEL CONTEXTO
            lunes = stateUser.stateUser.lunes
            martes = stateUser.stateUser.martes
            miercoles = stateUser.stateUser.miercoles
            jueves = stateUser.stateUser.jueves
            viernes = stateUser.stateUser.viernes
            domigno = stateUser.stateUser.domigno
        }

    },[])
    
    
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
            domigno
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
            domigno
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
            domigno
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
                platos?<GrillaMobil dia = 'SABADO' desayuno={platos.desayuno} almuerzo={platos.almuerzo} cena={platos.cena}/>:
                <GrillaMobil dia = 'SABADO' desayuno={desayuno} almuerzo={almuerzo} cena = {cena}/>
            }
        </div>
    )
}

export default Sabado