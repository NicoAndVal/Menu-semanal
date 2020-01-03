import React from 'react'
import GridMenues from '../Organism/GridMenues'
import MenuContext from '../../Context/MenuContext'
import { useContext } from 'react'


const Menues =() =>{
    const {menues} = useContext(MenuContext)
    
    
    

    return(
        <GridMenues menues = {menues}  />
    )
}


export default Menues