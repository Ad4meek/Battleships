const box = document.getElementsByClassName("box");
const play_again = document.getElementById("play_again");
const timer = document.getElementById("timer");
const destroyedShips = document.getElementById("destroyedShips");

let array = [];
let ships = 0;
let time = 0;
let clicked = [];

interval = setInterval(() => {
  timer.innerHTML = `Čas: ${time}s`;
  time++;
}, 1000);

for (let index = 0; index < 16; index++) {
  let number;
  do {
    number = Math.floor(Math.random() * box.length);
  } while (array.includes(number))
  array.push(number);
}

array.sort();
console.log(array);

[...box].forEach((bx, index) => {
  bx.onclick = () => {
    if (clicked.includes(index)) return;
    if (array.includes(index)) {
      ships++;
      bx.style.backgroundImage = "url('./res/img/ship.png')";
      destroyedShips.innerHTML = `Zničené lodě: ${ships}`;
    } else {
      bx.style.backgroundImage = "url('./res/img/cross.png')";
    }
    clicked.push(index);
  };
});

play_again.onclick = () => {
  window.location.reload();
};
