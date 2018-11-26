import React from 'react';

const Person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name}, and i am {props.age} Years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
