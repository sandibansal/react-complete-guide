import React from 'react';

const Person = props => {
  return (
    <div>
      <p>
        I'm {props.name}, and i am {props.age} Years old
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
