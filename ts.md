<!-- type Annotation  -->

defining the type of the variable dynamically
var num:number = 45
var

<!-- lec6 -->

## [Any] type in ts

- you can change the value of the variable usinng any type there is no type checking while using type any...
  let variable:any = 45;
  varaible = "anand"

[Unknown] type in ts

- The unknown type is a safer-alternative to any because it still enforces type checking and type safety
- varibales of type unknown can hold values of any type , but you must perform type checks before using them in specific ways
  type checking - in ts can checks for the type you are intialising with if you try to change it
  type safety - checks for different properties to use on the variable

let num:unknown;
num = 2;
if(type of num === "number"){
statement
}
// we dont know the data returning it can be boolean , string mor a number
async function:promise<unknown> {
const response = await fetch("url")
const jsondata = response.json()
retrun jsondata;
}

<!-- lec 7 Fucntion invocation , decalaration and return type -->

const checkforpallin = function(pallin:String):Boolean{
const pally = pallin.split("").reverse().join("")
return pally === pallin;
}
console.log(checkforpallin("12321"));

<!-- lec 8 type inference -->

let firstname = "dsvjdb":
//the ts compiler infers(assumes) the type string for the variable name
let num = 14;
// the ts compiler infers the type number for the variable num

- Use type inference for simple cases where the assigned value clearly indicates the intended type.
- When in dought provide explicit annotation to make your intentions clear
- Avoid relying on inference too heavily when the assigned value is too complex and ambitious

<!-- lec9 Optional and Default Parameter in functions -->

const func = function name(num:number = 12,id:number=34):number{
return num+id;
}
console.log(func())

// how to you define optional parameters .. argument followed by question mark .. now you can leave the parameter corresponding to it or can leave it.
const fuct2 = function(name:string , id?:number){
return console.log(`hey you ${name}`)
}
funct2("anand");
Here id is an optional parameter..

<!-- lec 10 Array in ts-->

const Array:number[]=[1,2,3,4]
//using array = constructor
const numberarray:number[] = new Array(1,2,3,4);
// another method
const stringarray:string[] = array.of("anand","shukla");

// accessing the Elements of an Array
cosnt first = arrya[0]
//methods
console.log(array.length);

<!-- lec 11 Methods in Array -->

// push
const fruits = ["aaple","mcp","dvcd"]
const updatelist = fruits.push("ahskat")

//pop
const lostdata = fruits.pop()
console.log(lostdata);

// iterating over the array using loops like for , for..of ,or array methods like foreach methods
fruits.foreach((fruit:string)=>console.log(fruit));

// map , filter and reduce

<!-- lec 14 objects -->

- used to represent data with the key value pairs
  obj1:{type}={object}
  const person3: {
  name: string;
  age: number;
  occupasion: string;
  location: {
  city: string;
  country: string;
  };
  } = {
  name: "akash kumar",
  age: 34,
  occupasion: "government servent",
  location: {
  city: "lucknow",
  country: "india",
  },
  };

// type Alias in ts
- Type alias is way to give name to a specific type or combination of types
- It allows you to create custom name for a type , making it easier to reuse and refer to the same type to Different parts of the code
- Type alias provides better redability , usability , organisation of the complex types

syntax :
(start with small letter)type (start with capital letter)Person ={
 name: string;
 age: number;
 occupasion: string;
 location: {
   city: string;
   country: string;
}}
- And whatever fields are there in the type Person should be included in the object you are going to create 
and if you want to make any field optional you have to write it inside type object followed be ?
(start with small letter)type (start with capital letter)Person ={
 name: string;
 age: number;
 occupasion: string;
 class?:string
 location: {
   city: string;
   country: string;
}}

- now can use this type to create multiple people 
 
 person4:Person ={
    name:"",
    age:"",
    occupassion:"",
    location:{
        city:"",
        country:""
    }}

<!-- lec 15 call Signature in ts -->\
- function signature is only the parameter type and what is the type that returns or function signature is only the annotation of function  
 without the logic of function  
- function call signature refers to declaration and or defintion of function , which includes the function name , parameter and return type. it defines the structure and type information of the function withtout including the function implementation or body
- function call signatures are typically used in object type notations to describe the shape of the functions within the object types
- In TypeScript, a function call signature is a way to describe the shape of a function, including:
The parameters it takes (and their types),
The return type of the function
Ensure functions follow a specific contract

example : (param:string[paramter type])=>string[return type of function]
- ()=>void
this function takes no argument and return void
- let gree = (a:string , b:string)=>void;

- type GreetFunction = (name: string, age: number) => string;
  const sayHi: GreetFunction = (name, age) => {
   return `Hello ${name}, you are ${age} years old.`;
  };
 
