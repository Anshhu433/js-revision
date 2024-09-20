//  'this' keyword
//  In an object 'this' refers to an current object/ refering to the current context(values) . But Alone 'this' refers to an global object.


const user = 
{
    username : "Anshul",
    price : 999,
    welcomeMsg : function()
    {
        console.log(`${this.username} , Welcome to website`);
        console.log(this)  // This will show how 'this' is refferring to the current object

    }


}

user.welcomeMsg();
user.welcomeMsg("Sam");  // Now we have changed the value of the current context

// Whenever we use 'this' in an brwoser it will refer to an global object which is 'Window'
// 'Window' is the global object inside the browser.




// ************* ARROW FUNCTION  *******************

const profile = (name , age) => 
    {
       return `Name and age of the candidate is ${name} , ${age}`;
    }
console.log(profile('Ansh' , 22));

// ANother way 'Implicit Return' 

const add = (num1 , num2) => num1 + num2;
console.log(add(2,3));