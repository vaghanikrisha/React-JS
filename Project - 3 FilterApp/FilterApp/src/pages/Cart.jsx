import React from 'react';
import './cart.css'; // Add a CSS file for styling

const Cart = ({ cartItems, updateQuantity, removeFromCart, setShowCart }) => {
  return (
    <div className="container-fluid">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="back-btn" onClick={() => setShowCart(false)}>Back to Products</button>
      </div>
      <table className="table cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td><img src={item.image} alt={item.name} className="cart-img" /></td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <input 
                  type="number" 
                  value={item.quantity} 
                  min="1"
                  onChange={(e) => updateQuantity(item.id, e.target.value)} 
                  className="quantity-input"
                />
              </td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button className="delete-btn" onClick={() => removeFromCart(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
