// Map sirf tab use karna hai jab hamein ek naya array banana hai pichhle array ke data ke basis par

// Map dikhte hi mnn mein ek new array bana lena hai

let prices = [100, 200, 300];
let taxed = prices.map(function(p){
    return p + p*0.1; // har price mein 10% tax add karna hai
});

console.log("Original Prices:", prices);
console.log("Prices with Tax:", taxed);