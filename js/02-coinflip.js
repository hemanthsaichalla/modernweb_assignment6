function getCoinFlip() {
  var rand = Math.floor(Math.random() * Math.floor(3)); //Returns either 0 or 1 or 2
  return rand > 1 ? "Heads" : "Tails";  //Threshold is 1.
}

var coinFlip  = getCoinFlip();
var choice = window.prompt("Enter your choice (Heads/Tails) ");

var isHeads = choice === "Heads";
var isTails = choice === "Tails";

if(isHeads || isTails) {
  if(choice === coinFlip) {
    /* WIN CASE */
    if(isHeads) {
      document.write("The flip was heads and you chose heads...you win!");
    }
    else {
      document.write("The flip was tails and you chose tails...you win!");
    }
  }
  else {
    /* LOST CASE */
    if(isTails) {
      document.write("The flip was heads but you chose tails...you lose!");
    }
    else {
      document.write("The flip was tails but you chose heads...you lose!");
    }
  }
}
else {
  document.write("Invalid input");
}