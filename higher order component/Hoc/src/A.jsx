import React from 'react';
import Hoc from './Hoc';

const A = ({ no, Increment, Decrement }) => {
    return (
        <div align="center" style={{ backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '10px' }}>
            <h2>A Component</h2>
            <h3>Count: {no}</h3>
            <button 
                onClick={Increment} 
                style={{
                    margin: '5px', 
                    padding: '10px 20px', 
                    fontSize: '16px', 
                    cursor: 'pointer',
                    borderRadius: '5px',
                    backgroundColor: '#42a5f5',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.2s',
                }}
                onMouseOver={e => e.target.style.transform = 'scale(1.1)'}
                onMouseOut={e => e.target.style.transform = 'scale(1)'}
            >
                +
            </button>
            <button 
                onClick={Decrement} 
                style={{
                    margin: '5px', 
                    padding: '10px 20px', 
                    fontSize: '16px', 
                    cursor: 'pointer',
                    borderRadius: '5px',
                    backgroundColor: '#ef5350',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.2s',
                }}
                onMouseOver={e => e.target.style.transform = 'scale(1.1)'}
                onMouseOut={e => e.target.style.transform = 'scale(1)'}
            >
                -
            </button>
        </div>
    );
};

export default Hoc(A,2); // Increment by 2 for Component A
