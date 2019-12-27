import React from 'react'
import Calendario from '../Organism/Calendario';
import Banner from '../Template/Banner';

class Planificador extends React.Component{
    render(){
        return (
            <div className ='container'>
                <Banner/>
                <Calendario/>
            </div>
            
        )
    }
}


export default Planificador
