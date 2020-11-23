import { API_BASE } from "../utils/config";

export const getData = async (url) => {
  const fullUrl = API_BASE + url;

  const res = await fetch(fullUrl);

  if (!res.ok) {
    throw new Error(`Could not fetch the ${fullUrl}, received: ${res.status}`);
  }
  return await res.json();
};
