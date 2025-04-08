"use strict";
class what {
    whatis;
    whatare;
    constructor(whatis, whatare) {
        this.whatis = whatis;
        this.whatare = whatare;
    }
}
// this is eqaul to 
class what2 {
    whatis = "cjbd";
    whatare = "chdb";
    constructor(whatiss, whatares) {
        this.whatis = whatiss;
        this.whatare = whatares;
    }
}
const newins = new what2("galaxy", "blackhole");
