// one variable can contain multiple values using |
// a function that accept a argument of type boolean or string or number and returns different values accordingly
const doit = (value: String | number | boolean): String | number | boolean => {
  if (typeof value === "number") {
    console.log(value ** 2);
    return value ** 2;
  } else if (typeof value === "string") {
    console.log(value);
    return value.toLowerCase();
  } else if (typeof value === "boolean") {
    console.log(!value);
    return !value;
  } else {
    throw new Error("Enter the valid value");
  }
};
// doit("anand")
// doit(45);
// doit(true);

const Returnvalue = (
  value: string | number | boolean
): string | number | boolean => {
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
    } else {
      return "No";
    }
  } else {
    throw new Error("Enter the valid value in the function");
  }
};
console.log(Returnvalue("anand"));
console.log(Returnvalue(45.3784698));
console.log(Returnvalue(true));

// inetersection AND union difference
type person = {
  name: string;
  email: string;
  id: number;
};
type employee = {
  emp_id: string;
  emp_email: string;
};
type officeemployee = person | employee; // the object of type this can have all the fields of person or employee or both , should have atleast the data of one type
const officedata: officeemployee = {
  name: "anand",
  email: "jcbdicd",
  id: 628136,
};

// but in intersection you have to incldude the fields of both the types

type person1 = {
  name: string;
  email: string;
  id: number;
};
type employee1 = {
  emp_id: number;
  emp_email: string;
};
type officeemployee1 = person1 & employee1; // the object of type this should contain all the fields i both the types
const officedata1: officeemployee1 = {
  name: "anand",
  email: "jcbdicd",
  id: 628136,
  emp_email:"bcdudbcu",
  emp_id:5327153,
};


//Example
type user = {
    name: string;
    email: string;
    id: number;
  };
  
  type location = {
    city: string;
    state: string;
    country: string;
  };
  
  // Function that accepts a user & location object
  const createUserProfile = (info: user & location): string => {
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
  