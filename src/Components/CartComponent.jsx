import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddedItems from "./AddedItems";

const CartComponent = () => {
  const count = useSelector((state) => state.count);

  return (
    <div className="pt-8 ">
      {count === 0 ? (
        <div className="flex justify-center items-center h-[60vh]">
          <div className="flex flex-col space-y-3 items-center">
            <span>No Items Added...</span>
            <Link className="text-lg font-medium bg-gray-600 text-white px-4 py-3 rounded-3xl" to="/">Explore Products</Link>
          </div>
        </div>
      ) : (
        <AddedItems/>
      )}
    </div>
  );
};

export default CartComponent;
