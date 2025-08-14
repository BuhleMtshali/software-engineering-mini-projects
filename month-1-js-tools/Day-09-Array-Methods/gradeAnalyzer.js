const prompt = require("prompt-sync")();

//CREATING AN ARRAY TO HOLD THE GRADES
const gradeArray = [];


class Student{
    constructor(name, studentNumber, grade){
        this.name = name
        this.studentNumber = studentNumber
        this.grade = grade
    }
}