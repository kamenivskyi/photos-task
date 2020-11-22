import { useState, useEffect } from "react";

import { storageTypes } from "../utils/config";

export const useStorage = ({
  key,
  initialValue,
  storageType = storageTypes.local,
}) => {
  const [data, setData] = useState(() => {
    try {
      const item = window[storageType].getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log("useLocalStorage error: ", error);
      return initialValue;
    }
  });

  useEffect(() => {
    const item = window[storageType].getItem(key);

    if (item) {
      setData(JSON.parse(item));
    }
  }, []);

  useEffect(() => {
    window[storageType].setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData];
};
