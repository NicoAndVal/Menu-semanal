import React, { useContext } from 'react'
import MenuContext from '../../Context/MenuContext'


const Menu = ({ match }) => {

    const { menues } = useContext(MenuContext)
    const menu = menues.find(m => m._id === match.params.id)
    console.log(menu)

    return (
        <div className='container cardMenu'>
            {menu ?
                <div className ='cardMenu_container'>
                    <div className='card-body' >
                        <img className="card-img-top cardMenu_imagen" src={require(`../../../public/uploads/${menu.img}`)} alt={menu.nombre} />
                        <div className  = 'container text-center'>
                            <h1 className = 'card-title'>{menu.nombre}</h1>
                            <h6 className="card-title">{menu.elaboracion}</h6>
                            <h6 className="card-title">{menu.time} {menu.porciones}</h6>
                        </div>


                    </div>
                </div> :
                <h1>NO SE ENCONTRO EL PLATO REQUERIDO</h1>}
        </div>
    )
}

export default Menu
