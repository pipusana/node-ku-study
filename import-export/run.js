// exports helper.js
const hello = name => `Hello ${name}`

module.exports = hello

// ---------------------

// import helper.js
const hello =  require('./helper.js')

console.log(hello('World'))


