import React,{useContext} from 'react'
import DayContext from '../../Context/Dishes/DayContext'
import PlatosPlanificador from './PlatosPlanificador'
import CleanPlanner from '../Atomic/CleanPlanner'



const Calendario = () => {
    const [stateDay] = useContext(DayContext) 


   
    console.log(stateDay.dia)

    return (
        <>

            <div className='planificador'>
                <div className='planificador-instancias'>DIA</div>
                <div className='planificador-instancias'>DESAYUNOS</div>
                <div className='planificador-instancias'>ALMUERZOS</div>
                <div className='planificador-instancias'>CENAS</div>
                <div className='planificador-dias lunes'>LUNES</div>
                <div className='planificador-dias martes'>MARTES</div>
                <div className='planificador-dias miercoles'>MIERCOLES</div>
                <div className='planificador-dias jueves'>JUEVES</div>
                <div className='planificador-dias viernes'>VIERNES</div>
                <div className='planificador-dias sabado'>SABADO</div>
                <div className='planificador-dias domingo'>DOMINGO</div>


                <PlatosPlanificador />

            </div>
            
                <CleanPlanner/>
            
        </>
        
    )

}

export default Calendario