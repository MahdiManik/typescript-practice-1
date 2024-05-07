{

    //

    // learn generic type 

    type GenericArray<T> = Array<T>

    // const rollNumbers : number[] = [2,3,4,5 ];
    const rollNumbers : GenericArray<number> = [2,3,4];

    // const mentors : string[] = ['Mr. X', 'Mr. Y', 'Mr. Z']
    const mentors : GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z']

    // const isMan : Array<boolean> = [true, false, true, false];
    const isMan : GenericArray<boolean> = [true, false, true, false];


    const user: GenericArray<{name: string, age: number}> = [
        {
            name: "Mahdi",
            age: 30,
        },
        {
            name: "Manik",
            age: 33,
        },
    ]




    // generic tuple

    type GenericTuple <X, Y> = [X, Y];

    const manus : GenericTuple<string, string> = ['Mr. X', 'Mr. Y'];

    const userWithId : GenericTuple <number, {name: string, email: string}> = [2345, 
        {name: "Mahdi", email: "a@gmail.com"}]


    //
}