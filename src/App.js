import React, { Component } from 'react';
// import HelloWorld from './state-drills/HelloWorld';
// import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HelloWorld /> */}
        <RouletteGun bulletInChamber={7} />
      </div>
    );
  }
}

export default App;
