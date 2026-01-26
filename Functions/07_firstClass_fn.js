/*
First Class Functions:

In JavaScript, functions are treated as first-class citizens. This means that functions can be:
1. Assigned to variables
2. Passed as arguments to other functions
3. Returned from other functions
4. Stored in data structures like arrays or objects
*/

function shout(msg) {      // function ko hum variable mein assign kar sakte hain
    return msg.toUpperCase();  // aur is function ko hum as a value return bhi kar sakte hain
}
function processMessage(fn) {  // function ko hum as a parameter bhi pass kar sakte hain
    console.log(fn("hello"));      // aur is function ko hum call bhi kar sakte hain
}
processMessage(shout);      // function ko call karte waqt hum function ka reference pass kar rahe hain

// Function returning another function