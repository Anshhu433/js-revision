// Array 'object'

// JavaScript arrays are resizable and can contain a mix of different data types.
// let newarr = ['anshu' , 9 , false , 0];

// JavaScript array-copy operations create shallow copies. 

let arr = [6,76,1,4,2];

// Another way to declare array is 
// let arr = new Array(1,2,4,5,6);

// Different methods of array 

console.log(arr.push(7));   // this will push element to the array
console.log(arr.pop());     // This will pop the last element from the array

console.log(arr.unshift(9));  // this will shift the whole array and push '9' at the 0th index.
console.log(arr.shift());    // This will remove that 9 and 0 at the place of '9'

console.log(arr.includes(2));  // Will return a boolean value . chks wheather '2' is there in an array or not.
console.log(arr.indexOf(76));   // will return a index of '76'

// *********************** .join() 'important method' ***************************

const newarr = arr.join();   // will convert the type of an array from object to string.
console.log(arr);
console.log(typeof arr);   //output: object
console.log(newarr);
console.log(typeof newarr);   // output : string


// ************* Slice and Splice ****************

const arr2 = [1,2,3,4,5,6];

console.log("A " , arr2);
console.log("B " , arr2.slice(1,3));  // will not include the 3rd index . and will not effect the original array.

console.log("Array after slice " , arr2);

console.log("C ", arr2.splice(1,3));   // This will remove the 1st,2nd and 3rd index from the original array.

console.log("Array after splice " , arr2);