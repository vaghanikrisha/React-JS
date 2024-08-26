import React, { useState } from 'react';
import './product.css';

const Product = ({ menu, item, addToCart, setShowCart }) => {
  const [products, setProducts] = useState(item);

  // Filter products by category
  const FilterData = (cat) => {
    if (cat === "All") {
      setProducts(item);
    } else {
      const filtered = item.filter((product) => product.catogry === cat);
      setProducts(filtered);
    }
  };

  // Handle adding item to cart and showing alert message
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to the cart
    alert(`${product.name} has been added to your cart!`); // Show alert
  };

  return (
    <div>
      <header className="full-header">
        <h1 className="header-title">Beauty Bliss</h1>
        <div className="header-buttons">
          <button className="header-btn home-btn" onClick={() => setShowCart(false)}>Home</button>
          <button className="header-btn cart-btn" onClick={() => setShowCart(true)}>Cart</button>
        </div>
      </header>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button className='btn btn-danger mt-3 mx-3' onClick={() => FilterData("All")}>All</button>
        {menu.map((val, index) => (
          <button 
            key={index} 
            onClick={() => FilterData(val.catogry)} 
            className='btn btn-light mt-3 mx-3'>
            {val.catogry}
          </button>
        ))}
      </div>

      {/* Products Display */}
      <div className='container-fluid'>
        <div className='row'>
          {products.map((p, index) => (
            <div key={index} className='col-lg-4'>
              <div className="card mt-5" style={{ width: '300px', height: "520px" }}>
                <img className="card-img-top" src={p.image} alt="Product" />
                <div className="card-body">
                  <h5 className="card-title mt-1">Name: {p.name}</h5>
                  <p className="card-text mt-2">Price: {p.price}</p>
                  <button className='btn btn-danger w-50'>Explore</button>
                  <button 
                    className='btn btn-danger w-50' 
                    onClick={() => handleAddToCart(p)}> {/* Call the handler */}
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
