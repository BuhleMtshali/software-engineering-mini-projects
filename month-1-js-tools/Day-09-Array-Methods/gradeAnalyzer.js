const prompt = require("prompt-sync")();

//CREATING AN ARRAY TO HOLD THE GRADES
const gradeArray = [];


class Student{
    constructor(name, studentNumber, module, grade){
        this.name = name
        this.studentNumber = studentNumber,
        this.module = module,
        this.grade = grade
    }

    addStudent(){
        if(this.name.length() > 0 && Number.isInteger(this.grade)){
            let studentWrapper = {
            studentName: this.name,
            idNumber: this.studentNumber,
            studentModule: this.module,
            studentGrade: this.grade
        }
            gradeArray.push(studentWrapper);
            console.log(`✅ student succeeffuly logged`)
        } else {
            console.log("🚫 Student cannot be added")
        }
       
    }
}

function logStudent(){
    let studentName = prompt("Enter your name: ");
    let studentNumber = parseFloat(prompt("Enter your student number: "));
    let studentGrade = parseFloat(prompt("Enter your grade: "));



    const student = new Student('Zano', 9823423, 76);
    student.addStudent();
    console.log(gradeArray);
}

logStudent()