console.log("_____________________________________")
console.log(" Exercise 1");
const person={

    name: "Adam",
     age: 25,
     gender: "male"
}
console.log(person.name,person.age,person.gender)

console.log("_____________________________________")
console.log(" Exercise 2");
const person1={

    name: "Adam",
     age: 25,
    
}
person1.gender= "male"
console.log(person1)

console.log("_____________________________________")
console.log(" Exercise 3");


const person3={

    name: "Adam",
     age: 25,
    
}
person3['gender']='male'
console.log(person3)

console.log("_____________________________________")
console.log(" Exercise 4");
const person4={

    name: "Adam",
     age: 25,
     gender: "male"
}
console.log(person4.name)


console.log("_____________________________________")
console.log(" Exercise 5");
const person5={
    name: "Adam",
    age: 25,
    gender: "male"
};
console.log(person5['name'])


console.log("_____________________________________")
console.log(" Exercise 6");
const person6={
    name: "Adam",
    age: 25,
    gender: "male",

     }

     for (const key in person6) {

        console.log(`${key}: ${person6[key]}`);
    }

console.log("_____________________________________")
console.log(" Exercise 7");

     console.log(Object.keys(person));

console.log("_____________________________________")
console.log(" Exercise 8");

     console.log(Object.values(person));

console.log("_____________________________________")
console.log(" Exercise 9");

     console.log(Object.entries(person));
     console.log("_____________________________________")
console.log(" Exercise 10");

const gender={
    gender:'male'
}

let merged  ={
    
    ...person,
    ...gender
}
     console.log(Object.assign(merged ));
    

     console.log("_____________________________________")
     console.log(" Exercise 11");
     console.log( Object.freeze(person));
     console.log("_____________________________________")
     console.log(" Exercise 12");
     console.log( Object.seal(person));