const prompt = require("prompt-sync")();

//CREATING AN ARRAY TO HOLD THE GRADES
const gradeArray = [];


class Student{
    constructor(name, studentNumber, studentModule, grade){
        this.name = name
        this.studentNumber = studentNumber,
        this.module = studentModule,
        this.grade = grade
    }

    addStudent(){
            let studentWrapper = {
            studentName: this.name,
            idNumber: this.studentNumber,
            studentModule: this.module,
            studentGrade: this.grade
        }
            gradeArray.push(studentWrapper);
            if(studentWrapper.studentGrade >= 80){
                console.log("You got an A+")
            }
        }
       
    }


function logStudent(){
    let studentName = prompt("Enter your name: ");
    let studentNumber = parseFloat(prompt("Enter your student number: "));
    let module = prompt("Enter the name of you module: ");
    let studentGrade = parseFloat(prompt("Enter your grade: "));

    const student = new Student(studentName, studentNumber, module, studentGrade);
    student.addStudent();
    console.log(gradeArray);
}

logStudent()