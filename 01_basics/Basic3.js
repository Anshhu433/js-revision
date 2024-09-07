// Prefix and Postfix

let x = 3;
let y = x++;

console.log(`x : ${x} , y : ${y}`);  // Expexted Output x:3 and y:4

let a = 4;
let b = ++a;

console.log(`a : ${a} , b : ${b}`)   // Expected output a:5 and  b:5

// *******************************************************

// stack(primitive) and Heap(non-primitive)


// stack example.

let myname = 'Anshulrawat';
let myanothername = myname;    // Since 'myname' is the primitive datatype so its copy will be shared to 'myanothername'

myanothername = 'Anshu';

console.log(myanothername);    // Primitive DataType are stored in a stack.

console.log(myname);       // we have shared copy of 'myname' to 'myanothername' not the refrence . so we can update 'myanname' value.


// Heap example

let userOne = 
{
    user : 'user@google.com',
    upi : 'user@ybl'
}

let userTwo = userOne;

userTwo.user = 'Anshul@google.com';   // Here email will be changed for user one because we are using refrence of userOne here.

console.log(userOne);
console.log(userTwo);