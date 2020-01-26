import React from "react";
import useOnField from "../hooks/useOnField";

const Nav = () => {
  const [onField, setOnField] = useOnField();

  const toggleonField = e => {
    e.preventDefault();
    setOnField(!onField);
  };

  return (
    <nav>
      <h1>Star Players</h1>
      <div className="nav">
        <div onClick={toggleonField}>
          {onField ? (
            <button className="btn">Off the feild</button>
          ) : (
            <button className="btn">On the feild</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
