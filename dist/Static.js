"use strict";
class Hero {
    static headcount = 0;
    constructor() {
        Hero.headcount++;
    }
    getcount() {
        return Hero.headcount;
    }
}
// hey you dont need to make the instances to access the properties named after static
console.log(Hero.headcount);
