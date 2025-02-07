const yes = document.querySelector("#yesBtn");
const no = document.querySelector("#noBtn");
const body = document.querySelector("body");
const h2 = document.querySelector("h2");
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

  document.getElementById("apologyImg").src = `./images/sad/${i}.gif`; // Sad Bubu Dudu GIF
  if (i < 13) {
    i++;
  } else {
    i = 1;
  }
}

function horray() {
  const { x, y } = getRandomPosition();
  const gif = document.createElement("img");
  gif.src = `./images/happy/${i}.gif`;
  gif.classList.add("yes");

  // Set random position
  gif.style.position = "absolute"; // Ensure positioning works
  gif.style.left = `${x}px`;
  gif.style.top = `${y}px`;

  // Append the GIF to the body
  document.body.insertAdjacentElement("beforeend", gif);

  // Update i value (cycle between 1 and 21)
  i = i < 21 ? i + 1 : 1;
}
function forgive() {
  document.getElementById("apologyImg").src = `./images/happy/${1}.gif`;
  h2.textContent = "thank you for forgiving me❤️🥰 " + "love you❤️";
  document.getElementById("buttonContainer").remove();
  setInterval(horray, 1000);
}
console.log(yes);
yes.addEventListener("click", forgive);
no.addEventListener("click", adjustButtons);
