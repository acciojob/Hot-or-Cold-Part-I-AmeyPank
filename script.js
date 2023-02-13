var randomNum;
var input;
var btn = document.getElementById("btn");

function randomNumGenerator() {
  randomNum = Math.floor(Math.random() * 20) - 20;
  document.getElementById("num").innerText = randomNum;
  guessNum();
  print();
}

function guessNum() {
  input = Number(document.getElementById("guess").value);
}
function print() {
  if (Math.abs(randomNum - input) <= 5) {
    document.getElementById("respond").innerText = "Hot";
  } else {
    document.getElementById("respond").innerHTML = "Cold";
  }
}
btn.addEventListener("click",randomNumGenerator,print);