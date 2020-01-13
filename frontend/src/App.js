import React from 'react';
import AppRoute from './AppRoute';
import MenuProvider from './Context/MenuProvider';
import CartProvider from './Context/Cart/CartProvider'
import DayProvider from './Context/Dishes/DayProvider'
import DishesUserProvider from './Context/DishesUser/DishesUserProvider'

function App() {

  
  return(
    <DishesUserProvider>
      <MenuProvider>
        <CartProvider>
          <DayProvider>
            <AppRoute />
          </DayProvider>
        </CartProvider>
      </MenuProvider>
    </DishesUserProvider>
  )

  
}


export default App;
