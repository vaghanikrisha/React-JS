import React from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
