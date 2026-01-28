// use .find() to get the first even number from this array:

let numbers = [1, 3, 7, 8, 10, 11, 12];
let firstEven=numbers.find(num => { return num%2===0;})

console.log("Array:",numbers);
console.log("First even number in the array:",firstEven);