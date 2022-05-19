const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./01-node-tutorial/content/first.txt', 'utf8')
const second = readFileSync('./01-node-tutorial/content/second.txt', 'utf8')

writeFileSync(
  './01-node-tutorial/content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
) // if there is a folder then node will get the text file and add to the file, but if there isn't node will create a new text file
console.log('done with this task')
console.log('starting the next one')
