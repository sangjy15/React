import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  state = {
    counter: 1
  };
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.myDiv.getBoundingClientRect());
  }
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    return (
      <div ref={(ref) => (this.myDiv = ref)}>
        <MyComponent value={this.state.counter} />
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default App;
