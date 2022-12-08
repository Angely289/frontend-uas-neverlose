import React from "react";

const Button = ({ children }) => {
  return (
    <button
      className="text-[0.70rem] font-normal text-white bg-orange-400 py-2 px-3 rounded-full focus:ring-4 focus:outline-none focus:ring-amber-600 shadow-lg shadow-amber-700/50 hover:opacity-80 transition duration-200 ease-in-out">
      {children}
    </button>
  );
};

export default Button;