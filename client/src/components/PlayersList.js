import React from "react";

const PlayersList = props => {
  return (
    <div>
      {props.data.map(player => {
        return (
          <>
            <h2>{player.name}</h2>
            <p>{player.country}</p>
            <p>{player.searches}</p>
          </>
        );
      })}
    </div>
  );
};

export default PlayersList;
