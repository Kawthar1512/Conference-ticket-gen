import { useState } from "react";

const getFromStorage = (key) => {
  const v = window.localStorage.getItem(key);
  return v ? (JSON.parse(v) ?? undefined) : undefined;
};

const setValueToStorage = (key, value) => {
  if (value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    window.localStorage.removeItem(key);
  }
};

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(getFromStorage(key) ?? defaultValue);

  const setValue = (value) => {
    setState(value);
    setValueToStorage(key, value);
  };

  return [state, setValue];
};
