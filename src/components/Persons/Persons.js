import React from 'react';
import Person from './Person/Person';

const Persons = props =>
  props.persons.map((person, index) => (
    <Person
      key={person.id}
      name={person.name}
      age={person.age}
      click={() => props.clicked(index)}
      changed={e => props.changed(e, person.id)}
    />
  ));

export default Persons;
