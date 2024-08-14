import React, { Component } from 'react';
import './Counter.css'; // Import the enhanced CSS file

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      // Only decrement if count is greater than 0
      count: prevState.count > 0 ? prevState.count - 1 : 0,
    }));
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">Counter App</h1>
        <h2 className="count">{this.state.count}</h2>
        <div className="buttons">
          <button className="button" onClick={this.increment}>
            Increment
          </button>
          <button className="button" onClick={this.decrement}>
            Decrement
          </button>
          <button className="button" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
