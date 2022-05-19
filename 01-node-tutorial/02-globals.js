// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname) 
setInterval(() => { // calls a function at specified intervals in milliseconds
  console.log('hello world') // console logs hello world when called
}, 1000) // callback function and it runs every second
