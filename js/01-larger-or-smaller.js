var firstNumber = parseInt(prompt("Enter the first integer:"), 10);
var secondNumber = parseInt(prompt("Enter the second integer:"), 10);

if (firstNumber === secondNumber) {
    document.write("Both the numbers are equal: " + firstNumber);
} else if (firstNumber > secondNumber) {
    document.write("The larger number is: " + firstNumber);
} else {
    document.write("The larger number is: " + secondNumber);
}