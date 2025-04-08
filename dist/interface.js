"use strict";
const object1 = {
    name: "anand",
    price: 24,
    quantity: 23
};
const calculateprice = (object) => {
    const { price, quantity } = object;
    const calculate = price * quantity;
    return calculate;
};
console.log(calculateprice(object1));
