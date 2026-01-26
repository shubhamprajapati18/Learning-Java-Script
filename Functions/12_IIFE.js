//IIFE : Immediately Involked Function Expression
//Aise function jise hum define karte hi turant call kar dete hain

(function(){
    console.log("This is an IIFE - Immediately Invoked Function Expression");
})(); //ye function define hote hi turant call ho jayega

//IIFE ke andar jo bhi variables ya functions define hote hain wo global scope mein nahi jate, isse hum apne code ko encapsulate kar sakte hain aur global namespace ko pollute hone se bacha sakte hain