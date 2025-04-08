"use strict";
var roles;
(function (roles) {
    roles[roles["admin"] = 0] = "admin";
    roles[roles["user"] = 1] = "user";
})(roles || (roles = {}));
const user1 = {
    name: "anand",
    email: "dkncjdnc.hdiscn",
    password: "cvkdnvk",
    role: roles.admin
};
const user2 = {
    name: "anansdvd",
    email: "dkncjdnc.hdiscn",
    password: "cvkdnvk",
    role: roles.user
};
console.log(user2);
console.log(user1);
