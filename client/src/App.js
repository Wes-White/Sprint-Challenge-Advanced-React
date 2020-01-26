import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import PlayersList from "./components/PlayersList";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        const data = res.data;
        setPlayers(data);
      })
      .catch(err => console.log("error", "Unable to find the data."));
  }, []);
  console.log(players);
  return (
    <div className="App">
      <h1>Women's World Cup</h1>
      <PlayersList data={players} />
    </div>
  );
}

export default App;
