import { useCallback, useEffect, useState } from "react";
import { getData } from "../api/getData";
import { fetchStatus } from "../utils/config";

export const useAsyncData = (url) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(fetchStatus.initial);

  const fetchData = useCallback(async () => {
    try {
      setStatus(fetchStatus.pending);
      setData(null);

      const data = await getData(url);

      setData(data);
      setStatus(fetchStatus.success);
    } catch (error) {
      setStatus(fetchStatus.failed);
      setData(null);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return { data, status };
};
