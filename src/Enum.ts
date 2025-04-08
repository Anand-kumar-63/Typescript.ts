enum roles{
    admin, 
    user 
}
type Logindetails ={
    name:string,
    email:string,
    password:string,
    role:roles
}

const user1:Logindetails={
    name:"anand",
    email:"dkncjdnc.hdiscn",
    password:"cvkdnvk",
    role:roles.admin
}

const user2:Logindetails={
    name:"anansdvd",
    email:"dkncjdnc.hdiscn",
    password:"cvkdnvk",
    role:roles.user
}

console.log(user2);
console.log(user1);

