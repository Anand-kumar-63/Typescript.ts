"use strict";
class Pro {
    name;
    id;
    hobbies;
    //using access modifiers before properties in class constructor automaticaly creates and assigns values to the object properties
    constructor(name, id, hobbies) {
        this.name = name;
        this.id = id;
        this.hobbies = hobbies;
    }
    describe() {
        return `hey i am${this.name} , my id is ${this.id} and my hobbies are ${this.hobbies}`;
    }
    takemyfullname() {
        return `hey i am ${this.name}`;
    }
}
// const pro1 = new Pro("anand",23,["sports","development"]);
// console.log(pro1.describe());
// console.log(pro1.takemyfullname());
// now inheritance of the pro class in other class
class Beta extends Pro {
    job;
    // If you are not Passing the value directly to super method you have to take very value as an argument in the constructor to further pass on to the parent constructor super
    constructor(firtname, id, hobbies, job) {
        // you can pass default values driectly into the super like super("anand",45,["singing","chess"],"military");
        super(firtname, id, hobbies);
        this.job = job;
    }
    describe2() {
        return `hey this is the method of child class you can call it and call the parent methods using the NewInstance.methodnameinparentclass()`;
    }
}
let anyone = new Beta("anand", 45, ["singing", "chess"], "military");
console.log(anyone.describe2());
console.log(anyone.describe());
