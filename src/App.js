import React, { Component } from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HelloWorld /> */}
        <Bomb />
      </div>
    );
  }
}

export default App;
