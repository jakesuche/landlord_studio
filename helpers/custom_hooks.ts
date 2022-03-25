import React, { useState } from "react";

export const useLocalStorage = (
  key: string,
  defaultValue: any = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) => {

  const [state, setState] = useState(() => {
    const valueInLocalStorage = typeof window !== "undefined" && window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return defaultValue;
  });
  React.useEffect(() => {
    if(typeof window !== 'undefined') {
      window.localStorage.setItem(key, serialize(state));
    }
  }, [key, state]);

  return [state, setState];
};
