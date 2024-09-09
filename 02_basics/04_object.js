// We can create Object using constructor . (Singleton object)
// const obj = new Object();


let target = {1:"a" , 2:"c" , 3:"f"}
let source = {1:"b" , 2:"d" , 3:"e"}

// 'Object.assign()' copies one or more properties from one or more source object to target object

let obj = Object.assign(target , source);
console.log(obj);

// 90% of the time we will use (...) operator for assingning or copying.

let obj2 = {...target , ...source};
console.log(obj2);



const tinderuser = {};

tinderuser.id = "123@bc";
tinderuser.name = "sammy";
tinderuser.isLoggedIn = false;

console.log("Tinder user : " , tinderuser);

// If we want only keys or values from the object .  'Object.keys()' , Object.values()

console.log(Object.keys(tinderuser));   // Here we will get only the 'keys' of the object tinderuser
console.log(Object.values(tinderuser));  // Here also we will get only the 'values' of the object tinderuser


// JSON(javascript object Notation) fromat
// Json also is in the form of object but key and value both will be inside quotes.

// {
//     "name" : "Anshul",
//     "age" : 22,
//     "Married" : falae
// }


// Destructuring.

let employee = 
{
    name : "Anshul",
    role : "PSE",
    age : 22,
    gender : 'M'
}

// Object Destructuring

let {name : x , role: r , age : a , gender: g} = employee

console.log(`His name is ${x} assign for the role of ${r} his age is. ${a} , and his gender is. ${g}`)