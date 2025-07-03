const prompt = require("prompt-sync")();

let userIterator = parseFloat(prompt("Enter the value of your iterator: "));

//get the the value of i from the user
for(let i = 1; i <= userIterator; i++ ){
    if(i % 3 === 0 || i % 5 === 0){
        console.log("Fizz!!!!!")
    } else if(i % 3 === 0){
        console.log("Fizz!!!")
    } else if(i % 5 === 0){
        console.log("Fizz!!!")
    } else{
        console.log(i)
    }
}