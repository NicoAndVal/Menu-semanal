import React,{useContext} from 'react'
import GrillaMobil from '../Atomic/GrillaMobil'
import DayContext from '../../Context/Dishes/DayContext'
import MenuContext from '../../Context/MenuContext'
import CartContext from '../../Context/Cart/CartContext'

let desayuno = ''
let almuerzo = ''
let cena = ''

const Lunes = () =>{

    const [state] = useContext(CartContext)
    const {menues} = useContext(MenuContext)
    const [stateDay] = useContext(DayContext)


    if(stateDay.desayunos ==='DESAYUNO'){
        desayuno = menues.find(m => m._id ===state.cart)
        stateDay.desayunos = ''
        console.log('entro al desayuno ')
    }
    if(stateDay.almuerzos ==='ALMUERZO'){
        almuerzo = menues.find(m => m._id ===state.cart)
        stateDay.almuerzos = ''
        console.log('entro al almuerzo')
    }
    if(stateDay.cenas ==='CENA'){
        cena = menues.find(m => m._id ===state.cart)
        stateDay.cenas = ''
        console.log('entro al cena ')
    }

    console.log(state.cart)
  
    return(
        <div className='calendario'>
            {
               desayuno?<GrillaMobil dia = 'LUNES' desayuno ={desayuno} almuerzo={almuerzo} cena = {cena}/>:
               <GrillaMobil dia = 'LUNES' desayuno={desayuno} almuerzo={almuerzo} cena = {cena}/>
            }
    
        
        </div>
    )
}

export default Lunes