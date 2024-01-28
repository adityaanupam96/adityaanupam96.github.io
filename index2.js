let part1 = document.querySelector(".s1")
let part2 = document.querySelector(".s2")
let part3 = document.querySelector(".s3")
let part4 = document.querySelector(".s4")
let part5 = document.querySelector(".s5")
let part6 = document.querySelector(".s6")
let part7 = document.querySelector(".s7")
let part8 = document.querySelector(".s8")
let part9 = document.querySelector(".s9")

let x1 = document.querySelector(".x1")
let o1 = document.querySelector(".o1")

let x2 = document.querySelector(".x2")
let o2 = document.querySelector(".o2")

let x3 = document.querySelector(".x3")
let o3 = document.querySelector(".o3")

let x4 = document.querySelector(".x4")
let o4 = document.querySelector(".o4")

let x5 = document.querySelector(".x5")
let o5 = document.querySelector(".o5")

let x6 = document.querySelector(".x6")
let o6 = document.querySelector(".o6")

let x7 = document.querySelector(".x7")
let o7 = document.querySelector(".o7")

let x8 = document.querySelector(".x8")
let o8 = document.querySelector(".o8")

let x9 = document.querySelector(".x9")
let o9 = document.querySelector(".o9")

let myDiv = document.querySelector(".myDiv")
// let item = document.querySelector(".item")

let originalTerm = "" // keeping track of whose term next is
let term = "x" //player term
originalTerm = term


let count = 0; // for draw match
let p1 = "", p2 = "", p3 = "", p4 = "", p5 = "", p6 = "", p7 = "", p8 = "", p9 = ""; // position
let r1 = 0, r2 = 0, r3 = 0, r4 = 0, r5 = 0, r6 = 0, r7 = 0, r8 = 0, r9 = 0; // repeattion of eventlistener
var myBoolean = false;// Global

let p1Score = document.querySelector(".p1Score")
let p2Score = document.querySelector(".p2Score")
let score1 = 0, score2 = 0;

let round = document.querySelector(".round")
let roundNumer = 1

let command = document.querySelector(".command")
const commandList = ["Player X's Turn", "Player O's Turn", " "];
value = 0

let btn = document.querySelector(".button")

let colorCodes = ["red", "rgb(0, 234, 255)"]


myDiv.addEventListener('click', () => {
  enableButtons()
})

disableButtons()

part1.addEventListener('click', () => {
  if (r1 == 0) {
    p1 = term;
    count++;
    if (term == "x") {
      term = "o"
      x1.style.display = "inline"
    }
    else {
      o1.style.display = "inline"
      term = "x"
    }
    playerXWin()
    part1.style.cursor="default"
  }
  r1++
})

part2.addEventListener('click', () => {
  if (r2 == 0) {
    p2 = term;
    count++;
    if (term == "x") {
      term = "o"
      x2.style.display = "inline"
    }
    else {
      o2.style.display = "inline"
      term = "x"
    }
    playerXWin()
    part2.style.cursor="default"
  }
  r2++
})

part3.addEventListener('click', () => {
  if (r3 == 0) {
    p3 = term;
    count++;
    if (term == "x") {
      term = "o"
      x3.style.display = "inline"
    }
    else {
      o3.style.display = "inline"
      term = "x"
    }
    playerXWin()
    part3.style.cursor="default"
  }
  r3++
})

part4.addEventListener('click', () => {
  if (r4 == 0) {
    p4 = term;
    count++;
    if (term == "x") {
      term = "o"
      x4.style.display = "inline"
    }
    else {
      o4.style.display = "inline"
      term = "x"
    }
    playerXWin()
    part4.style.cursor="default"
  }
  r4++
})

part5.addEventListener('click', () => {
  if (r5 == 0) {
    p5 = term;
    count++;
    if (term == "x") {
      term = "o"
      x5.style.display = "inline"
    }
    else {
      o5.style.display = "inline"
      term = "x"
    }
    playerXWin()
    part5.style.cursor="default"
  }
  r5++
})

part6.addEventListener('click', () => {
  if (r6 == 0) {
    p6 = term;
    count++;
    if (term == "x") {
      term = "o"
      x6.style.display = "inline"
    }
    else {
      o6.style.display = "inline"
      term = "x"
    }

    playerXWin()
    part6.style.cursor="default"
  }
  r6++
})

part7.addEventListener('click', () => {
  if (r7 == 0) {
    p7 = term;
    count++;
    if (term == "x") {
      term = "o"
      x7.style.display = "inline"
    }
    else {
      o7.style.display = "inline"
      term = "x"
    }
    playerXWin()
    part7.style.cursor="default"
  }
  r7++
})

part8.addEventListener('click', () => {
  if (r8 == 0) {
    p8 = term;
    count++;
    if (term == "x") {
      term = "o"
      x8.style.display = "inline"
    }
    else {
      o8.style.display = "inline"
      term = "x"
    }
    part8.style.cursor="default"
    playerXWin()
  }
  r8++
})

