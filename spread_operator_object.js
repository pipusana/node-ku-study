// const profile = {
//     firstname: 'Pipusana',
//     lastname: 'Petgumpoom',
//     hair: 'long',
// }

// const newProfile = {
//     ...profile,
//     age: 26,
//     sex: 'Male',
//     eye: 2
// }

// console.log('newProfile', newProfile)


// -----------------------------

// #1
// const profile = {
//     firstname: 'Pipusana',
//     lastname: 'Petgumpoom',
// }

// const newProfile = profile

// newProfile.firstname = 'Harit'

// console.log('profile', profile)
// console.log('newProfile', newProfile)

// #2
// const profile = {
//     firstname: 'Pipusana',
//     lastname: 'Petgumpoom',
// }

// const newProfile = { ...profile }

// newProfile.firstname = 'Harit'

// console.log('profile', profile)
// console.log('newProfile', newProfile)

// #3
const profile = {
    firstname: 'Pipusana',
    lastname: 'Petgumpoom',
    hair: 'long',
}

const newProfile = {
    ...profile,
    age: 26,
    sex: 'Male',
    firstname: 'Harit',
    eye: 2,
}

console.log('newProfile', newProfile)