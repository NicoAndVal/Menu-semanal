import React from 'react';
import AppRoute from './AppRoute';
import MenuProvider from './Context/MenuProvider';
import CartProvider from './Context/Cart/CartProvider'
import DayProvider from './Context/Dishes/DayProvider'


function App() {

  
  return(
    <MenuProvider>
      <CartProvider>
        <DayProvider>

          <AppRoute/>
        </DayProvider>

      </CartProvider>
    </MenuProvider>
  )   
    
  
}


export default App;
