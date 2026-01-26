// Closures are functions that have access to variables from another function's scope. This is often used to create private variables or functions.
//ek fn jo return kare ek aur fn ko, and return hone waala fn use kare parent fn ke variable ko

function abc(){
    let a=10; // ye variable abc function ke scope mein hai
    return function(){
        console.log(a); // inner function jo parent function ke variable 'a' ko access kar raha hai
    }
}

