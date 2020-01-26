import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const Nav = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleDarkMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav>
      <h1>Star Players</h1>
      <div className="nav">
        <div onClick={toggleDarkMode}>
          {darkMode ? (
            <button className="btn">Come this way to the light</button>
          ) : (
            <button className="btn">Take me to the Dark Side</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
