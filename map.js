const array = [1, 2, 3, 4, 5, 6, 7, 8]
const result = array.map(value => value * 2)

console.log('result', result) // -> [ 2,  4,  6,  8, 10, 12, 14, 16]

// loop   value    return
//  1       1       1 * 2 -> [2]
//  2       2       2 * 2 -> [2, 4]
//  3       3       3 * 2 -> [2, 4, 6]
//  4       4       4 * 2 -> [2, 4, 6, 8]
//  5       5       5 * 2 -> [2, 4, 6, 8, 10]
//  6       6       6 * 2 -> [2, 4, 6, 8, 10, 12]
//  7       7       7 * 2 -> [2, 4, 6, 8, 10, 12, 14]
//  8       8       8 * 2 -> [2, 4, 6, 8, 10, 12, 14, 16]

// ----- ถ้าใช้ for each
// const array = [1, 2, 3, 4, 5, 6, 7, 8]
// const result = []
// array.forEach((value) => {
//     result.push(value * 2)
// })
// console.log('result', result)