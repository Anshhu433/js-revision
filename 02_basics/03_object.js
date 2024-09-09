// Objects

// If you want to add a Declared data type inside an object . for say 'Symbol'. below is the correct syntax

let sym =  Symbol('key 1')


let user = 
{
    name : 'Anshul',
    age : 22,
    location : 'Mumbai',
    email : 'anshu@fynd.com',
    [sym] : "key 1"
}


// console.log(user.name)
console.log(user["name"]);
console.log(user["location"])
console.log(user[sym]);
console.log(user);    //. output :   {name: 'Anshul',age: 22,location: 'Mumbai', email: 'anshu@fynd.com',[Symbol(key 1)]: 'key 1'}


// Adding a 'function' to a 'object'

user.greeting = function() 
{
    console.log('Hlw JS user');
}

user.greeting();

// If we want to refer any key of the object into a function we can simply use 'this'

user.greetingtwo= function()
{
    console.log(`Hlw JS user ${this.name}`);
}
user.greetingtwo();