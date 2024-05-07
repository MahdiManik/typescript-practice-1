{

    //

    // generic in function


    const createArray = (param: string) : string[] => {
        return [param]
    }


    const createArrayWithGeneric = <T> (param : T) : T[] => {
        return [param];
    }
    const createArrayWithGenericTuple = <T, Q> (param1 : T, param2: Q) : [T, Q] => {
        return [param1, param2];
    }

    const res = createArray('Bangladesh') 

    const resGenericTuple = createArrayWithGenericTuple <string, number> ('Bangladesh', 333)


    const resGeneric = createArrayWithGeneric<boolean > (true)

    const resGenericString = createArrayWithGeneric<string > ('Bangladesh')

    const resGenericObj = createArrayWithGeneric<{id: number; name: string;}>({id: 399, name: "Mr. X"}) 


    const AddCourseToStudent =<T> (student: T)=> {
        const course ="Next Level wb development"
        return {
            ...student,
            course
        }
    }


    const student1 = AddCourseToStudent({name: "Mahdi", 
    email: "mahdi@gmail.com", devType: "NLWD"});

    const student2 = AddCourseToStudent({name: "Manik", 
    email: "manik@gmail.com", hasWatch: "Apple Watch"});


    //
}