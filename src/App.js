import React, { Component } from 'react';
import Radium from 'radium';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Sandy', age: 24 },
      { id: '2', name: 'Nik', age: 24 },
      { id: '3', name: 'Sam', age: 24 }
    ],
    showPersons: false
  };

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(
      person => person.id === id
    );
    // Object.assign({}, this.state.person[personIndex]) --- Alternative way
    const person = { ...this.state.persons[personIndex] };
    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]; // this.state.persons.slice() --- Alternative way
    persons.splice(personIndex, 1);
    this.setState({
      persons
    });
  };

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: 8,
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              changed={e => this.nameChangedHandler(e, person.id)}
            />
          ))}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    // Setting classes dynamically
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <p className={classes.join(' ')}> This is really working!!!</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
