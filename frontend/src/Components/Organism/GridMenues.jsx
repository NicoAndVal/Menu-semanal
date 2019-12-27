import React from 'react'
import CartMenues from '../Moleculs/CartMenues'
import withLoader from '../HOC/withLoader'




const GridMenus = ({ menues }) => {
    return (
        <div className='container'>
            <div className='row'>
                {console.log(menues)}
                {menues.map(menu => {
                    return (
                        <div className='col-4' key={menu._id}>
                            <CartMenues
                                id={menu._id}
                                nombre={menu.nombre}
                                elaboracion={menu.elaboracion}
                                time={menu.time}
                                porciones={menu.porciones}
                                instancia={menu.instancia}
                                imagen={menu.img}
                            />
                        </div>
                    )
                })}

            </div>

            
        </div>

    )

}

    




export default withLoader("menues", GridMenus) 