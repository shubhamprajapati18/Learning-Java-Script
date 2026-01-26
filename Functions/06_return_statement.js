//Jaha se function ka execution complete ho jata hai waha se function control ko wapas caller ko return kar deta hai
function sum(a, b){
    let total = a + b;
    return total; // return statement function ko turant hi exit kar deta hai aur value ko caller ko return kar deta hai
    console.log("This line will not be executed"); // ye line kabhi execute nahi hogi kyuki return ke baad function exit ho chuka hoga
}
let result = sum(5, 10); // function call
console.log(result); // 15