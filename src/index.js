import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Counter extends React.Component {
  state = {
    counter: 0,
  };
  plus = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  startAgain = () => {
    this.setState({ counter: 0 });
  };
  minus = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  auto = () => {
    const intervalId = setInterval(() => {
      this.setState((counter) => {
        return {
          counter: this.state.counter + 1,
        };
      });
    }, 1000);
  };
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
        <button onClick={this.startAgain}>startAgain</button>
        <button onClick={this.auto}>Auto</button>
      </div>
    );
  }
}

const el = <Counter />;
ReactDOM.render(el, document.getElementById('root'));
