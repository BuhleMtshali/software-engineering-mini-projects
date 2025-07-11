const prompt = require("prompt-sync")();

//welcome message
const welcomeMessage = '========== Welcome to The Student Grade Checker📑 ========='

//array method to store student details
let studentDetails = [];

//give the user the option of choosing to continue or not 
let checkAgain = 'yes';

//start the while loop for the whole function
while(checkAgain.toLowerCase() === "yes" || checkAgain.toLowerCase() === "y"){
    console.log('------- Enter your Details Below⬇️ ---------')
    const studentName = prompt("Enter your First Name: ")
    const lastName = prompt("Enter your last Name: ");
    const studentNumber = prompt("Enter your 9-digit Student Number: ");
    while(studentNumber.length === 9){
       break;
    }
}