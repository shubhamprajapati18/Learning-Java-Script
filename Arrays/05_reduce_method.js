let arr=[10,20,30,40,50];

let ans=arr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
},0); // initial value of accumulator is 0

console.log("Original Array:", arr);
console.log("Sum of all elements using reduce():", ans);