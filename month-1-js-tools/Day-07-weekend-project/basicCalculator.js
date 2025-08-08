const prompt = require('prompt-sync')();

class Calculator{
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    addMethod(){
        return this.num1 + this.num2;
    }

    minusMethod(){
        return this.num1 - this.num2;
    }

    multiplyMethod(){
        return this.num1 * this.num2;
    }

    divideMethod(){
        if (this.num2 === 0){
            console.log("we cannot divide by 0")
        } else {
            return this.num1 / this.num2;
        }
    }
}


const myCalculator = new Calculator();

