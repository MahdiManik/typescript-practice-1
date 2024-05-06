// learn object destructuring

const user = {
    id: 356, 
    name : {
        firstName: "Mahdi",
        middleName : "Hasan",
        lastName: "Manik"
    }, 
    contactNo: "01732347801",
    address: "KalaPur"
}

const { contactNo, name: {middleName : midName}, } = user;




// learn array destructuring

const myFriends = ['jou', 'rachel', 'jon', 'jane', 'david'];

const [,, bestFriend, ...rest] = myFriends;