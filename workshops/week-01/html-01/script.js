"use strict";

const calculate = (a, b, operator) => {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

console.log(calculate(2, 4, "+"));

// const getUsersName = () => {
//   let firstName = prompt("What is your name?");
//   while (!firstName) {
//     firstName = prompt("You need to enter your name to continue");
//   }
//   console.log(`Nice to meet you ${firstName}`);
// };

// const getUserNumber = () => {
//   let userInput = Number(
//     prompt(
//       "Lets play a game of guess the number! Pick a number between 1 and 5"
//     )
//   );
//   while (!userInput) {
//     userInput = Number(
//       prompt("You need to enter a random number between 1 and 5")
//     );
//   }
//   return userInput;
// };

// const generateRandomNumber = () => {
//   return Math.floor(Math.random() * (6 - 1) + 1);
// };

// getUsersName();
// const randomNumber = generateRandomNumber();
// const userInput = getUserNumber();

// switch (userInput) {
//   case randomNumber:
//     console.log(`Well done, you guess correctly, random was ${randomNumber}`);
//     break;
//   default:
//     console.log(
//       `You guessed ${userInput}, but the random number was ${randomNumber}, better luck next time`
//     );
// }

// rock paper scissors
// generate random number between 1 - 3
// assign variables rock, paper, scissors numbers

// const computerChoiceArr = ["rock", "paper", "scissors"];
// console.log("Let's play rock, paper, scissors!");

// const getUsersInput = () => {
//   let userInput = prompt("please enter either rock, paper or scissors");
//   while (!computerChoiceArr.includes(userInput)) {
//     userInput = prompt("You need to enter either rock, paper or scissors");
//   }
// while (!userInput || !isNaN(userInput)) {
//   userInput = prompt("You need to enter either rock, paper or scissors");
// }
//   return userInput.trim().toLowerCase();
// };

// const generateRandomNumber = () => {
//   return Math.floor(Math.random() * (4 - 1) + 1);
// };

// const randomNumber = generateRandomNumber();
// const arrIndex = randomNumber;
// const computerChoice = computerChoiceArr[arrIndex - 1];
// const userInput = getUsersInput();

// if (userInput === "rock" && computerChoice === "paper") {
//   console.log(`You choose ${userInput}, the computer chose ${computerChoice}`);
//   console.log("You lose! computer wins");
// } else if (userInput === "rock" && computerChoice === "rock") {
//   console.log(`You choose ${userInput}, the computer chose ${computerChoice}`);
//   console.log("Draw");
// } else if (userInput === "rock" && computerChoice === "scissors") {
//   console.log(`You choose ${userInput}, the computer chose ${computerChoice}`);
//   console.log("You win! computer lost");
// } else if (userInput === "paper" && computerChoice === "paper") {
//   console.log(`You choose ${userInput}, the computer chose ${computerChoice}`);
//   console.log("Draw");
// } else if (userInput === "paper" && computerChoice === "rock") {
//   console.log(`You choose ${userInput}, the computer chose ${computerChoice}`);
//   console.log("You win! computer lost");
// } else if (userInput === "paper" && computerChoice === "scissors") {
//   console.log(`You choose ${userInput}, the computer chose ${computerChoice}`);
//   console.log("You lose! computer wins");
// } else if (userInput === "scissors" && computerChoice === "paper") {
//   console.log(`You choose ${userInput}, the computer chose ${computerChoice}`);
//   console.log("You win! computer lost");
// } else if (userInput === "scissors" && computerChoice === "rock") {
//   console.log(`You choose ${userInput}, the computer chose ${computerChoice}`);
//   console.log("You lose! computer wins");
// } else if (userInput === "scissors" && computerChoice === "scissors") {
//   console.log(`You choose ${userInput}, the computer chose ${computerChoice}`);
//   console.log("draw");
// }

// const btn = document.querySelector(".btn");
// const modal = document.querySelector(".modal-container");
//check when button has been clicked, change style

// callback
// const handleClick = (e) => {
//   modal.style.display = "block";
// };

// btn.addEventListener("click", handleClick);
// btn.style.display = "none";
