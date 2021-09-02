const names = require('./4-names')
const sayHi = require('./3-utils')
console.log(names)

// sayHi('susan')
// sayHi(john)
// sayHi(peter)



// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (Only share minimum)

const names = require ('./4-names')
const sayHi = require('./3-utils')
const data = require('./6-alternative-flavour')
require ('./7-mind-grenade')
// console.log(data)

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

// console.log(__filename)
