import React from 'react'

const withLoader = (propsValue,WrappedComponent) =>{
    return class WithLoader extends React.Component{
        render() {
            return this.props[propsValue].length===0 ?<h1>CARGANDO...</h1>:<WrappedComponent {...this.props}/>
        }
    }
}

export default withLoader