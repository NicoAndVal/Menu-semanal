import React from 'react'
import GridMenues from '../Organism/GridMenues'

class Menus extends React.Component{

    constructor(props){
        super(props)
        this.state = {menues:[]}
    }
    
    render(){
        return(            
            <div className='container'>
                <h1>MENUS CARGADOS</h1>
                <GridMenues  menues ={this.state.menues}/>
                
                {/* <MostrarMenu/> */}
            </div>
        )
    }
}

export default Menus