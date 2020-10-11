var timeOut = parseInt(window.prompt("Enter a count down time in sec"));

if(!isNaN(timeOut)) {
  var currentTime = timeOut;
  var stopWatch = setInterval(myTimer, 1000);
}

function myTimer() {
	if(currentTime == 0) {
    clearInterval(stopWatch);  
  }
  document.getElementById('timer').innerText = currentTime--;
}