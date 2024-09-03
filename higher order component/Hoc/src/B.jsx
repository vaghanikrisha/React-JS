import React from 'react';
import Hoc from './Hoc';

const B = ({ no, Increment, Decrement }) => {
    return (
        <div align="center" style={{ backgroundColor: '#ffebee', padding: '20px', borderRadius: '10px' }}>
            <h2>B Component</h2>
            <h3>Count: {no}</h3>
            <button 
                onClick={Increment} 
                style={{
                    margin: '5px', 
                    padding: '15px 30px', 
                    fontSize: '18px', 
                    cursor: 'pointer',
                    borderRadius: '5px',
                    backgroundColor: '#d32f2f',
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
                    padding: '15px 30px', 
                    fontSize: '18px', 
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

export default Hoc(B); // Increment and Decrement by 5 for Component B
