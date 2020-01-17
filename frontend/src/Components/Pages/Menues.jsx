import React from 'react'
import GridMenues from '../Organism/GridMenues'
import MenuContext from '../../Context/MenuContext'
import { useContext } from 'react'


const Menues = () => {
    const { menues } = useContext(MenuContext)

    const desayunos = menues.filter(d => d.instancia ==='Desayuno')
    const almuerzos = menues.filter(d => d.instancia ==='Almuerzo')
    const cenas = menues.filter(d => d.instancia ==='Cena')
    
    return(
        <>
        <h1>DESAYUNOS</h1>
        <GridMenues menues = {desayunos}  />
        <h1>ALMUERZOS</h1>
        <GridMenues menues = {almuerzos}  />
        <h1>CENAS</h1>
        <GridMenues menues = {cenas}  />


        </>
    )
}


export default Menues