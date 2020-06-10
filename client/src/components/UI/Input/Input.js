import React from 'react';

const Input = (props) => (
  <input
    className={props.class}
    value={props.value}
    onChange={props.changed}
    placeholder={props.placeholder}
    type={props.type}
    name={props.name}
  />
)

export default Input;