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
    let studentName = prompt("Enter your First Name: ")
    let lastName = prompt("Enter your last Name: ");
    let studentNumber = prompt("Enter your 9-digit Student Number: ").trim();
    let studentEmail = prompt("Enter your email address: ").trim();

    //regex Triggers the while loop if it's NOT valid, keep looping until it's exactly 9 digits and numeric
    while(!/^\d{9}$/.test(studentNumber)){                   //This regex checks if the input has exactly 9 digits, nothing more, nothing less
        console.log('Invalid input. Please enter exactly 9 digits');
        studentNumber = prompt("Try again. Enter your 9-digit Student Number: ").trim();
    }

    // basic pattern: something@something.something for email
    while (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(studentEmail)) {
        console.log("❌ Invalid email format. Please try again.");
        studentEmail = prompt("Enter a valid email address: ");
    }   

    let student = {
        firstName: studentName.trim(),
        surname: lastName.trim(),
        email: studentEmail.trim(),
        studentId: studentNumber.trim()

    }

    studentDetails.push(student)
    console.log(studentDetails)
}