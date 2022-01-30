// Destructuring array
// const arrayInfo = ['Pipusana', 'Petgumpoom']
// ** old **
// const firstName = arrayInfo[0]
// const lastName = arrayInfo[1]

// ** new **
// const [ firstName, lastName ] = arrayInfo

// console.log('firstName', firstName)
// console.log('lastName', lastName)

// ----------------------

// # 1

// const arrayInfo = ['Pipusana', 'Petgumpoom']
// const [ firstName, lastName, age=0 ] = arrayInfo

// console.log('firstName', firstName)
// console.log('lastName', lastName)
// console.log('age', age)

// # 2

// const arrayInfo = ['Pipusana', 'Petgumpoom', 27]
// const [ firstName, , age ] = arrayInfo

// console.log('firstName', firstName)
// console.log('age', age)

// # 3
// const display = (array) => {
//     const [number1, number2, number3, number4] = array
//     console.log('number1', number1)
//     console.log('number2', number2)
//     console.log('number3', number3)
//     console.log('number4', number4)
// }

// display([1,2,3,4])

// # 4
// const display = ([number1, number2, number3, number4]) => {
//     console.log('number1', number1)
//     console.log('number2', number2)
//     console.log('number3', number3)
//     console.log('number4', number4)
// }

// display([1,2,3,4])

// # 5
// const arrayInfo = ['Pipusana', 'Petgumpoom', 27, 'jim']
// const [ firstname, ...info] = arrayInfo

// console.log('firstname', firstname)
// console.log('info', info)