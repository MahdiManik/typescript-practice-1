{

//

// ternary operator || optional operator || nullish coalescing





//ternary operator
let age: number = 18;

// if (age >= 18 ) {
//     console.log('adult');
// }
// else {
//     console.log("not adult");
// }


const isAdult = age >= 18 ? 'adult' : "not adult";

// console.log({isAdult});





// nullish coalescing

// null / undefine --> decision making

const isAuthenticated = ""; 

const result1 = isAuthenticated ?? 'Guest';

const result2 = isAuthenticated ? isAuthenticated : 'Guest';

console.log({result1}, {result2});





type User = {
    name: string;
    address: {
        city: string; 
        road: string;
        presentAddress : string;
        permanentAddress?: string;
    }
} 


const user : User = {
    name: "Mahdi",
    address: {
        city: "Dhaka",
        road: "kala road",
        presentAddress: "Madhupur",
    }

}

const permanentAddress = user?.address?.permanentAddress ?? "No PermanentAddress";
console.log({permanentAddress});


//

}