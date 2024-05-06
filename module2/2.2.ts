{
    //

    // learn interface

    type User1 = {
        name: string;
        age: number;
    }

    interface User2 {
        name: string;
        age: number;
    }


    const user1 : User1 = {
        name: "Mahdi",
        age: 32
    }
    const user2 : User2 = {
        name: "Manik",
        age: 30
    }
    
    
    type UserWithRoll1 = User1 & {roll: string}

    interface UserWithRoll2 extends User2 {roll: string}

    const user3 : UserWithRoll1 = {
        name: "Mahdi",
        age: 32,
        roll: "2nd"
    }

    const user4 : UserWithRoll2 = {
        name: "Mahdi",
        age: 32,
        roll: "2nd"
    }


// ============================
 
// in js ==> object => object, array => object, function => object


    // Array

    type Roll1 =  number[];

    interface Roll2 {
        [index : number] : number;
    }

    const rollNumber1 : Roll2 = [1,2,3,4,5]




    // Function

    type Add1 =(nam1: number, num2: number)=>  number; 

    interface Add2 {
        (nam1: number, nam2: number) : number
    }

    const add : Add2 = (num1, num2) => num1+num2

    //
}