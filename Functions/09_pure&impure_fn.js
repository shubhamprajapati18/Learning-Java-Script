// Pure Function: A pure function is a function that, given the same input, will always return the same output and does not have any side effects (it does not modify any external state or variables).
//jo baahar ki value ko na 

//Impure Function: An impure function is a function that may produce different outputs for the same input or has side effects (it modifies external state or variables).
//baahar ki value ko modify kare ya us par depend kare

let a=12;
function PureFn(v1,v2){
    return v1+v2; // ye function hamesha same output dega agar same input milega aur isme koi side effect nahi hai          
}

function ImpureFn(v1,v2){  
    return v1+v2+a; // ye function baahar ki variable 'a' par depend karta hai, isliye ye impure function hai
}

console.log(PureFn(2,3));