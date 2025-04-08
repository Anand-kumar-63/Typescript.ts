"use strict";
// const Numarray:number[]=[1,2,3,4]
// //using array = constructor
// const numberarray:number[] = new Array(1,2,3,4);
// // another method
// // const stringarray:string[] = Array.of("anand","shukla");
// // accessing the Elements of an Array 
// const first = Numarray[0]
// //methods
// console.log(Numarray.length);
const mappingArray = [1, 2, 3, 4, 5];
const newArray = mappingArray.map((item) => item ** 2);
console.log(newArray);
const filterArray = ["one", "two", "three", "four"];
console.log(filterArray.length);
const FilteredArray = filterArray.filter((item) => item.split("").length <= 3);
console.log(FilteredArray);
const ReduceArray = [1, 2, 3, 4, 5];
const ReducedArray = ReduceArray.reduce((number) => number = number + 2);
console.log(ReduceArray);
