import React from 'react';

interface CounterProps {
  initialValue: number;
}
interface CounterState {
  value: number;
}
class Counter extends React.Component<CounterProps> {
  state: CounterState;

  constructor(props: CounterProps) {
    super(props);
    this.state = {
      value: props.initialValue,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ value: this.state.value + 1 });
  }

  decrement() {
    this.setState({ value: this.state.value - 1 });
  }

  render() {
    return React.createElement(
      'div',
      { id: 'counter' },
      React.createElement('button', { onClick: this.decrement }, '-'),
      React.createElement('span', null, `${this.state.value}`),
      React.createElement('button', { onClick: this.increment }, '+')
    );
  }
}

export default Counter;
