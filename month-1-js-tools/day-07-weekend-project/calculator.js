const prompt = require("prompt-sync")();

welcomeMessage = '\n--------- Welcome to My Mini CLI Based Calculator🧮 -------------';

let firstNumber = parseFloat(prompt("Enter your first number: "));
let operator = prompt("Choose an operator (+, -, *, /): ")
let secondNumber = parseFloat(prompt("Enter your second number: "))

let result = parseFloat(0);
console.log(result)