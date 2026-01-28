// Sort this array alphabetically and then reverse it.
console.log("Original array changed:");
let names=["Ironman","Spiderman","Batman","Superman","Jhon wick","Captain america"];
names.sort().reverse(); // no need to store in new array, it change the original array
console.log(names);


//To keep the original array unchanged, you must copy it first.
console.log("----------");
console.log("Original array remains unchanged:");
let names2=["Ironman","Spiderman","Batman","Superman","Jhon wick","Captain america"];
let copyname2=[...names2].sort().reverse();
console.log("Original array:",names2);
console.log("Sorted and reversed copy:",copyname2);