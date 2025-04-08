"use strict";
// normal functions
const greet = function (name, id) {
    return `hey ${name} welcome to the company your id is ${id}`;
};
console.log(greet("anand", 13));
const checkforpallin = function (pallin) {
    const pally = pallin.split("").reverse().join("");
    return pally === pallin;
};
console.log(checkforpallin("12321"));
// optional and default parameters
const fuct2 = function (name, id) {
    return console.log(`hey you ${name}`);
};
fuct2("anand");
const func = function name(num = 12, id = 34) {
    return num + id;
};
console.log(func());
// 
