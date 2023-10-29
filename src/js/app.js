// TODO: write code here
const button = document.querySelector(".button");
const container = document.querySelector(".container");

button.addEventListener("click", () => {
  if (container.classList.contains("collapse")) {
    container.classList.remove("collapse");
  } else {
    container.classList.add("collapse");
  }
});
