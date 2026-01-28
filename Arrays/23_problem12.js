// Merge two arrays using spread operator

let a=[1,2,3];
let b=[4,5,6];

let c = [...a,...b];

console.log("Merged Array:",c);

// Add "India" before other country in arrays
let countries=["USA","UK","Canada","Australia"];
let updatedArr=["India",...countries];

console.log("Updated Countries Array:",updatedArr);