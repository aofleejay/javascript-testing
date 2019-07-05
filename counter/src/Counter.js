import React, { Component } from 'react'
import Button from './Button'

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
        <Button id="decrement" onClick={this.decrement}>
          -
        </Button>
        <span id="counter">{this.state.counter}</span>
        <Button id="increment" onClick={this.increment}>
          +
        </Button>
      </>
    )
  }
}

export default Counter
