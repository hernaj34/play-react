import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  display: 'inline-block',
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

class Fade extends Component {
  render() {
    return (
      <Transition in={this.props.in} timeout={duration}>
        {(state) => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            {this.props.children}
          </div>
        )}
      </Transition>
    );
  }
}

export default Fade;