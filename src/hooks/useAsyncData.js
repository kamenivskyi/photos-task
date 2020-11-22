import { useEffect, useState } from "react";
import { getData } from "../api/getData";
import { fetchStatus } from "../utils/config";

export const useAsyncData = (url) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(fetchStatus.initial);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus(fetchStatus.pending);
        const data = await getData(url);
        setData(data);
        setStatus(fetchStatus.success);
      } catch (error) {
        setStatus(fetchStatus.failed);
        setData(null);
      }
    };
    fetchData();
  }, [url]);

  return { data, status };
};
