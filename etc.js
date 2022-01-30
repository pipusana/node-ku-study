// const convertNumber = text => {
//     let result = undefined
//     if(text === 'one') {
//         result = 1
//     }
//     if(text === 'two') {
//         result = 2
//     }
//     if(text === 'three') {
//         result = 3
//     }
//     if(text === 'four') {
//         result = 4
//     }
//     return result
// }

// const convertNumber = text => {
//     if(text === 'one') return 1
//     if(text === 'two') return 2
//     if(text === 'three') return 3
//     if(text === 'four') return 4
//     return undefined
// }

// ----------------------------------
// const arrayNumber = [1, 2, 3, 4, 5 ,6 ,7, 8 ,9, 10, 11]

// const increareTwo = number => number + 2
// const evenNumber = number => number % 2 === 0
// const sum = (sum, number) => sum += number

// const result = arrayNumber
//                 .map(increareTwo)  // [3, 4, 5, 6, 7 ,8 ,9, 10 11, 12, 13]
//                 .filter(evenNumber) // [ 4, 6,  8, 10 ,12]
//                 .reduce(sum) //  40
// console.log('result',result)
// ----------------------------------
// usecase -> convert number to text
// const number = 3
// const convertToText = number => {
//     if(number === 1){
//         return 'one'
//     }
//     if(number === 2){
//         return 'two'
//     }
//     if(number === 3){
//         return 'three'
//     }
// }
// const result = convertToText(number)
// console.log(result)

const number = 3
const convertToText = number => {
    const nums = {1: 'one', 2: 'two', 3: 'three'}
    return nums[number] // nums[3] -> three
}
const result = convertToText(number)
console.log(result)