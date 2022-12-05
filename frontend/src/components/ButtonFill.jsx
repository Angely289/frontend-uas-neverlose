import React from "react";

const ButtonFill = ({ children }) => {
  return (
    <button
      className="text-md font-normal text-white bg-gradient-to-r from-amber-700 to-orange-300 py-2 px-5 rounded-full focus:ring-4 focus:outline-none focus:ring-amber-600 shadow-lg shadow-amber-700/50 hover:opacity-80 transition duration-200 ease-in-out">
      {children}
    </button>
  );
};

export default ButtonFill;