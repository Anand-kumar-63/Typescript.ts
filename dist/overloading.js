"use strict";
// // function overloading in js
// let calculate:(a:number,b:number)=>number // Function call signature
//  calculate = (a:number,b:number):number=>{   // Define function definition
//     return a+b;
//  }
// console.log(calculate(2,3))
// // arithemetic operations on the gerneric datatypes
// class GenericNumber<T> {
//     add: (a: T, b: T) => T; // add function call signature 
//     constructor(add: (a: T, b: T) => T) {
//       this.add = add;
//     }
//   }
// const num = new GenericNumber<number>((a: number, b: number): number => {
//   return a + b;
// });
// const res = num.add(5, 7);
// console.log(res);
// const concat = new GenericNumber<string>((a:string,b:string):string =>{
//   return a+b;
// })
// console.log(concat.add("anand","akshat"));
// when we need to pass different types  of arguments in the function using generic type
// function athi<g>(a:g,b:g):void{
//     console.log(typeof a);
//     console.log(typeof b);
// } 
// athi<number>(2,34);
// function athical<g,t>(a:g,b:t){
//     console.log(typeof a);
//     console.log(typeof b);
// }
// athical<number , string>(2,"swjkbdj")
// athical(3,"adkns")
function athi(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
athi(2, 3);
athi("anand", "jfdbvuv");
athi("vjbd", 4);
