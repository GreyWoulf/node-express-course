// CommonJS, every file is module (by default)
// Modules - Are Encapsulated Code (only share what you want)
// Modules allow you to seperate names and functions in different files so you can acccess them throughout the entire application and not just one place. Allows smaller files.

// Import functions
// when you import a function you invoke it

const names = require('./04-names') // use the function require and pass in where our file is located so we can access it
// "." shows how far down it is in the directory; more dots means it is further down in the directory
const sayHi = require('./05-utils')


const data = require('./06-alternative-flavor')
console.log(data)

require('./07-mind-grenade') // you can still call a function in a different file as long as it is executed in that file


sayHi('susan')
sayHi(names.john) // can use file name or property name which is used in this example
sayHi(names.peter)



// const john = 'john';
// const peter = 'peter';

// const sayHi = (name) => {
//   console.log(`Hello there ${name}`);
// }

// sayHi("susan");
// sayHi(peter);
// sayHi(john);