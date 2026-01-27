// Filter sirf tab use karna hai jab hamein ek naya array banana hai jismein kuch specific conditions ko satisfy karne wale elements ho

// Filter dikhte hi mnn mein ek new array bana lena hai jismein sirf wo elements ho jo condition ko satisfy karte hain

let arr=[10,15,20,25,30,35,40,45,50];

let filter=arr.filter(function(num){
    return num>=30; 
});

console.log("Original Array:", arr);
console.log("Filtered Array (num >= 30):", filter);