const prompt = require("prompt-sync")();

const welcomeMessage = '\n--------- Welcome to My Mini CLI Based Calculator🧮 -------------';
console.log(welcomeMessage)

let runAgain = "yes";

let result = parseFloat(0);

while(runAgain.toLowerCase() || runAgain.toLowerCase === "y"){
    let firstNumber = parseFloat(prompt("Enter your first number: "));
let operator = prompt("Choose an operator (+, -, *, /): ")
let secondNumber = parseFloat(prompt("Enter your second number: "))


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

console.log(`✅ Result: ${firstNumber} ${operator} ${secondNumber} = ${result.toFixed(2)}`);

runAgain = prompt('Would you like to perform another calculation? (yes/no): ')

}

