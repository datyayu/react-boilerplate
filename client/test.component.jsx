import React, { PropTypes } from 'react';


const TestComponent = ({ counter }) => (
  <div>
    <h2>Hi! I'm a component, try editing me!</h2>
    <h4>(Check the client folder)</h4>
    <p>Current value: {counter}</p>
  </div>
);

TestComponent.propTypes = {
  counter: PropTypes.number.isRequired,
};


export default TestComponent;
