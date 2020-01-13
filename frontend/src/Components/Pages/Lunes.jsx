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
let martes = ''
let miercoles = ''
let jueves = ''
let viernes = ''
let sabado = ''
let domigno = ''

const Lunes = () =>{
    let [stateUser] = useContext(DishesUserContext)
    const [state] = useContext(CartContext)  //AQUI SE GUARDA EL VALOR DEL PLATO A AGREGAR EN EL MENÚ (SE DEBE ACCEDER AL .CART)
    const {menues} = useContext(MenuContext) //ESTAN TODOS LOS PLATOS DE LA BASE DE DATOS
    const [stateDay] = useContext(DayContext) //SE SEPARAN LAS INSTANCIAS Y EL DÍA A QUE CORRESPONDE 

    const userLogged = localStorage.getItem('token')

    if(stateUser){
    }
    
    let [platos, setPlatos] = useState()
    
    useEffect(() => {
        fetch(`http://localhost:5000/api/user_plate/${userLogged}`)
        .then(res => res.json())
        .then(res => {
            setPlatos(platos=res.lunes)
        })
        if(stateUser){
            //SE OBTIENEN LOS PLATOS DEL CONTEXTO
            console.log(stateUser.stateUser.martes)
            martes = stateUser.stateUser.martes
            miercoles = stateUser.stateUser.miercoles
            jueves = stateUser.stateUser.jueves
            viernes = stateUser.stateUser.vienres
            sabado = stateUser.stateUser.sabado
            domigno = stateUser.stateUser.domigno
        }

    },[])
    
    
    if(stateDay.desayunos ==='DESAYUNO'){
        desayuno = menues.find(m => m._id === state.cart)
        stateDay.desayunos = ''
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
                platos?<GrillaMobil dia = 'LUNES' desayuno={platos.desayuno} almuerzo={platos.almuerzo} cena={platos.cena}/>:
                <GrillaMobil dia = 'LUNES' desayuno={desayuno} almuerzo={almuerzo} cena = {cena}/>
            }
        </div>
    )
}

export default Lunes