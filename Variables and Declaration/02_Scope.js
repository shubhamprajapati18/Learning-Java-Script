//var------------------------------------------------------------------------------------------------

//Global scope
var a = 10;  //pure code mein kahi bhi use ho sakta hai


//Function scope
function fn1() {
  var c=30;  //sirf iss function ke andar use ho sakta hai
}

//Block scope
{
    var b = 20;  //pure code mein kahi bhi use ho sakta hai
}

//let------------------------------------------------------------------------------------------------

//Block scope
{
    let d = 40;  //sirf iss block ke andar use ho sakta hai
}

//function scope
function fn2() {
    let e = 50;  //sirf iss function ke andar use ho sakta hai
}

function fn3() {
    if(true) {
        let f = 60;  //sirf iss if block ke andar use ho sakta hai
    }
}

