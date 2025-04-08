// interface defines the contract of an object 
interface products{
    name:string,
    price:number,
    quantity:number
}
const object1:products={
    name:"anand",
    price:24,
    quantity:23
}
const calculateprice = (object:products):number=>{
   const {price , quantity} = object;
   const calculate = price*quantity;
   return calculate
}
console.log(calculateprice(object1));