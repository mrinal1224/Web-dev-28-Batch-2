let radiuses = [1 ,2 ,4 ,6 ,8]
// Area - new array 

function calculateArea(radiusArr){
  let areaArr = []

  for(let i=0 ; i<radiusArr.length ; i++){
     areaArr.push(3.14 * radiusArr[i]*radiusArr[i])
  }
  return areaArr
}

let finalAreas = calculateArea(radiuses)

console.log('Radiuses' , radiuses)

console.log('Areas ' , finalAreas)

//Diameter- new array


function calculateDiameter(radiusArr){
    let diameterArr = []

   for(let i=0 ; i<radiusArr.length ; i++){
    diameterArr.push(2* radiusArr[i])
   }

   return diameterArr
}

let finalDiameters = calculateDiameter(radiuses)
console.log('Diameters', finalDiameters)



// Circumference- new array

function calculateCircumference(radiusArr){
    let circumArr = []

   for(let i=0 ; i<radiusArr.length ; i++){
    circumArr.push(2*3.14*radiusArr[i])
   }

   return circumArr
}

let finalCircumferences = calculateCircumference(radiuses)

console.log('Circumferences' , finalCircumferences)