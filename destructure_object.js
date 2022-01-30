// Destructuring Object
// const userInfo = {
//     firstName: 'pipusana',
//     lastName: 'petgumpoom',
//     sex: 'male',
//     age: 27,
//     body: {
//         weight: 77,
//         height: 180
//     }
// }
// old
// const firstName = userInfo.firstName
// const lastName = userInfo.lastName
// new 
// const { firstName: firstName, lastName: lastName } = userInfo
// console.log("firstName", firstName)
// console.log("lastName", lastName)

// --------------------------

// # 1
// const userInfo = {
//     firstName: 'pipusana',
//     lastName: 'petgumpoom',
//     sex: 'male',
//     age: 27,
//     body: {
//         weight: 77,
//         height: 180
//     }
// }

// const { firstName, lastName, age } = userInfo

// console.log("firstName", firstName)
// console.log("lastName", lastName)
// console.log("age", age)

// # 2
// const userInfo = {
//     first_name: 'pipusana',
//     last_name: 'petgumpoom',
//     sex: 'male',
//     age: 27,
//     body: {
//         weight: 77,
//         height: 180
//     }
// }

// const { first_name: firstName, last_name: lastName } = userInfo

// console.log("firstName", firstName)
// console.log("lastName", lastName)

// # 3
// const userInfo = {
//     firstName: 'pipusana',
//     lastName: 'petgumpoom',
//     sex: 'male',
//     age: 27,
//     body: {
//         weight: 77,
//         height: 180
//     }
// }
// const { firstName, lastName, ...detail } = userInfo
// console.log("firstName", firstName)
// console.log("lastName", lastName)
// console.log("detail", detail)

// # 4
// const userInfo = {
//     firstName: 'pipusana',
//     lastName: 'petgumpoom',
//     sex: 'male',
//     age: 27,
//     body: {
//         weight: 77,
//         height: 180
//     },
// }
// const { firstName, lastName, body: {weight, height} } = userInfo

// console.log("firstName", firstName)
// console.log("lastName", lastName)
// console.log("weight", weight)
// console.log("height", height)

// # 5
// const userInfo = {
//     firstName: 'pipusana',
//     lastName: 'petgumpoom',
//     sex: 'male',
//     age: 27,
//     body: {
//         weight: 77,
//         height: 180
//     }
// }

// const { firstName, lastName, nickname='unknown' } = userInfo

// console.log("firstName", firstName)
// console.log("lastName", lastName)
// console.log("nickname", nickname)

// # 6
// const display = (userInfo) => {
//     const {firstName, lastName } = userInfo
//     console.log('firstName', firstName)
//     console.log('lastName', lastName)
// }

// const userInfo = {
//     firstName: 'pipusana',
//     lastName: 'petgumpoom'
// }

// display(userInfo)

// # 7
const display = ({ firstName, lastName }) => {
    console.log('firstName', firstName)
    console.log('lastName', lastName)
}

const userInfo = {
    firstName: 'pipusana',
    lastName: 'petgumpoom'
}

display(userInfo)