{
    //

    //constraints 

    const AddCourseToStudent =<T extends {id: number; name: string; email: string;}> (student: T)=> {
        const course ="Next Level wb development"
        return {
            ...student,
            course
        }
    }


    const student1 = AddCourseToStudent({
    id: 2,
    name: "Mahdi", 
    email: "mahdi@gmail.com", 
    devType: "NLWD"
});


    const student2 = AddCourseToStudent({
    id: 3,
    name: "Manik", 
    email: "manik@gmail.com", 
    hasWatch: "Apple Watch"});






    //
}