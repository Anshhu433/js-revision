// Type of a STRING  is object (means key value pairs) 

let name = 'Anshul';
let repocnt = 50;
// let name  = new string('Anshul')

console.log(`Hey my name is ${name} and my repo count is ${repocnt}`);

// There are many pre-defined function in String.

console.log(name[0]);   // We can simply use the key(index) to chk the value at particular index

console.log(name.length);  // .length method just to check the length of the string

console.log(name.toUpperCase()) // to convert the string to UpperCase . Will not change the actual name because it shares the copy.

console.log(name);

console.log(name.charAt(3));   // Just to check the character at particular position.

console.log(name.indexOf('u'));   // Just to check the index of 'u'

// If you want to get some part of the string just use '.subString()' or '.slice()' method.

let newString = name.substring(0,2);
console.log(newString);

// Basically If you want to 'trim' the spaces we use 'trim' method

let newname = '    Ansh.  ';
console.log(newname);    // will print.  '   Ansh. '
console.log(newname.trim());   // will print 'Ansh'       (Basically will trim the spaces)

// And If you want to replace any part of the string with something. can use '.replace()' method 

let url = "https://anshul.com/anshul20%rawat";
console.log(url.replace('20%' , '__'));    // Output : https://anshul.com/anshul__rawat


