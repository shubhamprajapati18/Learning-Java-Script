// Replace "BMW" with "Mercedes" in the cars array.

let cars = ["Toyota", "BMW", "Audi"];
let index=cars.indexOf("BMW");
if(index !== -1){
    cars[index]="Mercedes";
};
console.log(cars); // Output: ["Toyota", "Mercedes", "Audi"]