part9.addEventListener('click', () => {
  if (r9 == 0) {
    p9 = term;
    count++;
    if (term == "x") {
      term = "o"
      x9.style.display = "inline"
    }
    else {
      o9.style.display = "inline"
      term = "x"
    }
    part9.style.cursor="default"
    playerXWin()
  }
  r9++
})

// reset
let playerX = document.querySelector(".playerX")
let playerO = document.querySelector(".playerO")
let draw = document.querySelector(".draw")
repeat = false

function button() {

  updateTerm()

  if (term == "x") {
    value = 0
  }
  else {
    value = 1
  }

  count = 0; //count for draw

  updateCommand(value)
  updateRound()
  disableButtons()

  x1.style.display = "none"
  x2.style.display = "none"
  x3.style.display = "none"
  x4.style.display = "none"
  x5.style.display = "none"
  x6.style.display = "none"
  x7.style.display = "none"
  x8.style.display = "none"
  x9.style.display = "none"

  o1.style.display = "none"
  o2.style.display = "none"
  o3.style.display = "none"
  o4.style.display = "none"
  o5.style.display = "none"
  o6.style.display = "none"
  o7.style.display = "none"
  o8.style.display = "none"
  o9.style.display = "none"

  part1.style.cursor="pointer"
  part2.style.cursor="pointer"
  part3.style.cursor="pointer"
  part4.style.cursor="pointer"
  part5.style.cursor="pointer"
  part6.style.cursor="pointer"
  part7.style.cursor="pointer"
  part8.style.cursor="pointer"
  part9.style.cursor="pointer"

  draw.style.display = "none"
  playerX.style.display = "none";
  playerO.style.display = "none";
  p1 = "", p2 = "", p3 = "", p4 = "", p5 = "", p6 = "", p7 = "", p8 = "", p9 = ""; // position reset
  r1 = 0, r2 = 0, r3 = 0, r4 = 0, r5 = 0, r6 = 0, r7 = 0, r8 = 0, r9 = 0; // repeation. reset of eventlistener

  // anable controls
  enablbeControls()

}

// wining conditions
// playerX


function playerXWin() {
  // player X
  if (((p1 == "x") && (p5 == "x") && (p9 == "x")) ||
    ((p3 == "x") && (p5 == "x") && (p7 == "x")) ||
    ((p1 == "x") && (p2 == "x") && (p3 == "x")) ||
    ((p4 == "x") && (p5 == "x") && (p6 == "x")) ||
    ((p7 == "x") && (p8 == "x") && (p9 == "x")) ||
    ((p1 == "x") && (p4 == "x") && (p7 == "x")) ||
    ((p2 == "x") && (p5 == "x") && (p8 == "x")) ||
    ((p3 == "x") && (p6 == "x") && (p9 == "x"))) {
    playerX.style.display = "block";
    updateScore("x")
    // updateRound()
    updateCommand(2)
    disableControls()
  }
  //player O
  else if (((p1 == "o") && (p5 == "o") && (p9 == "o")) ||
    ((p3 == "o") && (p5 == "o") && (p7 == "o")) ||
    ((p1 == "o") && (p2 == "o") && (p3 == "o")) ||
    ((p4 == "o") && (p5 == "o") && (p6 == "o")) ||
    ((p7 == "o") && (p8 == "o") && (p9 == "o")) ||
    ((p1 == "o") && (p4 == "o") && (p7 == "o")) ||
    ((p2 == "o") && (p5 == "o") && (p8 == "o")) ||
    ((p3 == "o") && (p6 == "o") && (p9 == "o"))) {
    playerO.style.display = "block";
    updateScore("o")
    // updateRound()
    updateCommand(2)
    disableControls()
  }
  // draw match
  else if (count == 9) {
    draw.style.display = "block"
    updateCommand(2)
    disableControls()
  }
  else {
    if (value == 0) {
      updateCommand(value + 1)
      value++;
    }
    else {
      updateCommand(value - 1)
      value--;
    }
  }
}

// draw match

function disableControls() {
  myDiv.style.pointerEvents = "none";
}

function enablbeControls() {
  myDiv.style.pointerEvents = "auto";
}

function disableButtons() {
  btn.style.pointerEvents = "none"
}

function enableButtons() {
  btn.style.pointerEvents = "auto"
}

function updateScore(lol) {
  if (lol == "x") {
    score1++;
    p1Score.textContent = "Player X:" + score1.toString()
  }
  else {
    score2++;
    p2Score.textContent = "Player O:" + score2.toString()
    // return score2.toString()
  }
}

function updateRound() {
  round.textContent = "Round: " + (++roundNumer).toString()
}

// updateCommand(2)
updateCommand(value)
function updateCommand(value) {
  command.textContent = commandList[value];
  command.style.color = colorCodes[value]
}

function updateTerm() {
  if (originalTerm == "x") {
    originalTerm = "o"
    term = "o"
  }
  else {
    originalTerm = "x"
    term = "x"
  }
}