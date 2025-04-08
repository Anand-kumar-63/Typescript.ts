// normal functions
const greet = function(name:string, id:number):string{   
 return `hey ${name} welcome to the company your id is ${id}`
}
console.log(greet("anand" , 13))

const checkforpallin = function(pallin:String):Boolean{
    const pally = pallin.split("").reverse().join("")
    return pally === pallin;
}
console.log(checkforpallin("12321"));


// optional and default parameters
const fuct2 = function(name:string , id?:number){
    return console.log(`hey you ${name}`)
   }
fuct2("anand");

const func = function name(num:number = 12,id:number=34):number{
 return num+id;
}
console.log(func())     

// 