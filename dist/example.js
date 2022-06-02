"use strict";
let thisIsANumber = 50;
let thisIsAString = 'Hello';
let thisIsABoolean = true;
let specialType = 'Whatever';
const exampleNumber = 5;
function canStudentDrive(age, passsedDrivingTest) {
    if (age >= 16 && passsedDrivingTest) {
        return true;
    }
    return false;
}
let canDrive = canStudentDrive(16, true);
// let studentArray:Array<Student> = [
//     { name:"Bob", age: 16, canDrive: true },
//     { name:"Steve", age: 17, canDrive: true},
//     { name:"Andrew", age: 15, canDrive: false}
// ]
// studentArray.push({name: "Jason", age:16, canDrive: true});
// console.log(studentArray);
// studentArray.pop();
// console.log(studentArray);
// let firstItemInArray = studentArray[0];
// for(let i = 0; i < studentArray.length; i++){
// }
