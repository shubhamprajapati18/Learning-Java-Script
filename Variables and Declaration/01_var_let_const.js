// var


var a;       // Declaration
var a=12;    // Declaration and Initialization(first value dena)

var a;       // Re-declaration allowed
var a=15;    // Re-assignment allowed

/*
window mein add hota hai
function scoped hota hai
aap firse declare kar sakte ho same name se & error nahi aayega
hoisting hoti hai (declaration upar chali jati hai)
*/


//------------------------------------------------------------------------------


// let


let dulha= "abc";
let dulhan= "xyz";

dulha= "def";  // Re-assignment allowed

/*
value change kar sakte ho
block scoped hota hai
aap firse declare nahi kar sakte same name se & error aayega
hoisting nahi hoti
*/

//------------------------------------------------------------------------------


// const


const pi=3.14;

/*
value change nahi kar sakte
block scoped hota hai
aap firse declare nahi kar sakte same name se & error aayega
hoisting nahi hoti
*/