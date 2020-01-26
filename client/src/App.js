import React from "react";
import axios from "axios";

import "./App.css";
import PlayersList from "./components/PlayersList";
import Nav from "./components/Nav";

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
        <h1 className="title">Women's World Cup</h1>
        <Nav />
        <PlayersList data={this.state.players} />
      </div>
    );
  }
}

export default App;
