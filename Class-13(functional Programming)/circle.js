let radiuses = [1 ,2 ,4 ,6 ,8]
// Area - new array 

function calculateArea(radius){
    return 3.14 * radius*radius
}

function calculateCircumference(radius){
    return 2*3.14*radius
}


function calculateDiameter(radius){
    return 2*radius
}

function calculate(radiusArr , logic){
  let newArr = []

  for(let i=0 ; i<radiusArr.length ; i++){
     newArr.push(logic(radiusArr[i]))
  }
  return newArr
}

let areas = calculate(radiuses ,calculateArea )
let diameters = calculate(radiuses ,calculateDiameter )
let circumferences = calculate(radiuses ,calculateCircumference )

console.log(areas)
console.log(diameters)
console.log(circumferences)

