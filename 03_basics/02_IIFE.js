 // Immediatly Invoked Function.

 // () ();  -> This is IIFE ()-> function definition. ()-> we can also give variable here , ; -> to end the IIFE execution.

 // Why USing IIFE. -> To avoid the Problems faces due to the global scope variable

 (function chai (){
   console.log("DB Connected")}
 )();

   // We can also use arrow function

( (name)=>
{
    console.log(`Hey my name is ${name}`)
})('Anshu');