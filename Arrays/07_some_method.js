// some method checks if at least one element in the array satisfies a condition

let arr=[5,10,15,20,25];

let anyone=arr.some(function(num){
    return num>15;
});

console.log("Original Array:", arr);
console.log("Is there any element greater than 15 using some()?:", anyone);