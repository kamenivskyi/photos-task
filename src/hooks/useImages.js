import { useState } from "react";

export const useImages = () => {
  const [data, setData] = useState([]);

  return [data];
};
