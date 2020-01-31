import React from 'react'
import GridMenues from '../Organism/GridMenues'
import MenuContext from '../../Context/MenuContext'
import { useContext } from 'react'


const Desayunos = () => {
    const { menues } = useContext(MenuContext)

    const desayunos = menues.filter(d => d.instancia ==='Desayuno')
    
    
    return(
        <>
        <h1 className='title-menues'>DESAYUNOS</h1>
        <GridMenues menues = {desayunos}  />
        </>
    )
}


export default Desayunos