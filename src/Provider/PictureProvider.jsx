import { createContext, useEffect, useState } from "react";
import { useAxiosPublic } from "../utils/useAxiosPublic";

export const PictureContext = createContext();

const PictureProvider = ({ children }) => {
  const [pictures, setPictures] = useState([]);
  const { axiosPublic } = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/gallery.json").then((res) => setPictures(res.data));
  });

  const contextValues = {
    pictures,
  };
  return (<PictureContext.Provider value={contextValues}>
    {children}
  </PictureContext.Provider>);
};

export default PictureProvider;
