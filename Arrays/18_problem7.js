// Use .filter() to keep numbers greater than 10:
let arr=[5,12,8,20,7,15,3];
let filteredArr=arr.filter(function(num){
    return num>10;
});
console.log("Original array:",arr);
console.log("Filtered array (numbers > 10):",filteredArr);  