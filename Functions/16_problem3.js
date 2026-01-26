//Pass a fun into another function and execute it inside


function abc(val){
    val();
}

abc(function(){
    console.log("Hello!!!!!!!");
});