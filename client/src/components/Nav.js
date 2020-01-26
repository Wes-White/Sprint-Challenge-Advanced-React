import React from "react";
import useOnField from "../hooks/useOnField";
import { Button } from "reactstrap";

const Nav = () => {
  const [onField, setOnField] = useOnField();

  const toggleonField = e => {
    e.preventDefault();
    setOnField(!onField);
  };

  return (
    <nav>
      <h2>Star Players</h2>
      <div className="nav">
        <div onClick={toggleonField} className="btn">
          {onField ? (
            <Button>Off the feild</Button>
          ) : (
            <Button>On the feild</Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
