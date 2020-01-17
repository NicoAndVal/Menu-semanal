import React from 'react'


class Calendario extends React.Component{
    render(){
        return(
            <div className ='calendario'>
                
                <div className='calendario_instancia'>DIA</div>
                <div className = 'calendario_dias lunes'>LUNES</div>
                <div className='calendario_instancia desayuno'> <span className='calendario_comida'>DESAYUNO </span> </div>
                <div className='calendario_instancia almuerzo'> <span className='calendario_comida'>ALMUERZO </span> </div>
                <div className='calendario_instancia cena'> <span className='calendario_comida'>CENA </span> </div>

            </div>
        )
    }
}

export default Calendario