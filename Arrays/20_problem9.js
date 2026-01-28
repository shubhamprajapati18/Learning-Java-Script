// Use .some() to check if any student has scored below 35.\

let score=[45, 67, 89, 23, 56, 78];
let failed=score.some(num=>{ return num<35;});

console.log("Scores:",score);       
console.log("Is there any student who scored below 35?:",failed);