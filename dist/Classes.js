"use strict";
class infra {
    Road = "vinod road lt";
    city = "Gonda";
    watertank = "Gonda watertank";
    constructor(Roads, citys, watertanks) {
        this.Road = Roads;
        this.city = citys;
        this.watertank = watertanks;
    }
}
const infra1 = new infra("anand lmt", "Lucknow", "lucknow watertank");
console.log(infra1);
