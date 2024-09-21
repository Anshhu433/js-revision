// 'for of' Loops
// for-of-loops helps in the execution of arrays and strigs 

let arr = [ 1,2,3,4,5];
for(const it of arr)
    {
        console.log(it);
    }

let st = "Hello Anshul";
for(const it of st)
    {
        console.log(`Each char is ${it}`)
    }

// Maps : They are the uique key value pairs

const map = new Map()
map.set("In" , "INDIA");
map.set("US" , "Unites States of America");
map.set("BAN" , "Bangladesh");

console.log(map);

for(const [key, value] of map)
    {
        console.log(key + ':-' + value);
    }


// for-in-loops This Type of loop is basically used for iteration in objects

const obj = 
{
    js : "javascript",
    cpp : "C++",
    py : "Python"
}

for(const it in obj)
    {
        console.log(`${it} -: ${obj[it]}`);
    }

// 'foreach' loop 

const coding = ['Js' , 'Cpp' , 'py' , 'java']

coding.forEach((val) => 
    {
        console.log(val);
    })


// Objects inside array 


console.log("Here below is the demontration of how you can access the vaklue of objects inside array ");

const arr2 = [
    {
        langname : 'C++',
        langfilename: "cpp"
    },
    {
        langname: "Python",
        langfilename:"py"
    },
    {
        langname : "JavaScript",
        langfilename : "js"
    }
]

console.log("Here with the use of forEach loop")

arr2.forEach((val) => 
    {
        console.log(val.langname);
    })

console.log("Here with the use of for-of loop")
for(const it of arr2)
    {
        console.log(it.langfilename);
    }