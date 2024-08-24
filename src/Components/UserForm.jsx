import React, { useState } from "react";
import StatesData from "../Pages/StateNames.json";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";

const UserForm = () => {
  const states = StatesData.states;
  const [alert, setAlert] = useState(false);
  const total = useSelector((state) => state.totalPrice);
  const count = useSelector((state) => state.count);

  const [input, setInput] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubimt = (e) => {
    e.preventDefault();
    console.log(input);
    setAlert(true);
    const timer = setTimeout(() => setAlert(false), 10000);
  };

  return (
    <div className="pt-16 flex justify-center ">
      {alert && (
        <Alert severity="success" className="fixed top-30">
          Thankyou <span className="font-bold font-Merriweather text-lg">{input.fullname}</span> for visiting my website
        </Alert>
      )}
      <div className="min-h-[50vh] px-8 bg-gray-200 min-w-[50%] pb-4">
        <h1 className="flex justify-center text-2xl font-semibold my-4">
          User Details
        </h1>
        <form onSubmit="" className="flex flex-col space-y-3 items-center">
          <div className="flex space-x-3 items-center text-sm">
            <label htmlFor="FullName" className="text-sm">
              Full Name:
            </label>
            <input
              type="text"
              name="fullname"
              className="rounded-lg py-1 px-4 text-center"
              required
              value={input.fullname}
              onChange={handleInput}
            />
          </div>
          <div className="flex space-x-7 items-center text-sm">
            <label htmlFor="Email" name="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="rounded-lg py-1 px-4 text-center"
              required
              value={input.email}
              onChange={handleInput}
            />
          </div>
          <div className="flex space-x-4 items-center text-sm">
            <label htmlFor="Address" className="text-sm">
              Address:
            </label>
            <input
              type="text"
              className="rounded-lg py-1 px-4 text-center"
              name="address"
              required
              value={input.address}
              onChange={handleInput}
            />
          </div>
          <div className="flex space-x-3 items-center text-sm">
            <label htmlFor="Postal Code" className="text-sm">
              Postal Code:
            </label>
            <input
              type="number"
              className="rounded-lg py-1 px-4 text-center"
              name="pincode"
              required
              value={input.pincode}
              onChange={handleInput}
            />
          </div>
          <div className="flex space-x-8 items-center text-sm">
            <label htmlFor="State" className="text-sm">
              State:
            </label>
            <select
              name="state"
              value={input.state || "All"}
              onChange={handleInput}
              className="text-xs text-center py-1 px-8 rounded-lg"
              required
            >
              <option value="All">Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div className="flex space-x-3 items-center text-sm">
            {count !== 0 ? (
              <>
                <label htmlFor="Items" className="text-sm">
                  Total:
                </label>
                <span>Rs. {total}</span>
              </>
            ) : (
              <span>No Items Added... </span>
            )}
          </div>
          {count !== 0 && (
            <button
              className="bg-green-400 hover:bg-green-300 px-3 py-2 rounded-full text-sm font-medium"
              onClick={handleSubimt}
            >
              Proceed to Payment
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserForm;
