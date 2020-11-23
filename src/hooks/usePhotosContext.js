import { useContext } from "react";
import photosContext from "../context/photosContext";

export const usePhotosContext = () => useContext(photosContext);
