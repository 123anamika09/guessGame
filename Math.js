const sum = (a,b) => a + b;
// ...g...............other method for direct export.................
// 1..
// module.exports.sum = (a,b) => a + b;
// 2..
// exports.sum = (a,b) => a + b;

const mult = (a,b) => a *  b;
const g = 9.8;
const pi = 9.8;


//  module.exports = 123;


// ....................................to send all the data ............g........................................
let obj = {
    sum : sum,
    mult : mult,
    g : g,
    pi:this.pi,
};
module.exports = obj;
