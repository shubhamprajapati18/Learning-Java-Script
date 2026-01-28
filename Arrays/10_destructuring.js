// Destructuring allows you to extract values from an array and assign them to variables in one line.

let rgb = [255, 200, 500, 100];
let [red, green, ,blue] = rgb;

console.log("Red:", red);       // 255
console.log("Green:", green);   // 200
console.log("Blue:", blue);     // 100 