import React, { Component } from 'react';
import './App.css';

import Rummy from '../Rummy/Rummy';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Rummy
        </header>
        <Rummy />
      </div>
    );
  }
}

export default App;
