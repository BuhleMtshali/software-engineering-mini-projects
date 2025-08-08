const prompt = require('prompt-sync')();

class Calculator{
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    addMethod(num1, num2){
        return num1 + num2;
    }

    minusMethod(num1, num2){
        return num1 - num2;
    }

    multiplyMethod(num1, num2){
        return num1 * num2;
    }

    divideMethod(num1, num2){
        if (num2 === 0){
            console.log("we cannot divide by 0")
        } else {
            return num1 / num2;
        }
    }
}

let output = 0;

function mainCalculator(){
    const myCalculator = new Calculator();

    let welcomeMessage = "======== Welcome to My Modulated Mini Calculator🍀 =======";
    console.log(welcomeMessage)

   let calculateAgain = "yes";

   while(calculateAgain.toLocaleLowerCase() === "yes"){
    console.log("Let's start calculating")
    
    let num1 = parseFloat(prompt("Enter your first number: "))
    let operator = prompt("Choose an operator(+, *, /, -): ")
    let num2 = parseFloat("Choose your second number: ")


    switch(operator){
        case "+":
            output = myCalculator.addMethod(num1, num2);
            break;
        case "-":
            output = myCalculator.minusMethod(num1, num2);
            break;
        case "*":
            output = myCalculator.multiplyMethod(num1, num2);
            break;
        case "/":
            output = myCalculator.divideMethod(num1, num2);
            break;
        default:
            output = "Invalid operator chosen"
            break;
    }

    console.log(`Results: ${output}`)
    
    calculateAgain = prompt("\nWanna make another calculation(yes/no): ")
        if (calculateAgain.toLocaleLowerCase() === "no"){
        console.log("thank you for trying my Mini Calculator")
     }
   }

   
    
}


mainCalculator()