>>type GreetFunction = (name: string, age: number) => string;
  is the function call signature.
  It means: any function of type GreetFunction must take a string and a number and return a string.


<!-- lec 16 enums in ts -->
- when have to store multiple values in the type of an object but to use one in multiple objects
- In ts when the enums constants are not ecplicitly assign the values then they are automatically assigned inceamental numeric values starts from 0 the default numric value for the first enum constant is zero 

// defining enum
enum roles{
    admin, 
    user 
}
// defining type
type Logindetails ={
    name:string,
    email:string,
    password:string,
    role:roles
}

const user1:Logindetails={
    name:"anand",
    email:"dkncjdnc.hdiscn",
    password:"cvkdnvk",
    role:roles.admin
}
const user2:Logindetails={
    name:"anansdvd",
    email:"dkncjdnc.hdiscn",
    password:"cvkdnvk",
    role:roles.user
}
console.log(user2);
console.log(user1);

<!-- lec 17 tuples in ts -->


<!-- lec 18 Union and Intersection -->
- Union types allows you to specify a varaible can hold values of multiple types.
- you use the |(pipe) symbol to define the union type.
- In ts when you using a Union type, it is essential to ensure that atleast one of the types in the unoin includes all the required properties
const function = (value: string|number|boolean)=>{}

// To format a number to 2 decimal points
3.33189473947 == 3.33
use Math.round(num*100)

Example--
// one variable can contain multiple values using | 
// a function that accept a argument of type boolean or string or number and returns different values accordingly
const doit = (value:String|number|boolean): String|number|boolean=>{
    if(typeof value === 'number'){
        console.log(value**2)
        return value**2;
    }
    else if(typeof value === 'string'){
      console.log(value)
      return value.toLowerCase();
    }
    else if(typeof value === 'boolean'){
        console.log(!value)
        return !value
    }
    else{
        throw new Error("Enter the valid value")
    }

}
doit("anand")
doit(45);
doit(true);
const Returnvalue = (value:string|number|boolean):string|number|boolean=>{
     if(typeof value === 'string'){
        return value.toLowerCase()
     }
     if(typeof value === 'number'){
        return Math.round(value*100)/100;
     }
     if(typeof value === 'boolean'){
         if(value === true){
            return "yes"
         }
         else{
            return "No"
         }
     }
     else{
        throw new Error("Enter the valid value in the function");
     }
}
console.log(Returnvalue("anand"))
console.log(Returnvalue(45.3784698))
console.log(Returnvalue(true))

# intersection &
- use to combine multiple type into the single type
-  can be used using &
// inetersection AND union difference
type person = {
  name: string;
  email: string;
  id: number;
};
type employee = {
  emp_id: string;
  emp_email: string;
};
type officeemployee = person | employee; // the object of type this can have all the fields of person or employee or both , should have atleast the data of one type
const officedata: officeemployee = {
  name: "anand",
  email: "jcbdicd",
  id: 628136,
};

// but in intersection you have to incldude the fields of both the types

type person1 = {
  name: string;
  email: string;
  id: number;
};
type employee1 = {
  emp_id: string;
  emp_email: string;
};
type officeemployee1 = person1 & employee1; // the object of type this should contain all the fields i both the types
const officedata1: officeemployee1 = {
  name: "anand",
  email: "jcbdicd",
  id: 628136,
  emp_email:"bcdudbcu",
  emp_id:5327153
};


<!-- lec 19 Generics in ts -->
- Generics is used tousable  [create recomponents or functions] that can work with multiple data types
- To deal with multiple datatypes use generics instead of union as in union you have to explicitly type in every type you wwant as a parameter
 funtion hey:<t> (value:<t>) :<t>{
  return value
 }

 console.log(hey(1))
 console.lof(hey("anand"))

- you can pass in multiple data of different type in the given function
- in the place of t you can use any string

// function overloading in js
const fuct = (a:number,b:number)=>number  // function call signature
const result = fuct(2,3)=>{
 return a+b;
}
console.log(fuct);

//so by using generics
function add<t>(a:t,b:t):t=>{
  console.log(typeof a);
  console.log(typeof b);
  return a+b;
}
const result = add<number , number>(a:2,b:3)
console.log(result);


# constructor 
A constructor is a special method in a class that is automatically called when you create an object (or instance) of that class. It’s used to initialize the object’s properties.
Step	                                     Purpose
Accepts a function	                       (a: T, b: T) => T
Stores it in the object	                   this.add = add;
Enables calling .add() later	             With logic you define
- you define the logic during the object making of the class
Example
Your TypeScript code defines a generic class GenericNumber<T> that takes a type parameter T and uses a generic function to perform addition. The provided code is correct and should compile and run successfully, outputting:

