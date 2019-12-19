import React from 'react'


class AgregarMenu extends React.Component{
    
    constructor(props){
        super(props)
        this.enviarMenu = this.enviarMenu.bind(this)
    }

    enviarMenu(e){
        e.preventDefault()
        console.log(new FormData(e.target))
        fetch("http://localhost:5000/api/plato",{
            method: 'POST',
            body: new FormData(e.target)
        })

        // e.target.nombre.value =''
        // e.target.instancia.value=''
        // e.targe.elaboracion.value=''
        // e.target.porciones.value = ''
        // e.target.imagen.value = ''
        // e.target.time.value = ''
    }



    render(){
        return(
            <form className='formulario-comidas' onSubmit={this.enviarMenu} encType="multipart/form-data" >
                <h1 className='formulario-comidas_titulo'>Agrega tu comida</h1>
                
                    <input className='formulario-comidas_input' type='text' name='nombre' placeholder='Nombre Receta'/>
        
                  <textarea className='formulario-comidas_input' name='elaboracion' rows='5' cols='70' placeholder='Elaboracion'></textarea>
                
                <select className='formulario-comidas_input' name='porciones'>
                    <option value='1 persona'>1 Persona</option>
                    <option value='2 personas'>2 Personas</option>
                    <option value='3 personas'>3 Personas</option>
                    <option value='4 personas'>4 Personas</option>
                    <option value='5 personas'>5 Personas</option>
                </select>

                <select className='formulario-comidas_input' name='time'>
                    <option value='15 minutos'>15 MINUTOS</option>
                    <option value='30 minutos'>30 MINUTOS</option>
                    <option value='45 minutos'>45 MINUTOS</option>
                    <option value='60 minutos'>60 MINUTOS</option>
                  
                </select>

                <select className='formulario-comidas_input' name='instancia'>
                    <option value='Desayuno'>Desayuno</option>
                    <option value='Almuerzo'>Almuerzo</option>
                    <option value='Cena'>Cena</option>
                  
                </select>
                    <input type='file' name='imagen' placeholder='Nombre Receta' className='formulario-comidas_input'/>
                <button className='formulario-comidas_button'>Agregar Receta</button>

            </form>
        )
    }
}

export default AgregarMenu