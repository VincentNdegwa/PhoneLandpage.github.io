const circle = document.querySelector(".circle");
const upBtn = document.querySelector(".arrow-up");
const downBtn = document.querySelector(".arrow-down");

let rotateValue = circle.style.transform;
let rotateSum;

upBtn.addEventListener("click", function () {
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  console.log("up!!");
});
downBtn.addEventListener("click", function () {
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  console.log("down!!");
});
