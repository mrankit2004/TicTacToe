let boxes = document.querySelectorAll(".box");
let gamebtn = document.querySelector("#new-game-btn");
let gamebtn2 = document.querySelector("#Reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnB = true; // playerA playerB

//Creating 2D array
const WINPATTERN = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnB = true;
  enableBoxes();
  msgContainer.classList.remove("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turnB) {
      box.innerText = "O";
      turnB = false;
    } else {
      box.innerText = "X";
      turnB = true;
    }
    box.disabled = true;
    checkWINNER();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWINNER = () => {
  for (let patterns of WINPATTERN) {
    let pos1val = boxes[patterns[0]].innerText;
    let pos2val = boxes[patterns[1]].innerText;
    let pos3val = boxes[patterns[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showWinner(pos1val);
        disableBoxes();
      }
    }
  }
};

gamebtn.addEventListener("click", resetGame);
gamebtn2.addEventListener("click", resetGame);
