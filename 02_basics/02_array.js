// Array part 2

const marvelhrs = ['thor' , 'Hulk' , 'CaptainAmerica' , 'IronMan'];

const dc_heros = ['superman' , 'flash' , 'batman'];

// If you want to merge to array

const all_heros = marvelhrs.concat(dc_heros);

console.log(all_heros);

// ***************** spread operator(... ). ********************

// The spread operator in JavaScript (...) is used to "spread out" the elements of an array or object. 
// It allows you to easily copy, combine, or pass individual elements or properties.

const all_new_heros =[...marvelhrs , ...dc_heros]

console.log(all_new_heros);

//********************************         *********************** */

console.log(Array.isArray("Hitesh"));  //will check weather this is an array or not.
console.log(Array.from("Anshul"));    // Now it will convert array from string.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));   // will return these values in an array format.


