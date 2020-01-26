import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  //the key is what local storage will use to store the value that is comming from useDarkMode (in this case it is dark-mode) and the initialValue is what the value currently is we have it set to false initally in the NavBar

  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key); // Gets the item from storage in our caes darkmode.

    console.log(`checking local storage`);
    return item ? JSON.parse(item) : initialValue; //this checks if the item exists if it doesn't is says to proceed with the inital value
  });
  const setValue = updatedValue => {
    setStoredValue(updatedValue);

    window.localStorage.setItem(key, JSON.stringify(updatedValue)); //this sets the value of the local storage Item to either true or false depending on updated value
    console.log(`local Storage Updated`);
  };

  return [storedValue, setValue]; //we then return the stored value and the ability to set the value
};

export default useLocalStorage;
