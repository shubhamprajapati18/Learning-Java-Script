// Use rest parameter to accept any number of score and return the total
 
function total(...score){
    let totalScore=0;
    score.forEach(function(val){
        totalScore+=val;
    });
    return totalScore;
}
console.log(total(10,20,15,19));          