// use .every() to check if all num are even.

let numbers=[2,4,6,8,10,12];
let allEven=numbers.every(num=>{
    return num%2==0;
});

console.log("Numbers:",numbers);
console.log("Are all numbers even?:",allEven);