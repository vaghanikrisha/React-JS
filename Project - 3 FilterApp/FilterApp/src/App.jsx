import React, { useState } from 'react';
import Product from './pages/Product';
import Cart from './pages/Cart';
import './App.css';
import { menu, item } from './pages/Data'; 

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false); 

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };


  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      {/* Toggle between Product and Cart page */}
      {!showCart ? (
        <Product 
          addToCart={addToCart} 
          setShowCart={setShowCart} 
          menu={menu}     
          item={item}       
        />  
      ) : (
        <Cart 
          cartItems={cartItems} 
          setShowCart={setShowCart} 
          removeFromCart={removeFromCart} 
        />
      )}
    </div>
  );
};

export default App;
