import React from 'react';
import Planificador from '../src/Components/Pages/Planificador';
import './styles/style.scss'
import './styles/reset.scss'
import MainMenu from '../src/Components/Template/MainMenu'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Menus from '../src/Components/Pages/Menus'
import AgregarMenu from '../src/Components/Pages/AgregarMenu'


function App() {
  return (
    <Router>
      <MainMenu/>
      <Switch>
        <Route path='/' exact component={Planificador}/>
        <Route path='/mostrarmenu' component = {Menus}/>
        <Route path ='/agregarmenu' component = {AgregarMenu}/>
      </Switch>

    </Router>
  );
}

export default App;
