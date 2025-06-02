import React from "react";

const greeting = () => {
  console.log("Bonjour!");
};
export const Button = () => <button onClick={greeting}>Click me!</button>;
