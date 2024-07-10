/* eslint-disable */

import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed on", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function getRandom(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

let randomNumber1 = getRandom(who.length);
let randomNumber2 = getRandom(action.length);
let randomNumber3 = getRandom(what.length);
let randomNumber4 = getRandom(when.length);

//WINDOW ONLOAD
window.onload = function() {
  console.log(
    who[randomNumber1] +
      " " +
      action[randomNumber2] +
      " " +
      what[randomNumber3] +
      " " +
      when[randomNumber4]
  );
};

//cogi esta funcion online. no tenia ni idea de como pasar el console.log() al HTML
(function() {
  const originalLog = console.log;
  const logContainer = document.getElementById("excuse");
  console.log = function(message) {
    originalLog.apply(console, arguments);
    const logMessage = document.createElement("div");
    logMessage.textContent = Array.from(arguments).join("");
    logContainer.appendChild(logMessage);
  };
})();
