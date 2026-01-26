/*
Lexical Scoping in JavaScript:
Lexical scoping ka matlab hai ki ek function ke andar defined variables aur functions usi function ke andar accessible hote hain, aur nested functions apne parent function ke variables ko access kar sakte hain. JavaScript mein, scope ka determination code ke structure ke basis par hota hai, na ki runtime par.

*/

function outerFunction() {
    let outerVariable = 'I am from outer function';
    function innerFunction() {
        console.log(outerVariable); // inner function apne parent function ke variable ko access kar sakta hai
    }
}