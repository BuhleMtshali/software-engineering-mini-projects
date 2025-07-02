const prompt = require("prompt-sync")();

const answer = "cape town";
const welcomeMessage = '==== Welcome to MiniQuiz Game👾 ====';
console.log(welcomeMessage);

let question = prompt("What City is referred to as Mother City?: ");

while(question.toLowerCase() !== answer.toLowerCase()) {
    console.log(`${question} is incorrect. Try again!`);
    question = prompt("What City is referred to as Mother City?: ");
}

console.log(`${question} is correct!! 🥳🎉`);
