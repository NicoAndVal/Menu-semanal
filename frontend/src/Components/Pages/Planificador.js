import React from 'react'
import Calendario from '../Organism/Calendario';
import Fruta from './frutasyverduras.jpg'

class Planificador extends React.Component{
    render(){
        return (
            <div>
                <div className='title'>
                <h1 className='title_titulo'>COMIDAS SEMANALES</h1>
                <img src={Fruta} alt='Frutas y verduras' className='title_imagen'/>
                </div>
                <Calendario/>
            </div>
            
        )
    }
}


export default Planificador
