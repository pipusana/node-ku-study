let userInfo = {
    firstname: 'pipusana',
    lastname: 'petgumpoom',
    age: 27,
}  
// pass 1 year 
userInfo.firstname = 'Harit'
userInfo.age = 28

const keyFirstName = 'firstname'
const a = userInfo['firstname'] // userInfo[keyFirstName]
const b = userInfo['lastname']
const c = userInfo['age']

console.log('a: ', a)
console.log('b: ', b)
console.log('c: ', c)

// const firstname = userInfo.firstname //  Dot Notation
// const lastname = userInfo['lastname'] // Bracket Notation