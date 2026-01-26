function add(v1,v2){
    console.log(v1,v2);
}
add();               // undefined undefined

function add2(v1,v2){
    console.log(v1+v2);
}
add2();              // NaN


// Default parameters
function add3(v1=0,v2=0){ // default parameters - if no arguments are passed, v1 and v2 default to 0 or any other value assigned
    console.log(v1+v2);
}
add3();             // 0