// let n = 5;
// for(let i = 0;i<n ;i++){
//     console.log("hello" , i);
// }

// console.log(process.argv)




// ..................................................... moduleExport tut.......................................................................
// const someValue = require("./Math");
// console.log(someValue);



// ........................................................................to send the data of one file to another like all data..............................................................
const math = require("./Math");
console.log(math)
console.log(math.sum(2,3));
console.log(math.mult(2,0));
console.log(math.g);