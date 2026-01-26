/*
Declarations are hoisted
Expressions are not hoisted
*/

hello(); // works [Hoisted]
function hello() {
    console.log("Hi");
}


greet(); // error [Not Hoisted]
const greet = function () {
    console.log("Hi");
};