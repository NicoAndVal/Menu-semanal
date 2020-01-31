import React, { useReducer } from 'react'
import DayContext from './DayContext'
import {DESAYUNO_LUNES, ALMUEZO_LUNES, CENA_LUNES } from './actions'

const DayProvider = ({children}) =>{
    
    const initialState = {
            desayunos:'',
            almuerzos:'',
            cenas:'',
            dia : ''
       
    }

    const dayReducer = (state,{type,instancia,dia}) =>{
        console.log(instancia)
        if(type===DESAYUNO_LUNES ){
            return{
                desayunos : instancia,
                dia: dia
                
            }
        }
        if(type ===ALMUEZO_LUNES ){
            console.log(instancia)
            return{
                almuerzos :instancia,
                dia: dia
            }
        }
        if(type ===CENA_LUNES ){
            console.log(instancia)
            return{
                cenas :instancia,
                dia: dia
                
            }
        }
        
        return state
    }

     const [state, dispatch] = useReducer(dayReducer, initialState)

     return (
         <DayContext.Provider value ={[state,dispatch]}>
             {children}
         </DayContext.Provider>
     )

}

export default DayProvider