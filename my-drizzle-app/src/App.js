import ReadSum from "./ReadSum";
import SetSum from "./setSum";
import React, { Component } from "react";
//import logo from "./logo.svg";

import "./App.css";
class App extends Component {
  state = { loading: true, drizzleState: null };
  componentDidMount() {
    const { drizzle } = this.props;

    this.unsubscribe = drizzle.store.subscribe(() => {
      const drizzleState = drizzle.store.getState();

      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }
  compomentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (this.state.loading) return "Loading Drizzle...";
    return (
      <div className="App">
        <ReadSum
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <SetSum
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
      </div>
    );
  }
}

export default App;
