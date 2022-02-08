
const prompt = require('prompt-sync')();
let size = Number(prompt('Class size'))
console.log("The number of 3 person groups you can have is:"  + Math.trunc   (group3));


if (size % 3 === 0){
console.log("No additional groups are needed"); 
}
else if (size % 3 === 1){
 console.log("one group of 3 and one group of 2");
}
else if (size % 3 === 2){
   console.log("Create one group of 3 and one group of 2");
}