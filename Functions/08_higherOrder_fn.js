/*
HOF wo functions hote hain jo dusre functions ko as arguments lete hain ya fir functions ko return karte hain. JavaScript mein functions first-class citizens hote hain, isliye hum higher-order functions bana sakte hain.
*/
function createMultiplier(x) {   // higher-order function jo ek function return karta hai
    return function (y) {        // inner function jo multiplier ka kaam karta hai
        return x * y;            
    };
}
let double = createMultiplier(2);  // double ab ek function hai jo kisi bhi number ko 2 se multiply karega
console.log(double(5));            // 5 ko 2 se multiply karta hai

