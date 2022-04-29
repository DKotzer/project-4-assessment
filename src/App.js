import React, { Component } from "react";
import "./App.css";
import CircleSelector from "./components/CircleSelector";
import Circles from "./components/Circles";

class App extends Component {
  state = {
    selected: 1,
  };
  handleCircleSelect = (e, i) => {
    if (this.state !== i) {
      this.setState({ selected: i });
    }
  };
  render() {
    return (
      <div className='App'>
        <header className='App-header'>UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            handleCircleSelect={this.handleCircleSelect}
            selected={this.state.selected}
          ></CircleSelector>
          <Circles selected={this.state.selected}></Circles>
          <div className='hidden'>Dylan was here</div>
        </main>
      </div>
    );
  }
}

export default App;
