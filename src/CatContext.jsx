import React, { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export const CatContext = ({ children }) => {
  const [category, setCategory] = useState(null);

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCatContext=()=> useContext(CategoryContext);
