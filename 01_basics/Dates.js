// Dates

let Mydate = new Date() 

console.log(typeof Mydate);    // Object

console.log(Mydate);
console.log(Mydate.toDateString());
console.log(Mydate.toLocaleString());

// If you want to create a Date 

// let createDate = new Date(2023,3,4,5,2)

let createDate = new Date("1-04-2024")
console.log(createDate.toLocaleString());