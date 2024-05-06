// learning function
// normal function
// arrow function

{ 


function add(num1: number, num2 : number ) : number {
    return num1 + num2;
}
add(3,3)

const addArrow = (num1 : number, num2 : number): number => num1+num2;

// object --> function --> is call method

let poorUser ={
    userName: 'Mahdi',
    balance: 0,
    addBalance(balance: string){
       `My new balance is ${this.balance + balance}`;
    }
}



const arr : number[] = [1,2,4,];

const newArr : number[] = arr.map((elem : number) : number => elem * elem)





}