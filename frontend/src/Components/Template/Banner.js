import React from 'react'
import Fruta from './frutasyverduras.jpg'


const Banner = () =>{
    return(
        <div className='title'>
                <h1 className='title_titulo'>COMIDAS SEMANALES</h1>
                <img src={Fruta} alt='Frutas y verduras' className='title_imagen'/>
        </div>
    )
}

export default Banner