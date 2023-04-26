import React, { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
  }

  incrementCounter = () => {
    const { counter } = this.state;

    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }))

    this.setState({
      counter: counter + 1,
    })

    // 2 jeitos de fazer.
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>Contador</h1>
        <b>{counter}</b>
        <br></br>
        <button
        onClick={ this.incrementCounter }
        >Acrescentar 1</button>
      </div>
    );
  }
}

export default App;