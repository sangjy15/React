import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    value: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value === 10) return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      console.log('value가 바뀌었다!', this.props.value);
    }
  }
  render() {
    return (
      <div>
        <p>props: {this.props.value}</p>
        <p>state: {this.props.value}</p>
      </div>
    );
  }
}

export default MyComponent;
