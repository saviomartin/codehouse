import { useEffect, useState } from "react";

// this hook is used to add a new instance to window.localStorage
export default function useLocalStorage(key, initialValue) {
  const prefixedKey = key;

  const [value, setValue] = useState();

  useEffect(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue);

    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
