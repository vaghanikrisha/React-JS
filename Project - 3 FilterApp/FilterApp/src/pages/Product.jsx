import React, { useState } from 'react';
import './product.css';

const Product = ({ menu, item }) => {
    const [itemMenu, setItemMenu] = useState(menu);
    const [products, setProducts] = useState(item);
  
    const FilterData = (cat) => {
      if (cat === "All") {
        setProducts(item);
      } else {
        const filtered = item.filter((product) => product.catogry === cat);
        setProducts(filtered);
      }
    };
  
    return (
      <div>
        <h1 className='mt-1'style={{color:"black" }}>Beauty Bliss</h1>
        <button className='btn btn-danger mt-3 mx-3' onClick={() => FilterData("All")}>All</button>
        {itemMenu.map((val, index) => (
          <button onClick={() => FilterData(val.catogry)} className='btn btn-light mt-3 mx-3' key={index}>{val.catogry}</button>
        ))}
        <br /><br />
        <div className='container'>
          <div className='row'>
            {products.map((p, index) => (
              <div key={index} className='col-lg-4'>
                <div className="card mt-5" style={{ width: '350px', height: "550px" }}>
                  <img className="card-img-top" src={p.image} alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title mt-1">Name: {p.name}</h5>
                    <p className="card-text mt-2">Price: {p.price}</p>
                    <button className='btn btn-danger w-100'>Buy</button>
                  </div>
                </div>
              </div>
            ))} 
          </div>
        </div>
      </div>
    );
  }

  export default Product;
  