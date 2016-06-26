/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import TestComponent from './test.component';


class App extends Component {
  // Initial state.
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  // Auto-increment the counter each second.
  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }

  // Render the component.
  render() {
    return (
      <div>
        <h1> Hello world </h1>
        <TestComponent counter={this.state.counter} />
      </div>
    );
  }
}

export default App;
