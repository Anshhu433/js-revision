// Global Scope and Local Scope

let a = 10;
var b = 10;


// Var is a 'Globale Scope '  Variable and Let is a block scope variable.

// The value of 'Let' variable inside if below block will not be available outside the block.(that's why the changes are within the block)
// But 'var' variable will be accesseble outside the block


if(true)
    {
        let a = 100; 
        var b = 100;
        console.log(a);  // value of 'a' inside the block will be 100 (changes will be within the block)
        console.log(b);   // value of 'b' will be updated to 100.
    }

console.log(a);  // value of 'a' outside the block will be 10.
console.log(b);  // As. the value is been updated inside the block so value of 'b' will remain 100



// Clousers : It is when the inner function has access to variables from its outer function. Even after the Outer function is returned.

function outerFunc(outervar)
{
    return function innerfunc(innervar)
    {
        console.log(`Outer vari : ${outervar}`)
        console.log(`Inner vari : ${innervar}`)
    }
}

const ClouserExmp = outerFunc('Outside');  // Outer function is called here 
ClouserExmp('Inside');   // Inner function is called here 

// 'innerfunc'. is returned and stored in ClouserEmp

// ANother Example

if(true)
    {
        const username = "Anshul";
        if(username == "Anshul")
            {
                const website = 'Youtube';
                console.log(username + website);  // Here username is accesseble because it is declared in its parent scope
                                                    // this is closures.
            }

            // console.log(website). // will give error because it is only accessble inside above scope

            console.log(username);
    }