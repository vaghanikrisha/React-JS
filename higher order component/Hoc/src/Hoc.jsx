import React, { useState } from 'react';

const Hoc = (WrappedComponent, incrementValue = 1) => {

    return () => {
        const [no, setNo] = useState(0);

        const Increment = () => {
            setNo(no + incrementValue);
        };
        const Decrement = () => {
            setNo(no - incrementValue);
        };

        return (
            <div style={{
                margin: '20px',
                padding: '20px',
                border: '2px solid #000',
                borderRadius: '10px',
                backgroundColor: '#f7f7f7',
                boxShadow: '0px 0px 15px rgba(0,0,0,0.2)',
            }}>
                <WrappedComponent 
                    no={no} 
                    Increment={Increment} 
                    Decrement={Decrement} 
                />
            </div>
        );
    };
};

export default Hoc;
