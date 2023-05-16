const box = document.getElementsByClassName("box");
const play_again = document.getElementById("play_again");
const timer = document.getElementById("timer");
const destroyedShips = document.getElementById("destroyedShips");
const overlay_text = document.getElementById("overlay_text");
const overlay = document.getElementById("overlay");

let array = [];
let ships = 0;
let time = 0;
let clicked = [];

interval = setInterval(() => {
  time++;
  timer.innerHTML = `Čas: ${time}s`;
}, 1000);

for (let index = 0; index < 10; index++) {
  let number;
  do {
    number = Math.floor(Math.random() * box.length);
  } while (array.includes(number))
  array.push(number);
}

[...box].forEach((bx, index) => {
  bx.onclick = () => {
    if (ships == 9) {
      overlay.style.display = "block";
      overlay_text.innerHTML = `Všechny lodě zničené v čase: ${time}s`;
      bx.style.backgroundImage = "url('./res/img/ship.png')";
    } else {
      if (clicked.includes(index)) return;
      if (array.includes(index)) {
        ships++;
        bx.style.backgroundImage = "url('./res/img/ship.png')";
        destroyedShips.innerHTML = `Zničené lodě: ${ships}`;
      } else {
        bx.style.backgroundImage = "url('./res/img/cross.png')";
      }
      clicked.push(index);
    }
    
  };
});

play_again.onclick = () => {
  window.location.reload();
};
