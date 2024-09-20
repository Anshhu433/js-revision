// Functions and Scope

function loginusername(username)
{
    if(!username)    //-->  if (username === undefined)
        {
            console.log("Enter the username ");
            return;
        }
        return `${username} just logged in `;
}

// console.log(loginusername()) -> Hey this is undefined.  (IF we dont pass anythink it will be considered as undefined)

console.log(loginusername('Ansh'));


// ************* Rest Operator ***********
// (...) Basically used to bundle all the parameters in single array.  Whenever (...) used inside function considered as the RestOp.

function cartservice(...num)
{
    console.log(num);   // This (...) will bundle all arguments in single array.  Output: [200,3000,4000]
}

cartservice(200,3000,4000);


function cartservice2(val1, val2 , ...num1)
{
    console.log(num1);  //Output : [3000,2000,3000,3002,100]. -> because val1=200. , val2=3000 , num1 = [].
}
cartservice2(200 , 3000 , 3000, 2000, 3000, 3002, 100)
//cartservice2(val1: any, val2: any, ...num1: any[])


// Using Object as an argumnet in an function

let user =
{
    name : "Ansh",
    price : 4000
}

function handleObj(anyobj)     // Here object user. is passed as an arghument (anyobj).
{
    console.log(`The name of the user is ${anyobj.name} and the price is  ${anyobj.price}`);
}

 handleObj(user);

// Another way we can also pass whole object as a parameter inside a function

// handleObj({
//     name: 'Ansh',
//     price: 499
// })


