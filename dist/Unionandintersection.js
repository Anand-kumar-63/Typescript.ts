"use strict";
// one variable can contain multiple values using |
// a function that accept a argument of type boolean or string or number and returns different values accordingly
const doit = (value) => {
    if (typeof value === "number") {
        console.log(value ** 2);
        return value ** 2;
    }
    else if (typeof value === "string") {
        console.log(value);
        return value.toLowerCase();
    }
    else if (typeof value === "boolean") {
        console.log(!value);
        return !value;
    }
    else {
        throw new Error("Enter the valid value");
    }
};
// doit("anand")
// doit(45);
// doit(true);
const Returnvalue = (value) => {
    if (typeof value === "string") {
        const arr = value.split("");
        arr[0] = arr[0].toUpperCase();
        return arr.join("");
    }
    if (typeof value === "number") {
        return Math.round(value * 100) / 100;
    }
    if (typeof value === "boolean") {
        if (value === true) {
            return "yes";
        }
        else {
            return "No";
        }
    }
    else {
        throw new Error("Enter the valid value in the function");
    }
};
console.log(Returnvalue("anand"));
console.log(Returnvalue(45.3784698));
console.log(Returnvalue(true));
const officedata = {
    name: "anand",
    email: "jcbdicd",
    id: 628136,
};
const officedata1 = {
    name: "anand",
    email: "jcbdicd",
    id: 628136,
    emp_email: "bcdudbcu",
    emp_id: 5327153,
};
// Function that accepts a user & location object
const createUserProfile = (info) => {
    return `Hey, my name is ${info.name}, my email is ${info.email} and my ID is ${info.id}. I live in ${info.city}, ${info.state}, ${info.country}.`;
};
// Example usage
const profile = createUserProfile({
    name: "Anand",
    email: "anand@example.com",
    id: 1,
    city: "Mumbai",
    state: "Maharashtra",
    country: "India"
});
console.log(profile);
