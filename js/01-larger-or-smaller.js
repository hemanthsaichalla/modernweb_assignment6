var num1 = parseInt(window.prompt("Enter the first number"));
var num2 = parseInt(window.prompt("Enter the second number"));

if(isNaN(num1) || isNaN(num2)) {
  document.write("Invalid inputs");
}
else if(num1 == num2) {
  document.write("Both the numbers are equal");
}
else {
  var largerNumber = num1 > num2 ? num1 : num2;
  document.write("Larger number is " + largerNumber);
}