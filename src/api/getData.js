const API_BASE = "https://picsum.photos/";

export const getData = async (url) => {
  const fullUrl = API_BASE + url;

  const res = await fetch(fullUrl);

  if (!res.ok) {
    throw new Error(`Could not fetch the ${fullUrl}, received: ${res.status}`);
  }
  return await res.json();
};
