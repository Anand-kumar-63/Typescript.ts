"use strict";
// genercis
function hey(value) {
    return value;
}
// to deal with multiple datatypes
function getfirstElement(Array) {
    return Array[0];
}
const getvalue = getfirstElement([1, 2, 3, 3, 4]);
console.log(getvalue);
const getstringvalue = getfirstElement(["anan", "bfewjb", "fjcbjcb"]);
console.log(getstringvalue);
// 
const tag = document.querySelector(".tag");
tag?.value;
//  generic looping
const map = new Map([]);
const user22 = {
    data: {
        name: "anand",
        email: "anand@gmail.com"
    },
    isError: false
};
const user11 = {
    data: {
        status: 1
    },
    isError: false
};
const response = {
    data: {
        Status: 1
    },
    isError: false
};
