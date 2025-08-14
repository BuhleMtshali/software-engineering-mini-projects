const prompt = require("prompt-sync")();

//CREATING AN ARRAY TO HOLD THE GRADES
const gradeArray = [];


class Student{
    constructor(name, studentNumber, grade){
        this.name = name
        this.studentNumber = studentNumber
        this.grade = grade
    }

    addStudent(){
       let studentWrapper = {
            studentName: this.name,
            idNumber: this.studentNumber,
            studentGrade: this.grade
        }
        gradeArray.push(studentWrapper);
        console.log(`✅ student succeeffuly logged`)
    }
}

function logStudent(){
    const student = new Student('Zano', 9823423, 76);
    student.addStudent();
    console.log(student);
}

logStudent()