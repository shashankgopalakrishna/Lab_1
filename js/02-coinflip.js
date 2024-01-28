var coinFlip = Math.floor(Math.random() * 10);
var choice = prompt("Enter Heads or Tails");

var result = (coinFlip < 5) ? "Heads" : "Tails";

if(result == "Heads" && choice == "Heads") {
    alert("The flip was heads and you chose heads...you win!");
}
else if(result == "Heads" && choice == "Tails") {
    alert("The flip was heads but you chose tails...you lose!");
}
else if(result == "Tails" && choice == "Heads") {
    alert("The flip was tails but you chose heads...you lose!");
}
else if(result == "Tails" && choice == "Tails") {
    alert("The flip was tails and you chose tails...you win!");
}