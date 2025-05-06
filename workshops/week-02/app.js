"use strict";

// Callbacks
const onAwesomeSuccess = (data) => {
  console.log(`It was successful: ${data.message}`);
};

const onAwesomeFailure = () => {
  console.log("It failed :(");
};

// Coordinator
const myAwesomeFunction = (onSuccessCallback, onFailureCallback) => {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");

  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback({
      message: "This is the message of ultimate success",
    });
  } else {
    onFailureCallback();
  }
};

myAwesomeFunction(onAwesomeSuccess, onAwesomeFailure);

const add = (a, b) => {
  return a + b;
};

const multiply = (a, b) => {
  return a * b;
};

const myCalculatorFunction = (a, b, operation) => {
  console.log(
    `Magic is about to happen with these two numbers: ${a} and ${b} , are you ready?!`
  );
  return operation(a, b);
};

const result = myCalculatorFunction(3, 5, add);
console.log(result);

const result2 = myCalculatorFunction(2, 10, multiply);
console.log(result2);
