let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgCon = document.querySelector("#msg-con");

let turnO = true; ///PlayerO, PlayerX
let count = 0; // For draw
let winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box1) => {
  box1.addEventListener("click", () => {
    // console.log("box was clicked");
    // box1.innerText = "Aas"

    // if(count===4){
    //     // msg.innerText = `Draw a match`
    //     console.log(count);

    // }

    if (turnO === true) {
      box1.innerText = "O";
      //   console.log(box1.innerText);

      turnO = false;
    } else {
      box1.innerText = "X";
      //   console.log(box1.innerText);
      turnO = true;
    }

    box1.disabled = true;
    count++;
    checkWin();
    console.log("count=",count);
    // let isWinner = checkWin();
    if (count === 9 && !checkWin()) {
        gameDraw();
    }
  });
});
const gameDraw = () => {
  msgCon.classList.remove("hide");
  msg.innerText = `Draw a match`;
  count=0;
  disabledbtn();
};
const showWinner = (Winner) => {
  msgCon.classList.remove("hide");
  msg.innerText = `Congrats winner is ${Winner}`;
};

const disabledbtn = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const resetGame = () => {
  for (const box of boxes) {
    box.innerText = "";
    count=0;
    box.disabled = false;
    msgCon.classList.add("hide");
  }
};
const checkWin = () => {
  for (let pattern of winpattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );

    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner ", pos1);
        // break;
        count=0;
        // msg.innerText = "Winner " + pos1;
        showWinner(pos1);
        disabledbtn();
      }
    }
  }
};

resetbtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
