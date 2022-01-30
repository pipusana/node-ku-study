// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const result = array.filter(value => value % 2 === 0)
// loop   value    return
//  1       1       1 % 2 === 0 (1) -> false -> []
//  2       2       2 % 2 === 0 (0) -> true -> [2]
//  3       3       3 % 2 === 0 (1) -> false -> [2]
//  4       4       4 % 2 === 0 (0) -> true -> [2, 4]
//  5       5       5 % 2 === 0 (1) -> false -> [2, 4]
//  6       6       6 % 2 === 0 (0) -> true -> [2, 4, 6]
//  7       7       7 % 2 === 0 (1) -> false -> [2, 4, 6]
//  8       8       8 % 2 === 0 (0) -> true -> [2, 4, 6, 8]
//  9       9       9 % 2 === 0 (1) -> false -> [2, 4, 6, 8]
//  10      10      10 % 2 === 0 (0) -> true -> [2, 4, 6, 8, 10]
// console.log('result', result) // -> [ 2, 4, 6, 8, 10 ]


// ---- filter array of object
// const userInfoList = [
//     {
//         name: 'jim',
//         age: 27,
//     },
//     {
//         name: 'Por',
//         age: 25,
//     },
//     {
//         name: 'lukgolf',
//         age: 20,
//     },
//     {
//         name: 'lukpat',
//         age: 19,
//     }
// ]
// const result = userInfoList.filter(userinfo => userinfo.age <= 20)
// console.log('result', result)

// --- for each ----
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const result = []
// array.forEach(value => {
//     if (value % 2 === 0) {
//         result.push(value)
//     }
// })

// console.log('result', result)
