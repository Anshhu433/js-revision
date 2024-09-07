// 'var' is a global scope variable so they are available throughout the function

// 'let' is a local scope variable so they are only available inside the block they are defined.
//   so if 'let'  are globally defined (not in any scope {} ) then they are also accesseble.

// When no value is assigned to the variable then it returns 'undefined'. 
// ex let a ;  console.log(a). --> Output will be undefined
// Undefined is a type

// When Null value is provided to a variable then it returns NULL and type of NULL is an 'Object'

function varscoping()
{
   var x = 1;

   if(true)
      {
         var x = 2;
         console.log(x);   // will print 2
      }
      console.log(x);     // will print 2
}

function letScoping()
{
   let y = 1;
   if(true)
      {
         let y = 2;
         console.log(y);   // will print 2
      }
      console.log(y);     // will print 1
}

varscoping();
letScoping();

