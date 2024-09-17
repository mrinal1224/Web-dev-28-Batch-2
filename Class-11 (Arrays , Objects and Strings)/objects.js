let obj = {}

// Person


const person1 = {
   name : 'Krishank',
   ownsACar : true,
   marks : 90,
   phone : 1234566
}

// Captain America


let cap = {
    firstName : 'Steve',
    lastName : 'Rogers',
    age : 110,

    allies : ['Hulk' , 'Bucky' , 'Tony Stark'],

    address : {
        country : 'USA',
        state : {
            stateName : 'Manhattan',
            cityName : 'Brooklyn',
            cityPin : 123456
        }
    },

    sayHi : function(){
        console.log('Captain Says hi')
    },

    isAvenger : true


}

// dot notation

console.log(cap.allies[2])


// Bracket notation - HW

console.log(cap.address.state.cityName)

cap.sayHi()

cap.movies = ['Age of Ultron' , 'Civil War' , "winter soldier"]



delete cap.age


cap.isAvenger = false

console.log(cap)






