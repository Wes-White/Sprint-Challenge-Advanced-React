import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import PlayersList from "./components/PlayersList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => this.setState({ players: res.data }))
      .catch(err => console.log("error", "Unable to find the data."));
  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup</h1>
        <PlayersList data={this.state.players} />
      </div>
    );
  }
}

export default App;
