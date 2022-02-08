
const prompt = require('prompt-sync')();
let num = Number(prompt('Class size'))
let group3 = num / 3;
console.log("The number of 3 person groups you can have is:"  + Math.trunc   (group3));
let group2 = (num % 3);
if (group2 === 0){
console.log("No additional groups are needed"); 
}
else if (group2 ===1){
 console.log("Not ennough students to form additional group");
}
else if (group2 ===2){
   console.log("Create one 2 person group");
}