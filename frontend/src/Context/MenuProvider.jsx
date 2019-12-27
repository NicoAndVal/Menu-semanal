import React from 'react'

import MenuContext from './MenuContext'

class MenuProvider extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            menues: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/platos')
        .then(res => res.json())
        .then(res => {
            this.setState({menues:res.data})
            
        })
    }

    render(){
        return(
            <MenuContext.Provider value={this.state}>
                {this.props.children}
            </MenuContext.Provider>
        )
    }
}

export default MenuProvider