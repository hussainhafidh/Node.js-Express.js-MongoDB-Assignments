const argument = process.argv


function printName(name){
    return `hello ${name}`
}

console.log(printName(argument[2]))


/* will give same result
function printName(greetings){ 
    return greetings
}
*/


// //another code
// const argument = process.argv;
// console.log(`Hello ${argument[2]}`);







/*
Command-line arguments (CLI) are strings of text used to pass additional information to a program when an application 
is running through the command line interface of an operating system.


1. process.argv contains an array where 0th index is node executable path
console.log( process.argv) and see

2.  1st index contains the path to your current file and then the rest index contains the passed arguments.
*/

