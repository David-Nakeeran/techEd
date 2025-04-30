const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal-container");
//check when button has been clicked, change style

// callback
const handleClick = (e) => {
  modal.style.display = "block";
};

btn.addEventListener("click", handleClick);
// btn.style.display = "none";
