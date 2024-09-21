// map , filter and reduce

// In JavaScript, you cannot return a value from the forEach() method in the way you might expect with a traditional loop or 
// with functions like map(), filter(), or reduce()



//.filter(). : filter() returns a new array containing elements that pass a given condition.

const nums = [2,4,56,67,9,7,12];

const mynums = nums.filter((val) => 
    {
        return val > 10;
    })

    console.log(mynums);

// .map() : map() creates a new array with the result of applying a function to every element of the array.

const n2 = [2,4,56,67,9,7,12];

const myn2 = n2.map((val) => 
    {
        return val * 10;
    })

    console.log(myn2);


// .reduce() : can be used to return a single value by accumulating the result of each element based on the provided function.


console.log("Now Example of reduce method ; ")
const array  = [1,2,3,4,5];

const sum = array.reduce((accumulator , currentvalue) => 
    {
        return accumulator + currentvalue;
    }, 0)
console.log(`The sum of the value inside array is ${sum}`);