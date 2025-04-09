"use strict";
// abstract class One{
//    public firstname:string;
//    constructor(firstname:string, public hobbies:string[]){ this.firstname = firstname } 
//    display(){
//     return this.firstname;
//    }
// }
// class one1 extends One{
//     empcode:string
//     constructor(empcode:string){
//         super("jake",["Hacking","server testing"]);
//         this.empcode = empcode;
//     }
// }
// class one2 extends One{
//     constructor(public empcode2:number){
//         super("mike",["boxing","Eliminations"]);
//     }
// }
// const newone = new one1("1324")
// const newone1 = new one2(1234)
// console.log(newone.display())
// console.log(newone1.display())
class Area {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Area {
    radius;
    constructor(radius) {
        super("brown");
        this.radius = radius;
    }
    findArea() {
        return Math.PI * this.radius * this.radius;
    }
    DisplayArea = () => {
        return `This is ${this.color} circle and have an area of ${Math.PI * this.radius * this.radius}`;
    };
}
const newone = new Circle(223);
console.log(newone.DisplayArea());
