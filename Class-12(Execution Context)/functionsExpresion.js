var a = 14

var b= 23

function greet(){
    console.log("hi")
}

greet()


// Functions as Expressions v, First Class citiziens

var greet2 = function(){
    console.log('Hello')
}

greet2()

function add(a,b){
     var sum = a+b
     return sum
}