//every method : checks if all elements in the array satisfy a condition 

let arr=[5,10,15,20,25];

let everyone=arr.every(function(num){  // 
    return num>15;  //
});

console.log("Original Array:", arr);
console.log("Are all elements greater than 15 using every()?:", everyone); //