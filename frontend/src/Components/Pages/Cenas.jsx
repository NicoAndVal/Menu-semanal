import React from 'react'
import GridMenues from '../Organism/GridMenues'
import MenuContext from '../../Context/MenuContext'
import { useContext } from 'react'


const Cenas = () => {
    const { menues } = useContext(MenuContext)

    const Cenas = menues.filter(d => d.instancia ==='Cena')
    
    
    return(
        <>
        <h1 className='title-menues'>Cenas</h1>
        <GridMenues menues = {Cenas}  />
        </>
    )
}


export default Cenas