//AI code
function randomColor() {
  const r = Math.floor(Math.random() * 256); // Random value between 0 and 255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
//My code
let changeColor = () => {
  let square = document.getElementById("square");
  let color = document.getElementById("color");
  const backgroundColor = randomColor();
  square.style.background = backgroundColor;
  color.innerHTML = backgroundColor;
};
