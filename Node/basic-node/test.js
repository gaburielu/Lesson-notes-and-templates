const importedVariable = require('./export.js');
const os = require('os');

// console.log(importedVariable)
console.log(os);

const name = "test";

// console.log(global);

// let count = 0;

// const int = setInterval(()=>{
//     console.log(`the count is ${count}`);
//     count++;
//     if(count == 1){
//         console.log(__dirname);
//     }
//     if(count == 2){
//         console.log(__filename);
//     }
// }, 2000);

// setTimeout(() => {
//     console.log("Interval end")
//     clearInterval(int);
// }, 10000);