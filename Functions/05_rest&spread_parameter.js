// agar arguments kaisare ho pata na ho to hum rest parameter ka use kar sakte hain

//agar ... function k  parameter space mein lage to wo rest opearator hota hai

function add(...values){ // ye values ek array ban jayega jisme sare arguments honge
    console.log(values); // ye hamesha array return karega
}
add(1,2,3,4,5,6,7,8,9,10); // hum jitne marzi arguments pass kar sakte hain