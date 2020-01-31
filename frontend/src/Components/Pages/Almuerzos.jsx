import React from 'react'
import GridMenues from '../Organism/GridMenues'
import MenuContext from '../../Context/MenuContext'
import { useContext } from 'react'


const Almuerzos = () => {
    const { menues } = useContext(MenuContext)

    const almuerzos = menues.filter(d => d.instancia ==='Almuerzo')
    console.log(almuerzos)
    
    
    return(
        <>
        <h1 className='title-menues'>Almuerzos</h1>
        <GridMenues menues = {almuerzos}  />
        </>
    )
}


export default Almuerzos