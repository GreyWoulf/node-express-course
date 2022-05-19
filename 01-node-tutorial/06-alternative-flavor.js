module.exports.items = ['item1', 'item2'] // can automatically export the array and set the variable name with values 
// setting up a property on an object and setting it equal to the array
const person = {
  name: 'bob',
}

module.exports.singlePerson = person // setting up a property on an object and setting it equal to the person object

// exactly the same as module.export = {john, peter}
