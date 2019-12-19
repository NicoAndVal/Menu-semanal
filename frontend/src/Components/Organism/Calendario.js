import React from 'react'
import Almuerzos from '../Moleculs/Almuerzos'
import Desayunos from '../Moleculs/Desayunos'
import Cenas from '../Moleculs/Cenas'

class Calendario extends React.Component{
    render(){
        return(
            <div className ='calendario'>
                <div className='calendario_instancia'>DIA</div>
                <div className='calendario_instancia'>DESAYUNO</div>
                <div className='calendario_instancia'>ALMUERZO</div>
                <div className='calendario_instancia'>CENA</div>
                <div className = 'calendario_dias lunes'>LUNES</div>
                <div className = 'calendario_dias martes'>MARTES</div>
                <div className = 'calendario_dias miercoles'>MIERCOLES</div>
                <div className = 'calendario_dias jueves'>JUEVES</div>
                <div className = 'calendario_dias viernes'>VIERNES</div>
                <div className = 'calendario_dias sabado'>SABADO</div>
                <div className = 'calendario_dias domingo'>DOMINGO</div>


                <Desayunos/>
                <Almuerzos/>
                <Cenas/>
            </div>
        )
    }
}

export default Calendario