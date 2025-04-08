// type alias in ts
type Person ={
    name: string,
    age: number,
    occupasion: string;
    location: {
      city: string;
      country: string;
    };    
}

const person1:Person = {
  name: "anand kumar",
  age: 34,
  occupasion: "government servent",
  location: {
    city: "lucknow",
    country: "india",
  },
};


const person2:Person = {
    name: "Akshat shukla",
    age: 34,
    occupasion: "government servent",
    location: {
      city: "lucknow",
      country: "india",
    },
  };
  const person3:Person = {
    name: "akash kumar",
    age: 34,
    occupasion: "government servent",
    location: {
      city: "lucknow",
      country: "india",
    },
  };
    
console.log(person1.age);
console.log(person2.location);
console.log(person3.occupasion);