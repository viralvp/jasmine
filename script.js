const yes = document.querySelector("#yesBtn");
const no = document.querySelector("#noBtn");
let yesButtonSize = 16;
let yesbtn = 1;
let noBtn = 1;
let i = 1;
function getRandomPosition() {
  const buttonWidth = no.offsetWidth;
  const buttonHeight = no.offsetHeight;

  // Calculate the available space for the button and subtract the button's size to avoid overflowing
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;

  // Generate random x and y coordinates within the bounds of the window
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  return { x: randomX, y: randomY };
}

function adjustButtons() {
  const { x, y } = getRandomPosition();

  yesbtn += 0.1;
  noBtn -= 0.1;
  yes.style.transform = `scale(${yesbtn})`;
  no.style.transform = `scale(${noBtn})`;
  if (noBtn < 0.3) {
    no.style.transform = `scale(${1})`;
    no.style.left = `${x}px`;
    no.style.top = `${y}px`;
  }

  document.getElementById("apologyImg").src = `./images/${i}.gif`; // Sad Bubu Dudu GIF
  i++;
}

function forgive() {
  document.getElementById("apologyImg").src = "./images/.gif"; // Happy Bubu Dudu GIF

  document.getElementById("buttonContainer").remove();
}
console.log(yes);
yes.addEventListener("click", forgive);
no.addEventListener("click", adjustButtons);
