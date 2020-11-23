import { API_BASE, HEIGHT_SMALL, WIDTH_SMALL } from "./config";

export const getSmallImageUrl = ({ id }) => {
  return `${API_BASE}/id/${id}/${WIDTH_SMALL}/${HEIGHT_SMALL}`;
};
