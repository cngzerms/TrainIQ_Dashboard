import React, { createContext, useContext, useState, useEffect } from "react";
import api from "./api/api";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .getData()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
