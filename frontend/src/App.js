import React from 'react';
import AppRoute from './AppRoute';
import MenuProvider from './Context/MenuProvider';
import CartProvider from './Context/Cart/CartProvider'


function App() {
  return(
    <MenuProvider>
      <CartProvider>
        <AppRoute/>

      </CartProvider>
    </MenuProvider>
  )   
    
  
}


export default App;
