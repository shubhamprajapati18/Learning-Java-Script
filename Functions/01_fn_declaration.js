/* Functions are blocks of reusable logic.
Instead of repeating the same task again and again, wrap it in a function and reuse it with
different inputs.efine once and use multiple times!
*/

// Function declaration - is the most common way to define a function.
function greet(){  
    console.log("Hello, coders!");
}

greet();     // Calling the function
greet();
greet();





// Function Expression - is storing a function inside a variable.
let hello = function(){
    console.log("Hi, developers!");
}

hello();   // Calling the function expression