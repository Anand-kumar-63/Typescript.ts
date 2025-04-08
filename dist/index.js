"use strict";
// const sum = function(a:number,b:number):number{
// const add = a+b;
// return add;
// }
// console.log(sum(3,4));
const Even = function (a) {
    return a % 2 == 0;
};
console.log(Even(3));
const IsDivisible = function (b) {
    return b % 4 === 0 && b % 8 === 0;
};
console.log(IsDivisible(44));
