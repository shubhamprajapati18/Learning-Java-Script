// Hoisting impact 

/*
Hoisting ka matlab hai ki aap variable ko uske declaration se pehle bhi access kar sakte ho.

Hoisting ->  ek variable ko jab js mein banaate hai to wo variable do hisso mein toot jata hai and uska declaration part upar chala jata hai, and uska initialization part neeche reh jata hai

[var] hoisting hoti hai

[Let & Const] Exception but TRUE that it is also hoisted. but no value set not even undefined until the line where it is initialized is executed.  that is called Temporal Dead Zone(TDZ)


*/

// Var--------------------------------------------------------------------------------------------------

console.log(a);   // undefined
var a = 10;

/*
var a;            // declaration hoisted (value = undefined)
console.log(a);
a = 10;           // initialization later
*/

// Let--------------------------------------------------------------------------------------------------
/*It stays in Temporal Dead Zone (TDZ)
From start of scope till its declaration line
*/

console.log(b);   // ReferenceError
let b = 20;       //TDZ ends here
