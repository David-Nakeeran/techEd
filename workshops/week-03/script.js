// const form = document.querySelector("form");
// const userDataContainer = document.querySelector("#user-data");

// const handleFormClick = (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);
//   const formObj = Object.fromEntries(formData);
//   console.log(formObj);
//   form.reset();
//   displayUserData(formObj);
// };

// const displayUserData = (formObj) => {
//   const fullName = document.createElement("p");
//   const label = document.createElement("span");
//   console.log(formObj);
//   label.textContent = "Full Name";
//   fullName.textContent = formObj.fullName;
//   userDataContainer.appendChild(fullName);

//   const city = document.createElement("p");
//   console.log(formObj);
//   city.textContent = formObj.city;
//   userDataContainer.appendChild(city);

//   const hobby = document.createElement("p");
//   console.log(formObj);
//   hobby.textContent = formObj.hobby;
//   userDataContainer.appendChild(hobby);
// };

// form.addEventListener("submit", handleFormClick);
// const container = document.getElementById("cat-container");

// const getCatData = async () => {
//   try {
//     const response = await fetch("https://api.thecatapi.com/v1/images/search");
//     const data = await response.json();
//     return data[0].url;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const createCatImages = (catImg) => {
//   const img = document.createElement("img");
//   img.src = catImg;
//   container.appendChild(img);
// };

// const generateCatImages = async () => {
//   const catImg = await getCatData();
//   createCatImages(catImg);
// };

// generateCatImages();
// const para = document.getElementById("message");
// const btn = document.getElementById("btn");

// const handleClick = (e) => {
//   para.className = "display-message";
//   para.textContent = "hello";
//   setTimeout(() => {
//     para.className = "hidden";
//   }, 5000);
// };

// btn.addEventListener("click", handleClick);

// let counter = 0;
// let intervalId = null;

// const updateTimerText = () => {
//   counter++;
//   para.textContent = counter;
// };

// const handleClick = (e) => {
//   if (counter > 0) {
//     clearInterval(intervalId);
//   } else {
//     intervalId = setInterval(updateTimerText, 1000);
//   }
// };

// btn.addEventListener("click", handleClick);
// const body = document.querySelector("body");
// const form = document.querySelector("form");
// const resetBtn = document.querySelector("#reset");

// const savePreferences = (e) => {
//   e.preventDefault();

//   const formData = new FormData(form);
//   const formObj = Object.fromEntries(formData);
//   const preferences = {
//     colour: formObj.colour,
//   };
//   localStorage.setItem("preferences", JSON.stringify(preferences));
// };

// form.addEventListener("submit", savePreferences);

// const loadPreferences = () => {
//   const preferences = JSON.parse(localStorage.getItem("preferences"));
//   if (preferences) {
//     const input = document.querySelector("input");
//     input.value = preferences.colour || "#000000";
//   }

//   body.style.backgroundColor = preferences.colour || "#000000";
// };

// function clearPreferences(event) {
//   event.preventDefault();

//   localStorage.removeItem("preferences");
// }

// const reset = () => {
//   const preferences = JSON.parse(localStorage.getItem("preferences"));
//   const defaults = {
//     colour: "#000000",
//   };
//   body.style.backgroundColor = defaults.colour || preferences.colour;
// };

// resetBtn.addEventListener("click", reset);

// loadPreferences();

// 1. Find the maximum value in an array
export function findMaxValue(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.max(...arr);
}

// 2. Calculate the factorial of a number
export function factorial(n) {
  if (typeof n !== "number" || n < 0) return null;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// 3. Check if two arrays are equal
export function areArraysEqual(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
  if (arr1.length !== arr2.length) return false;
  return arr1.every((val, index) => val === arr2[index]);
}

// 4. Convert a string to title case
export function toTitleCase(str) {
  if (typeof str !== "string") return "";
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
