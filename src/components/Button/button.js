import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
  }
    
  render() {
    return <button>{this.state.name}</button>;
  }
}

export default Button;
