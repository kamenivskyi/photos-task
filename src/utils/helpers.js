import { HEIGHT_SMALL, WIDTH_SMALL } from "./config";

export const getSmallImageUrl = ({ id }) => {
  return `https://picsum.photos/id/${id}/${WIDTH_SMALL}/${HEIGHT_SMALL}`;
};
