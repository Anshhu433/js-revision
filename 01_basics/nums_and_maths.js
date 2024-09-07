// **************** NUMS ***************

let score = 400; 
console.log(score);    // output : 400


// And if you want to dedicately define the DataType . can use this syntax

let balance = new Number(400);
console.log(balance);   // output : [Number : 400]

// We can convert this Number to string also
// After converting it into string we can also use multiple methods of string 

console.log(balance.toString().length);  // output : 3

// And If we want two(any number) decimal places after the number We can use 'toFixed()' method 

console.log(balance.toFixed(2));   // output: 400.00

//And if you want to format the number to a specified length

let newnum = 1234.45;
console.log(newnum.toPrecision(4));

// .toLocaleString returns a number as a string , using local language format

let numm = 100000000;
console.log(numm.toLocaleString('en-IN'));    // want that string in INDIAN format



//**************** MATHS ************** */

// 'Math' is an Object contains static properties and Methods for mathematical functions 

console.log(Math);

console.log(Math.abs(-4));    //converts negative value to positive.     Output:4
console.log(Math.round(4.6));  // Will roundoff the given value.         Output:5
console.log(Math.ceil(4.2));   // will get you the ceiling value(only the bigger one) .    output:5
console.log(Math.floor(4.9));  // will get you the floor value(always the lower one).   output:4
console.log(Math.min(3,1,4,7));  // will get you the minimum value of the given values .   output:1
console.log(Math.max(3,1,45,6));  // Will get the largest value of the mentioned one .     output:45



// Mostly used method is  ' .random() ' 

console.log(Math.random());      // always get you the value between (0-1);

console.log((Math.random() *10) + 1);  // now the value will be in the range of 0-9

// And If you want to remove the decimal value

console.log(Math.floor((Math.random() *10) + 1));  // now we will get the value between 0-9(avoiding decimal values ).