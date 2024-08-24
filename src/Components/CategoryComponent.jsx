import React, {useEffect, useState } from "react";
import { useCatContext } from "../CatContext";

const CategoryComponent = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setCategory } = useCatContext();

  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      const res = await fetch("https://api.escuelajs.co/api/v1/categories");
      const data = await res.json();
      setCategories(data);
      setIsLoading(false);
    };
    getCategories();
  }, []);

  return (
    <div className="flex space-x-4 pt-10 font-Merriweather flex-wrap space-y-2">
      {isLoading ? (
        <p>Loading Categories</p>
      ) : (
        <>
          <button
            className="bg-slate-200 px-3 py-2 rounded-2xl flex-1"
            onClick={() => setCategory(null)}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="bg-slate-200 px-3 py-2 rounded-2xl flex-1"
              onClick={() => setCategory(cat.name)}
            >
              {cat.name}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default CategoryComponent;