class GenericNumber<T> {
    add: (a: T, b: T) => T; //Add function call signature
                           //This says the constructor takes one argument, named add.
                          //It's a function that takes two arguments of type T, and returns a value of type T
    constructor(add: (a: T, b: T) => T) {
      this.add = add;
                   //This line assigns the function passed as add to the class property this.add.
                  //this.add can now be used elsewhere in the class (or from an instance).
    }
  }
const num = new GenericNumber<number>((a: number, b: number): number => {
  return a + b;
});
const res = num.add(5, 7);
console.log(res);

steps--
You define a class with a placeholder type T.
In the constructor, you're accepting a function: (a: T, b: T) => T
You store that function in the add property.
When you create an instance like new GenericNumber<number>(...), TypeScript replaces T with number.
The object is now ready with a working .add() method tailored to numbers.



<!-- lec 21 interface -->
- Interface is a powerfull feature that allows you to define a contract for an object shape 
- It specifies the properties and its type that a object should have , to be considered of thet particular Interface Type.
- Interface are primarily used for type checking during development
- interfaces are usually used with objects 
 
interface Greet{
  name:string,
  id:number
}
const object:Greet = { 
  name:"anand",
  id:34
}
<!-- lec 22 lib , rootdir , target , outdir , inlcude , excludes -->
# configuration file
- to get the .js file of every .ts file and update changes in the .js files write in terminal [tsc -w]
- to make seperate folders for .js and .ts file change the root and outdir in tsconfig file

<!-- lec 25 classes and constructor -->
- the constructor is a special method within a class that is automatically invoked when a new instance of the class is created.
- Its primary role is to initialize the object's properties and set up any necessary state.
- classes are the blueprint for creating objects
- classes are used to create new instancses of the particular class
- Constaructor will be called as soon as the new instance of the object is created 

class infra {
    Road: string = "vinod road lt";
    city: string = "Gonda";
    watertank: string = "Gonda watertank";
    constructor(Roads: string, citys: string, watertanks: string) {

      <!-- this is manually assigning the values to the properties of the object -->

      this.Road = Roads;
      this.city = citys;
      this.watertank = watertanks;
    }
  }
  const infra1: infra = new infra("anand lmt", "Lucknow", "lucknow watertank");
  console.log(infra1);

## more and simple explanation 
- ​In TypeScript, the constructor is a special method within a class that is automatically invoked when a new instance of the class is created. Its primary role is to initialize the {object's properties} and {set up any necessary state}. In the Person class you've provided, the constructor accepts two parameters: firstName and lastName. {By declaring these parameters with the private modifier, TypeScript automatically creates and initializes private properties with the same names}. This shorthand eliminates the need to manually assign these parameters to class properties, making the code more concise. Thus, when you instantiate the Person class using new Person("John", "Doe"), the constructor sets the firstName and lastName properties of the new object to "John" and "Doe", respectively. ​
Tektutorialshub
exmaple
- class Person {
  constructor(private firstName: string, private lastName: string) {}
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

// explaining the constructor
- constructor(private firstName: string, private lastName: string) {}
 This is the constructor method, which gets called when you create a new instance of the Person class.
 It takes in two parameters: firstName and lastName, both of which are strings.
 The private keyword:
 Automatically declares and initializes those parameters as private properties of the class.
 These properties are not accessible from outside the class.

// initalising new instance of the class
const p = new Person("John", "Doe");
console.log(p.getFullName()); // John Doe
console.log(p.describe());   // This is John Doe.
 

<!-- lec 24 inheritance in typescript -->
- A class can reuse the properties and methods of another class. This is called inheritance in TypeScript.
- The class which inherits properties and methods is called the [child] class. The class whose properties and methods are inherited is known as the   class. These names come from the nature that children inherit genes from their [parents].
- Suppose you have the following Person class:

class Person {
  constructor(private firstName: string, private lastName: string) {}
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}
- To inherit a class, you use the [extends] keyword. For example the following Employee class inherits the Person class:
class Employee extends Person {
  //...
}

[Readmore]-- https://www.typescripttutorial.net/typescript-tutorial/typescript-inheritance/
## call the constructor of parent class
class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {
        
        // call the constructor of the Person class:
        super(firstName, lastName);
    }
    describe(): string {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
}
- you can access the methods of parent class as well using super.methodInParentClass()
// initialising the new instance of the child class

let employee = new Employee('John', 'Doe', 'Web Developer');
console.log(employee.describe());
console.log(super.methodInParentClass());

<!-- lec 25 access modifiers public , protected and private -->
# accessibilty
           parent class  child class  outside the class 
public      yes           yes           yes   
portected   yes           yes           no
private     yes           no            no

<!-- lec 26  -->
# shorthand properties of classes
- when you create a class you have to create and assgin values to the object properties by youself as the number of properties increases it     becomes difficult to create and inialise properties.
- so we can use shorthand to create and iniitailise them
class peroson{
  name:string,
  id:number,
  age:number
  constructor(names:string , ids:number,ages:number){
    this.name = names;
    this.id:ids;
    this.age:ages
  }
}
//if you use access modifiers in the constructor you dont need to create and assign values to deifferent properties {any access modifier accordig to the need}

class person{
  constructor(public name:string,public id:number,public ages:number){}
}
// it will automatically create and initailise every properties

<!-- lec 27 -->
# getter setter
- used for adding validations to the code
[Readmore]-https://www.typescripttutorial.net/typescript-tutorial/typescript-getters-setters/
- getter and setter are used to control access and modfication of object properties
- To put the validation in the code that what you can pass or what not..
- The [setter] [method] allows you to set the values of the properties with additional logic and validation 
- The [getter] method sets some restriction for the access of the properties
- when you are using the set and get method treat them as properties not methods while accessing and asssgning value

Example-
- class Person {
  //make all the propereties first private so no access outside the class then write validation using public 
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  constructor(age: number, firstName: string, lastName: string) {
    this._age = age;
    this._firstName = firstName;
    this._lastName = lastName;
  }

// getter method to access the age and make it public
  public get age() {
    return this._age;
  }
// setter method to set the age after cheching some conditions and make it public 
  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error('The age is invalid');
    }
    this._age = theAge;
  }

  public getFullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}
 
