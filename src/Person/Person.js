import React from 'react';
import Radium from 'radium';
import './Person.css';

const Person = props => {
  const style = {
    '@media (min-width: 500px)': {
      width: 450
    }
  };

  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I'm {props.name}, and i am {props.age} Years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(Person);
