import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { incQty, decQty, deleteItem } from "../Redux/Actions";
import { Link } from "react-router-dom";

const AddedItems = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice);
  const dispatch = useDispatch();

  const handleAddClick = (id) => {
    dispatch(incQty(id));
  };
  const handleMinusClick = (id) => {
    dispatch(decQty(id));
  };

  const handleRemoveClick= (id)=>{
    dispatch(deleteItem(id))
  }

  return (
    <div className="flex flex-col space-y-1 items-center">
      <Link
        to="/user-details-form"
        className="right-10 bottom-28 fixed bg-green-400 py-2 px-3 rounded-2xl text-center font-Merriweather font-semibold max-sm:text-xs"
      >
        <span className="text-sm max-sm:text-[10px]">Checkout with</span> Rs.{" "}
        {totalPrice}
      </Link>
      {cartItems.map((item, index) => (
        <>
          <div
            className="flex bg-gray-200 border-2 rounded-md border-slate-100 md:w-[50%]"
            key={index}
          >
            <div className="w-[40%] p-2 flex items-center justify-center">
              <img
                src={item.imgsrc}
                alt="ItemImage"
                className="h-[95%] w-[100%]"
              />
            </div>
            <div className="w-[60%] p-1 flex flex-col items-center justify-evenly space-y-1 text-neutral-800">
              <h6 className="sm:leading-none">{item.title}</h6>
              <p className="text-[10px]">{item.desc.slice(0, 100)}</p>
              <h6 className="py-2 font-medium ">Rs. {item.price}</h6>
              <div className="px-[30%] w-full">
                <div className="bg-white  flex justify-between rounded-xl items-center">
                  <button onClick={() => handleAddClick(item.id)}>
                    <AddCircleIcon />
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button onClick={() => handleMinusClick(item.id)}>
                    <RemoveCircleIcon />
                  </button>
                </div>
              </div>
              <div className="pt-2 pr-2 flex justify-end w-full">
                <button
                  className="text-[10px] font-semibold bg-red-600 text-white py-1 px-3 rounded-full"
                  onClick={() => handleRemoveClick(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default AddedItems;
