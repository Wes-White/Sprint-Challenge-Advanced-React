import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = trueOrFalse => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", trueOrFalse); //this passes the Local storage the key of 'dark-mode' and the itialValue of true or false comming from the navBar
  useEffect(() => {
    // if dark-mode is already a class remove it, if it is not a class add it
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode]; //returns darkMode (as a value of either true or false) and the ability to change it
};

export default useDarkMode;
