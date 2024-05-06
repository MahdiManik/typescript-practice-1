// Spread Operator
// Reest Operator
// Destructuring




// Learn Spread Operator

let bros1 : string[] = ['Belal', 'Mostofa', 'Rofiq', 'Alumgir']
let bros2 : string[] = ['Siham', 'Kala', 'Sada', 'Sohid']

bros1.push(...bros2)



const mentor1 = {

    typescript: 'Mezba',
    redux: 'Mir', 
    dbms: 'Mizan'
}

const mentor2 = {
    prisma: 'Firoz',
    NextJS: 'Tonmoy',
    cloud: 'Nahid'
}

const mentorList={
    ...mentor1,
    ...mentor2
}


// learn rest operator

const greetFriends = (...friends : string[]) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    friends.forEach((friend : string) => console.log(`Hi ${friend}`))
}

greetFriends("Abul", "Kabul", "Babul")




