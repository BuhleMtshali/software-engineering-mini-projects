const prompt = require("prompt-sync")();

welcomeMessage = '\n--------- Welcome to My Mini CLI Based Calculator🧮 -------------';

let firstNumber = parseFloat(prompt("Enter your first number: "));
let operator = prompt("Choose an operator (+, -, *, /): ")
let secondNumber = parseFloat(prompt("Enter your second number: "))

let result = parseFloat(0);


//switch to start the program
switch(operator){
    case '+':
        result = firstNumber + secondNumber;
        break;
    case '-':
        result = firstNumber - secondNumber;
        break;
    case '*':
        result = firstNumber * secondNumber;
        break;
    case '/':
        if(secondNumber != 0){
            result = firstNumber / secondNumber
        } else{
            console.log('Sorry poonkie, we cannot devide by 0')
        }
        break;
    default:
        console.log(`${operator} is invalid please try again!`)
}

console.log(result)