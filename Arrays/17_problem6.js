// Use .map() to square each number

let arr=[1,2,3,4,5];
let squaredArr=arr.map(function(num){
    return num*num;
});

console.log("Original array:",arr);
console.log("Squared array:",squaredArr);

// map doest nort change the original array