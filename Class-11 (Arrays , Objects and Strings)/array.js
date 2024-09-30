let cars = ['BMW', 'Porshe', 'Ferrari', 'Mercedes'];

// Push
cars.push('Bentley');
console.log(cars); // ['BMW', 'Porshe', 'Ferrari', 'Mercedes', 'Bentley']

// Pop
const firstDeletedCar = cars.pop();
console.log(firstDeletedCar); // 'Bentley'
console.log(cars); // ['BMW', 'Porshe', 'Ferrari', 'Mercedes']

// Unshift
cars.unshift('Urus');
console.log(cars); // ['Urus', 'BMW', 'Porshe', 'Ferrari', 'Mercedes']

// Shift
cars.shift();
console.log(cars); // ['BMW', 'Porshe', 'Ferrari', 'Mercedes']

// forEach
cars.forEach((car, index) => {
  console.log(`Car ${index + 1}: ${car}`);
});

// includes
const hasFerrari = cars.includes('Ferrari');
console.log(hasFerrari); // true

// indexOf
const indexOfPorshe = cars.indexOf('Porshe');
console.log(indexOfPorshe); // 1

// slice
const selectedCars = cars.slice(1, 3);
console.log(selectedCars); // ['Porshe', 'Ferrari']

// splice (remove and add items)
cars.splice(2, 1, 'Lamborghini'); // Removes 'Ferrari' and adds 'Lamborghini'
console.log(cars); // ['BMW', 'Porshe', 'Lamborghini', 'Mercedes']

// concat
const moreCars = ['Audi', 'Jaguar'];
const allCars = cars.concat(moreCars);
console.log(allCars); // ['BMW', 'Porshe', 'Lamborghini', 'Mercedes', 'Audi', 'Jaguar']

// join
const carsString = cars.join(', ');
console.log(carsString); // 'BMW, Porshe, Lamborghini, Mercedes'

// reverse
const reversedCars = cars.slice().reverse(); // Using slice to avoid modifying original array
console.log(reversedCars); // ['Mercedes', 'Lamborghini', 'Porshe', 'BMW']

// map
const upperCaseCars = cars.map(car => car.toUpperCase());
console.log(upperCaseCars); // ['BMW', 'PORSHE', 'LAMBORGHINI', 'MERCEDES']

// filter
const carsWithR = cars.filter(car => car.includes('r'));
console.log(carsWithR); // ['Porshe', 'Lamborghini', 'Mercedes']

// find
const findCarWithB = cars.find(car => car.startsWith('B'));
console.log(findCarWithB); // 'BMW'

// some
const someCarsStartWithP = cars.some(car => car.startsWith('P'));
console.log(someCarsStartWithP); // true

// every
const everyCarHasLetterE = cars.every(car => car.includes('e'));
console.log(everyCarHasLetterE); // false

// sort
const sortedCars = cars.slice().sort(); // Using slice to avoid modifying original array
console.log(sortedCars); // ['BMW', 'Lamborghini', 'Mercedes', 'Porshe']