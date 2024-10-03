// let myArr = [1 ,4 ,3 ,13 ,12 ,17 ,20]

// Filter out all the even numbers in a new array
// Create a function for this

// function getEven(arr){
//   let evenArr = []

//   for(let i=0 ; i<arr.length ; i++){
//       if(arr[i]%2 ==0){
//         evenArr.push(arr[i])
//       }
//   }

//   return evenArr


// }

// let evenArr = getEven(myArr)

// console.log(evenArr)

// Filter Method


let numbersArr = [1 ,2 ,5 ,4,7 ,8 ,10 ,13 ,17]


function checkEven(num){
   return num%2==0
}

let evenNums = numbersArr.filter(checkEven)

console.log(evenNums)



const transactions = [-1000 , 2000 , 8000 , -4000]

// Filter out all withdrawls










