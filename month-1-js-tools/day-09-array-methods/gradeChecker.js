const prompt = require("prompt-sync")();

const welcomeMessage = '========== Welcome to The Student Grade Checker📑 =========';
console.log(welcomeMessage);

// array to store student details
let studentDetails = [];

let checkAgain = 'yes';

while (checkAgain.toLowerCase() === "yes" || checkAgain.toLowerCase() === "y") {
    console.log('\n------- Enter your Details Below⬇️ ---------');

    let studentName = prompt("Enter your First Name: ");
    let lastName = prompt("Enter your Last Name: ");
    let studentNumber = prompt("Enter your 9-digit Student Number: ").trim();
    let studentEmail = prompt("Enter your email address: ").trim();

    // Validate student number (9 digits)
    while (!/^\d{9}$/.test(studentNumber)) {
        console.log('❌ Invalid input. Please enter exactly 9 digits.');
        studentNumber = prompt("Try again. Enter your 9-digit Student Number: ").trim();
    }

    // Validate email
    while (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(studentEmail)) {
        console.log("❌ Invalid email format. Please try again.");
        studentEmail = prompt("Enter a valid email address: ");
    }

    // Ask for modules
    let moduleCount = parseFloat(prompt("How many modules would you like to add?: "));
    let modules = [];

    for (let i = 0; i < moduleCount; i++) {
        let moduleName = prompt(`Enter the name of module ${i + 1}: `);
        let finalMark = parseFloat(prompt(`Enter the final mark for ${moduleName} (%): `));

        while (isNaN(finalMark) || finalMark < 0 || finalMark > 100) {
            console.log('❌ Invalid mark. Please enter a number between 0 and 100.');
            finalMark = parseFloat(prompt(`Try again. Enter the final mark for ${moduleName}: `));
        }

        // Assign Grade
        let grade;
        if (finalMark >= 90) grade = "A";
        else if (finalMark >= 80) grade = "B";
        else if (finalMark >= 70) grade = "C";
        else if (finalMark >= 60) grade = "D";
        else if (finalMark >= 50) grade = "E";
        else grade = "F";

        // Assign Status
        let status = finalMark >= 50 ? "Passed ✅" : "Failed ❌";

        modules.push({
            moduleName: moduleName.trim(),
            finalMark: finalMark,
            grade: grade,
            status: status
        });
    }

    // Create the student object
    let student = {
        firstName: studentName.trim(),
        surname: lastName.trim(),
        email: studentEmail.trim(),
        studentId: studentNumber.trim(),
        modules: modules
    };

    studentDetails.push(student);

    checkAgain = prompt("Do you want to add another student? (yes/no): ");
}

// =========================================
// 📃 PRINTING FORMATTED ACADEMIC RECORDS
// =========================================
console.log(`\n\n🎓 ======= ACADEMIC RECORDS ======= 🎓\n`);

studentDetails.forEach((student, index) => {
    console.log(`Student ${index + 1}:`);
    console.log(`Name: ${student.firstName} ${student.surname}`);
    console.log(`Student ID: ${student.studentId}`);
    console.log(`Email: ${student.email}`);
    console.log(`\n📘 Modules:`);

    student.modules.forEach((module, i) => {
        console.log(`  ${i + 1}. ${module.moduleName}`);
        console.log(`     Final Mark : ${module.finalMark}%`);
        console.log(`     Grade      : ${module.grade}`);
        console.log(`     Status     : ${module.status}\n`);
    });

    console.log(`---------------------------------------------\n`);
});
