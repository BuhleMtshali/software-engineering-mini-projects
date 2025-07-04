const prompt = require("prompt-sync")();

function miniFizzBuzz(){
console.log("=== Welcome to your Mini FizzBuzz Game ===");

console.log(" 🍀you actually get to choose your max iterator value🍀");

let userIterator = parseFloat(prompt("Enter the value of your iterator: "));

console.log(`---- You chose ${userIterator} as your maximum iterator, here is ur mini FizzBuzz Game ----`)

//get the the value of i from the user
for(let i = 1; i <= userIterator; i++ ){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz!!!!!")
    } else if(i % 3 === 0){
        console.log("FizzBuzz!!!")
    } else if(i % 5 === 0){
        console.log("FizzBuzz!!!")
    } else{
        console.log(i)
    }
}
}

miniFizzBuzz()

