// Use reduce() to find the sum of this array:

let arr=[5,12,8,20,7,15,3];
let sum=arr.reduce(function(acc,num){
    return acc+num;
},0);

console.log("Array:",arr);
console.log("Sum of array elements:",sum);