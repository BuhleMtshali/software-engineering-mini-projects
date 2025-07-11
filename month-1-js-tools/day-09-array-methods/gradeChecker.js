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

    //asking the user how many modules they have
    let moduleCount = parseFloat((prompt("How many modules would you like to add?: ")))

    //collecting module data
    let modules = [];

    //loop through the modules added
    for(let i = 0; i < moduleCount; i++){
        let moduleName = prompt(`Enter the name of module ${i + 1}: `);
        let finalMark = parseFloat(prompt(`Enter the final Mark for ${moduleName} (%): `))

        //validate the final mark to be a number between 0 and 100
        while(isNaN(finalMark) || finalMark < 0 || finalMark > 100){
            console.log('❌ Invalid mark. Please enter a number between 0 and 100.');
            finalMark = parseFloat(prompt(`Try again. Enter the final mark for ${moduleName}: `))
        }

        //push the modules to the array
        modules.push({
            moduleName: moduleName.trim(),
            finalMark: finalMark
        })

    }

//creating the student object
    let student = {
        firstName: studentName.trim(),
        surname: lastName.trim(),
        email: studentEmail.trim(),
        studentId: studentNumber.trim()

    }

    studentDetails.push(student)
    console.log(studentDetails);

}