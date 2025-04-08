// const Numarray:number[]=[1,2,3,4]
// //using array = constructor
// const numberarray:number[] = new Array(1,2,3,4);
// // another method
// // const stringarray:string[] = Array.of("anand","shukla");

// // accessing the Elements of an Array 
// const first = Numarray[0]
// //methods
// console.log(Numarray.length);

const mappingArray:number[] = [1,2,3,4,5] 
const newArray:number[] = mappingArray.map((item:number)=>item**2)
console.log(newArray); 


const filterArray:string[] =["one","two","three","four"];
console.log(filterArray.length);
const FilteredArray:string[] = filterArray.filter((item:string)=>item.split("").length<=3) 
console.log(FilteredArray);


const ReduceArray:number[] = [1,2,3,4,5]
const ReducedArray:number = ReduceArray.reduce((number)=>number = number+2)
console.log(ReduceArray);
