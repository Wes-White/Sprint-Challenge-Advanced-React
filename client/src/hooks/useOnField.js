import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useOnField = trueOrFalse => {
  const [onField, setOnField] = useLocalStorage("on-field", trueOrFalse); //this passes the Local storage the key of 'on-field' and the itialValue of true or false comming from the navBar
  useEffect(() => {
    // if on-field is already a class remove it, if it is not a class add it
    if (onField) {
      document.body.classList.add("on-field");
    } else {
      document.body.classList.remove("on-field");
    }
  }, [onField]);

  return [onField, setOnField]; //returns onField (as a value of either true or false) and the ability to change it
};

export default useOnField;
