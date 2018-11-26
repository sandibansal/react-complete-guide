import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Sandy', age: 24 },
      { name: 'Nik', age: 24 },
      { name: 'Sam', age: 24 }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'Nikhil', age: 24 },
        { name: 'Sam', age: 24 }
      ]
    });
  };

  nameChangedHandler = e => {
    this.setState({
      persons: [
        { name: 'Sandy', age: 24 },
        { name: e.target.value, age: 24 },
        { name: 'Sam', age: 24 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: 8,
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <p>This is really working!!!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Sandeep!')}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Sandeep!!!!')}
          changed={this.nameChangedHandler}
        >
          Hobbies: Cricket
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
