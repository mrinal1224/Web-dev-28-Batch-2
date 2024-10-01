function firstName(name , cb1 , cb2){
    console.log(name)
    cb2(25)
    cb1('Singh') 

}

function lastName(lastName){
    console.log(lastName)
}

function printAge(age){
    console.log(age)
}


firstName('Tanishq' , lastName , printAge)

