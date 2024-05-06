// Learn Type Alice



// Type Alice in object

type student = {
        name: string;
        age: number;
        gender: string;
        contactNo? : string;
        address: string;  
}



const student1 : student = {
    name: 'Mahdi',
    age: 58,
    gender: 'male',
    contactNo: '01700000000',
    address: 'Tangail'
}



const student2 : student = {
    name: 'Manik',
    age: 35,
    gender: 'male',
    address: 'Tangail'
}


const student3 : student = {
    name: 'Kala Chan',
    age: 90,
    gender: 'male',
    address: 'Tangail'
}





// Type Alice in string, boolean, and number

type userName = string;
type IsAdmin = boolean;
type myRolNo = number;

let userName : userName = "Mahdi";
let isAdmins : IsAdmin = true;
let myRolNumber : myRolNo = 22;




// Type Alice in function

type Add = (num1: number, num2: number) => number;

const add : Add = (num1, num2) => num1 + num2;



