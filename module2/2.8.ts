{

    //

   type Todo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const getTodo  = async () : Promise<Todo>  => {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    }

    getTodo()

    // Promise 

    //simulate

    type Something = {something: string}

    const createPromise = () : Promise<Something> => {
        return new Promise<Something>((resolve, reject)=>{
            const data: Something = {something: "something"};

            if(data) {
                resolve(data)
            } else {
                reject("failed to load data")
            }
        })
    }

    // calling promise create function

    const showData = async () : Promise<Something> => {
        const data = await createPromise();
        return data;
        // console.log(data);
    }

    showData();
}
