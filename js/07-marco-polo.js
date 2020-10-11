for(var i=1; i <= 100; i++) {
  var isMultipleof3 = i%3 === 0;
  var isMultipleof5 = i%5 === 0;
  if(isMultipleof3 || isMultipleof5) {
    if(isMultipleof3 && isMultipleof5) {
      window.console.log("Marco! Polo!");
    }
    else if(isMultipleof3) {
      window.console.log("Marco!");
    }
    else {
      window.console.log("Polo!");
    }
  }
}