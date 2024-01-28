const userInput = prompt("Enter a number:");
const number = parseInt(userInput, 10);

if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}