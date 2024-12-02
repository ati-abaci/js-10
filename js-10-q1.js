// Using an example, explain the difference between block,global and function scope in variables.

//Global Scope
// A variable that is declared outside of any function or block is said to have global scope. This means it can be accessed from anywhere in your code, including inside functions and blocks.
let globalVar = "I am a global variable";
function showGlobalVar() {
    console.log(globalVar); 
}

showGlobalVar(); 
console.log(globalVar); 

//Function Scope
// A variable that is declared within a function is said to have function scope. This means it can only be accessed within that function and is not accessible outside of it
function myFunction() {
    let functionScopedVar = "I am a function scoped variable";
    console.log(functionScopedVar); 
}

myFunction(); 
console.log(functionScopedVar); 

//block
// A variable declared within a block using let or const has block scope. This means it can only be accessed within that block.

if (true) {
    let blockScopedVar = "I am a block scoped variable";
    console.log(blockScopedVar); 
}

console.log(blockScopedVar); 