import { useEffect, useState } from "react";
import { getData } from "../api/getData";

export const useAsyncData = (url) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("pending");
        const data = await getData(url);
        setData(data);
        setStatus("success");
      } catch (error) {
        setStatus("failed");
        setData(null);
      }
    };
    fetchData();
  }, [url]);

  return { data, status };
};
