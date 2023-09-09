const colorChar = "0123456789ABCDEF";

const main = document.querySelector(".main");
const colorName = document.querySelector(".color-name p");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

function getRandomColor() {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += colorChar[Math.round(Math.random() * 15)];
  }
  return randomColor;
}

let startChange;

start.addEventListener("click", () => {
  startChange = setInterval(() => {
    const randomColor = getRandomColor();
    main.style.backgroundColor = randomColor;
    colorName.style.color = randomColor;
    colorName.innerHTML = randomColor;
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(startChange);
});
