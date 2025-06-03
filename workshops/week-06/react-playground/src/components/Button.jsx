import React from "react";

export const Button = ({ decrementCount, incrementCount }) => {
  return (
    <>
      <button
        onClick={() => incrementCount()}
        className="font-medium cursor-pointer bg-purple-400 text-purple-950 p-3 rounded-2xl hover:bg-purple-300 "
      >
        Increment Count!
      </button>
      <button
        onClick={() => decrementCount()}
        className="font-medium cursor-pointer bg-purple-400 text-purple-950 p-3 rounded-2xl hover:bg-purple-300 "
      >
        Decrement Count!
      </button>
    </>
  );
};
