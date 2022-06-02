let thisIsANumber:number = 50;

let thisIsAString:string = 'Hello';

let thisIsABoolean:boolean = true;

let specialType:any = 'Whatever';

const exampleNumber = 5;

function canStudentDrive(age:number, passsedDrivingTest:boolean) : boolean{
    if(age >= 16 && passsedDrivingTest){
        return true;
    }

        return false;
    
}

let canDrive = canStudentDrive(16, true);

interface Student {
    name:string;
    age:number;
    canDrive:boolean;
}

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