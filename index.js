"use strict";
window.onload;
const consonants = [
  "B",
  "C",
  "D",
  "F",
  "G",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "S",
  "T",
  "V",
  "X",
  "Z",
  "H",
  "R",
  "W",
  "Y",
];
const vowels = ["A", "E", "I", "O", "U"];
let firstInp = document.getElementById("FIRSTLETTER");
let secondInp = document.getElementById("SECONDLETTER");
let myButton = document.getElementById("myButton");
let results = document.getElementById("results");
const list = document.getElementById("list");
let FIRSTLETTER = "";
let SECONDLETTER = "";
///////////////// second formula
let FIRSTLETTER2 = "";
let SECONDLETTER2 = "";
let THIRDLETTER = "";
const firstInp2 = document.getElementById("FIRSTLETTER2");
const secondInp2 = document.getElementById("SECONDLETTER2");
const thirdinp2 = document.getElementById("THIRDLETTER2");
const myButton2 = document.getElementById("myButton2");
let results2 = document.getElementById("results2");
let list2 = document.getElementById("list2");
myButton.onclick = function () {
  FIRSTLETTER = firstInp.value;
  SECONDLETTER = secondInp.value;
  list.innerHTML = generator(consonants, vowels);
  words.forEach((word) => {
    const li = document.createElement("li");
    li.textContent = word;
    list.appendChild(li);
  });
};

let words = [];
function generator(tanxmovnebi, xmovnebi) {
  for (let i = 0; i < tanxmovnebi.length; i++) {
    for (let j = 0; j < xmovnebi.length; j++) {
      for (let k = 0; k < tanxmovnebi.length; k++) {
        let word = `${FIRSTLETTER}${tanxmovnebi[i]}${xmovnebi[j]}${tanxmovnebi[k]}${SECONDLETTER}`;
        words.push(word);
      }
    }
  }
}
let words2 = [];
myButton2.onclick = function () {
  FIRSTLETTER2 = firstInp2.value;
  SECONDLETTER2 = secondInp2.value;
  THIRDLETTER = thirdinp2.value;
  console.log(SECONDLETTER2);
  list.innerHTML = generator2(consonants, vowels);
  words2.forEach((word) => {
    const li2 = document.createElement("li");
    li2.textContent = word;
    list.appendChild(li2);
  });
  console.log(words2);
};

function generator2(tanxmovnebi, xmovnebi) {
  for (let i = 0; i < tanxmovnebi.length; i++) {
    for (let j = 0; j < xmovnebi.length; j++) {
      for (let k = 0; k < tanxmovnebi.length; k++) {
        for (let l = 0; l < tanxmovnebi.length; l++) {
          let word = `${FIRSTLETTER2}${tanxmovnebi[i]}${THIRDLETTER}${tanxmovnebi[l]}${xmovnebi[j]}${tanxmovnebi[k]}${SECONDLETTER2}`;
          words2.push(word);
        }
      }
    }
  }
}
