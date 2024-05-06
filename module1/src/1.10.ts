// Learn Union Types and Intersection type 

{

// 
// union types

// type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
// type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

// type Developer = FrontendDeveloper | FullStackDeveloper;

// const newDeveloper : FrontendDeveloper = "juniorDeveloper";



type User = {
    name: string;
    email?: string;
    age: number;
    gender: 'male' | 'female';
    bloodGroup: "A+" | "B+" | "AB+" | "O+"
}


const user : User = {
    name: "Alif",
    age: 23,
    gender: 'male',
    bloodGroup: 'B+'
}

//




// Intersection type 

type FrontendDeveloper = {
    skills: string[];
    designation1: 'FrontendDeveloper';
}

type BackendDeveloper = {
    skills: string[];
    designation2: 'BackendDeveloper';
}


type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;


const fullStackDeveloper : FullStackDeveloper = {
    skills: ['HTML', 'CSS', 'JS', 'EXPRESS', 'NODEJS'],
    designation1: 'FrontendDeveloper',
    designation2: 'BackendDeveloper'
}



// 

}

