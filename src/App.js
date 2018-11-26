import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <p>This is really working!!!</p>
        <Person name="Sandeep" age="24" />
        <Person name="Nik" age="24">
          Hobbies: Cricket
        </Person>
        <Person name="Sam" age="24" />
      </div>
    );
  }
}

export default App;
