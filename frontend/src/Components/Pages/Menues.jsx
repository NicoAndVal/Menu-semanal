import React from 'react'
import GridMenues from '../Organism/GridMenues'
import MenuContext from '../../Context/MenuContext'
import { useContext } from 'react'


const Menues = () => {
    let [menuesContext] = useContext(MenuContext)
    let menues = ''
    let desayunos ='',
        almuerzos ='',
        cenas =''

    if(menuesContext){
         menues = menuesContext.statePlate.data
         desayunos = menues.filter(d => d.instancia ==='Desayuno')
         almuerzos = menues.filter(d => d.instancia ==='Almuerzo')
         cenas = menues.filter(d => d.instancia ==='Cena')
    }
    
    console.log(menues)
    
    
    return(
        <>
        <h1 className='title-menues'>DESAYUNOS</h1>
        <GridMenues menues = {desayunos}  />
        <h1  className='title-menues' >ALMUERZOS</h1>
        <GridMenues menues = {almuerzos}  />
        <h1  className='title-menues'>CENAS</h1>
        <GridMenues menues = {cenas}  />


        </>
        
    )
}


export default Menues