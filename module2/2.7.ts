{

    //

    // generic constraint with keyof operator

    type vehicle = {
        bike: string;
        car: string;
        ship: string; 
    }


    type Owner1 = "bike" | "car" | "ship";

    type Owner2 = keyof vehicle;

    // const person1: Owner2 = "bike"


    const getPropertyValue = <X, Y extends keyof X>(obj: X, key : Y) => {
        return obj[key];
    }


    const user  = {
        name: "Mahdi",
        age: 26,
        address: "Dhaka"
    }


    //
}