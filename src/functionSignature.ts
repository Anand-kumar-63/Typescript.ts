// type details={
//   name:string,
//   age:number,
//   gender?:number,
//   greet:(country:string)=>string // function call signature this greet function has a parameter string and return type is string

// }

// const object1:details={
//     name:"anand",
//     age:12,
//     greet:((country:string)=>`hey guys i am ${object1.name} welcome to my clud and my age is ${object1.age} and i am from ${country}`)
// }

// const object2:details={
//     name:"CoderX",
//     age:12,
//     greet:((country:string)=>`hey guys i am ${object2.name} welcome to my clud and my age is ${object2.age} and i am from ${country}`)
// }

// console.log(object1.greet("india"));
// console.log(object2.greet("germany"));

// function signature of calc
let calc : (a:number,b:number,c:string)=>number ;
calc = (nummberone:number , numbertwo:number , opt:string):number=>{
    if(opt==="add"){
        return nummberone + numbertwo;
    }
    else{
        return numbertwo - nummberone;
    }
}
console.log(calc(4,3,"add"));
console.log(calc(34,45,"subs"));
