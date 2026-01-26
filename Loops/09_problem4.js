// Ask the User for a number and print whether each number from 1 to that number is even or odd.

let userInput = prompt("Enter a number:");
for (let i=0; i<=userInput; i++){
    if (i%2===0){
        console.log(`${i} is Even`)
    } else if(i%2!==0){
        console.log(`${i} is Odd`)
    }
}