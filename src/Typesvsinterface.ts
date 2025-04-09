// type pers1={
//     name:string,
//     age:number
// }
// type objective={
//    object:string,
//    usecase:string
// }
// type data = objective | pers1
// const one :data = {
// name:"jake",
// age:34,
// }

// you cannot do perform intersection and union
interface pers1{
    name:string,
    age:number
}
interface objective{
   object:string,
   usecase:string
}
// interface data extends objective | pers1 instead of this
interface data extends objective,pers1 {}
const one :data = {
name:"jake",
age:34,
object:"",
usecase:""
}