Example2- 
class GetterSetter{
    constructor(private name:string ,private _age:number,private hobbies:string[]){}

    public set age(age:number){
       if(age>100 || age<0){
        throw new Error("Enter valid age")
       }
       else {
        this._age = age
       }
    }

    public get age(){
        if(this._age ===  undefined){
           throw new Error("age is not undefined")
        }
        return this._age
    }
    
    public giveintro():string{
        return `Hey my name is ${this.name} , my age is ${this.age} and my hobbies are ${this.hobbies.join(",")} and more`
    }
}
const selfintro = new GetterSetter("anand",34,["developmet","programming"]);
console.log(selfintro.giveintro());
selfintro.age  = 56
console.log(selfintro.age);

<!-- lec 29 Static Properties and methods  -->
- A static property or method belongs to the class itself, not to the instances of the class.
This means all instances access the same value of a static property, but technically, they don't own it—only the class does.

class Counter {
  static count = 0;
  constructor() {
    Counter.count++;
  }
  static getCount() {
    return Counter.count;
  }
}
const a = new Counter();
const b = new Counter();
const c = new Counter();
console.log(Counter.getCount()); // Output: 3
- Even though we created three instances, the static count is not duplicated in each instance—there's only one count shared by all, and it belongs to the class.
- Static properties are not accessible using this inside instance methods (unless you do ClassName.property)
- While using static keyword you don't need to create new instance of the class you can directly access the properties of the class using class name

exmple - 
class Hero{
    public static headcount:number = 0;
    constructor(){
        Hero.headcount++;
    }
  public getcount():number{
    return Hero.headcount;
  }
}
// hey you dont need to make the instances to access the properties named after static
console.log(Hero.headcount);

<!-- lec 30 Abstract class -->
- Properties and methods defined in this class can be accessed in other derived classes and we cannot create instances of the abstarct class
- All the abstract methods and properties must be defined in the derived classes
- you can use abstract type fucntion to make it mandatery for every other dervied class to include some properties and methods

// abstract class with Abstract methods
abstract class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    display(): void{
        console.log(this.name);
    }
    abstract find(string): Person;
}
class Employee extends Person { 
    empCode: number;   
    constructor(name: string, code: number) { 
        super(name); // must call super()
        this.empCode = code;
    }
    find(name:string): Person { 
        // execute AJAX request to find an employee from a db
        return new Employee(name, 1);
    }
}
let emp: Person = new Employee("James", 100);
emp.display(); //James
let emp2: Person = emp.find('Steve');
let emp2: Person = emp.find('Steve');

- In the above example, Person is an abstract class which includes one property and two methods, one of which is declared as abstract. The find() method is an abstract method and so must be defined in the derived class. The Employee class derives from the Person class and so it must define the find() method as abstract. The Employee class must implement all the abstract methods of the Person class, otherwise the compiler will show an error.

// abstarct class can also include abstract properties
abstract class Person {
    abstract name: string;
    display(): void{
        console.log(this.name);
    }
}
class Employee extends Person { 
    name: string;
    empCode: number;
    constructor(name: string, code: number) { 
        super(); // must call super()       
        this.empCode = code;
        this.name = name;
    }
}
let emp: Person = new Employee("James", 100);
emp.display(); //James

 <!- lec31 types vs interface --> 
- 