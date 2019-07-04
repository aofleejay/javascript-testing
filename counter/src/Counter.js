import React, { Component } from 'react'

class Counter extends Component {
  state = { counter: 0 }

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 })
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <>
        <button id="decrement" onClick={this.decrement}>
          -
        </button>
        <button id="counter">{this.state.counter}</button>
        <button id="increment" onClick={this.increment}>
          +
        </button>
      </>
    )
  }
}

export default Counter
