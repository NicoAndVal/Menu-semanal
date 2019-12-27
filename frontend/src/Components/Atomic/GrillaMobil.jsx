import React from 'react'

const GrillaMobil = ({dia}) =>(
    <>                
    <div className='calendario_instancia'>DÍA</div>
    <div className = 'calendario_dias lunes'>{dia}</div>
    <div className='calendario_instancia desayuno'> <span className='calendario_comida'>DESAYUNO </span> </div>
    <div className='calendario_instancia almuerzo'> <span className='calendario_comida'>ALMUERZO </span> </div>
    <div className='calendario_instancia cena'> <span className='calendario_comida'>CENA </span> </div>   
    </>
)

export default GrillaMobil