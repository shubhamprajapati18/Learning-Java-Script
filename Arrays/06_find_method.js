// Finding the first element that satisfies a condition using find() method

let arr=[1,2,3,4,5];

let found=arr.find(function(num){
    return num>3;
});

console.log("Original Array:", arr);
console.log("First element greater than 3 using find():", found);